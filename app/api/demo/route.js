// Serverless route for the Book a Demo form. Runs on Vercel, no third-party
// form host — the request lands here, we validate it, then relay it to
// itay@datamint.biz via Resend's HTTP API.
//
// Setup (one-time, in the Vercel project):
//   1. Create a free account at https://resend.com (no credit card).
//   2. Generate an API key.
//   3. Add it as an environment variable named RESEND_API_KEY
//      (Vercel dashboard -> Project -> Settings -> Environment Variables),
//      then redeploy.
//
// Until RESEND_API_KEY is set, this route replies with a clear error and the
// form's client-side fallback tells the visitor to email itay@datamint.biz
// directly, so no submission is silently lost.
//
// FROM_EMAIL defaults to Resend's shared test address, which works
// immediately with no setup. Once a sending domain is verified in Resend,
// set FROM_EMAIL (e.g. "Datamint <demo@datamint.biz>") for better
// deliverability and branding.

const TO_EMAIL = 'itay@datamint.biz';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Datamint Website <onboarding@resend.dev>';

const RULES = {
  fullname: (v) => typeof v === 'string' && v.trim().length >= 2,
  email: (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  company: (v) => typeof v === 'string' && v.trim().length >= 2,
  role: (v) => typeof v === 'string' && v.trim().length > 0,
  phone: (v) => typeof v === 'string' && v.replace(/[^\d]/g, '').length >= 7,
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this in.
  if (data.website) {
    return Response.json({ ok: true });
  }

  for (const [field, test] of Object.entries(RULES)) {
    if (!test(data[field])) {
      return Response.json({ error: `Missing or invalid field: ${field}` }, { status: 400 });
    }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — see setup notes in app/api/demo/route.js');
    return Response.json({ error: 'Email delivery is not configured yet.' }, { status: 500 });
  }

  const { fullname, email, company, role, phone } = data;
  const html = `
    <h2 style="font-family:sans-serif">New demo request</h2>
    <table style="font-family:sans-serif; font-size:15px; border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0; color:#666">Full name</td><td><b>${escapeHtml(fullname)}</b></td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#666">Work email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#666">Company</td><td>${escapeHtml(company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#666">Role</td><td>${escapeHtml(role)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#666">Phone</td><td>${escapeHtml(phone)}</td></tr>
    </table>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Demo request — ${company}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Resend API error:', res.status, detail);
      return Response.json({ error: 'Email provider rejected the request.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Failed to reach Resend:', err);
    return Response.json({ error: 'Could not reach the email provider.' }, { status: 502 });
  }
}
