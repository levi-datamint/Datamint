'use client';
import { useState } from 'react';

/* Where the form sends to.
   Empty string -> opens a pre-filled email in the visitor's own mail client.
   Set to a Formspree/HubSpot/webhook URL to POST JSON instead.
   On Vercel you can also point this at a route handler, e.g. '/api/demo'. */
const FORM_ENDPOINT = '';
const FALLBACK_EMAIL = 'itay@datamint.biz';

const RULES = {
  fullname: { test: (v) => v.trim().length >= 2, why: 'Enter your full name.' },
  email: { test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), why: 'Enter a valid email, like dana@company.com.' },
  company: { test: (v) => v.trim().length >= 2, why: 'Enter your company name.' },
  role: { test: (v) => !!v, why: 'Pick the closest role.' },
  phone: { test: (v) => v.replace(/[^\d]/g, '').length >= 7, why: 'Enter a reachable phone number, with country code if outside Israel.' },
};

const ROLES = ['CFO', 'VP Finance', 'Finance Manager', 'Controller', 'AR / Collections Manager', 'Accountant / Bookkeeper', 'CEO / Founder', 'COO / Operations', 'Other'];

const ErrMsg = ({ children }) => (
  <p className="msg" style={{ display: children ? 'flex' : 'none' }}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 16.5v.5" /></svg>
    <span>{children}</span>
  </p>
);

export default function DemoForm() {
  const [values, setValues] = useState({ fullname: '', email: '', company: '', role: '', phone: '', website: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [formErr, setFormErr] = useState(null);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: !RULES[k].test(v) }));
  };
  const blur = (k) => () => {
    if (values[k] !== '') setErrors((s) => ({ ...s, [k]: !RULES[k].test(values[k]) }));
  };
  const cls = (k) => 'field' + (errors[k] ? ' err' : '');

  const submit = (e) => {
    e.preventDefault();
    setFormErr(null);
    if (values.website !== '') return; // honeypot

    const next = {};
    let bad = null;
    for (const k of Object.keys(RULES)) {
      next[k] = !RULES[k].test(values[k]);
      if (next[k] && !bad) bad = k;
    }
    setErrors(next);
    if (bad) {
      setFormErr('Check the highlighted fields above, then try again.');
      document.getElementById(bad)?.focus();
      return;
    }

    setSending(true);
    if (!FORM_ENDPOINT) {
      const body =
        `Full name: ${values.fullname}\nWork email: ${values.email}\nCompany: ${values.company}\nRole: ${values.role}\nPhone: ${values.phone}\n`;
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent('Demo request — ' + values.company)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => { setDone(true); setSending(false); }, 400);
      return;
    }
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ fullname: values.fullname, email: values.email, company: values.company, role: values.role, phone: values.phone }),
    })
      .then((res) => { if (!res.ok) throw new Error('HTTP ' + res.status); setDone(true); })
      .catch(() => setFormErr(`That didn't go through. Email us at ${FALLBACK_EMAIL} and we'll set it up manually.`))
      .finally(() => setSending(false));
  };

  const reset = () => {
    setValues({ fullname: '', email: '', company: '', role: '', phone: '', website: '' });
    setErrors({}); setFormErr(null); setDone(false);
  };

  if (done) {
    return (
      <div className="done on" role="status" aria-live="polite">
        <div className="tick">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h2>Request received</h2>
        <p>Thanks, <span className="who">{values.fullname.trim().split(/\s+/)[0] || 'there'}</span> — we&rsquo;ll be in touch at <span className="who">{values.email.trim()}</span> within one business day to lock in a time.</p>
        <p style={{ marginTop: '.9rem', fontSize: '.88rem', color: 'var(--muted)' }}>
          Need it sooner? Call <a href="tel:+972507664624" style={{ color: 'var(--accent)', fontWeight: 600 }}>+972-50-7664624</a>.
        </p>
        <button type="button" className="again" onClick={reset}>Submit another request</button>
      </div>
    );
  }

  return (
    <div>
      <h2 id="formTitle">Request your demo</h2>
      <p className="sub">We reply within one business day.</p>

      <form onSubmit={submit} noValidate>
        <div className="fields">
          <div className={cls('fullname')}>
            <label htmlFor="fullname">Full name <span className="req" aria-hidden="true">*</span></label>
            <input type="text" id="fullname" autoComplete="name" placeholder="Dana Levi" required
              value={values.fullname} onChange={set('fullname')} onBlur={blur('fullname')} aria-invalid={!!errors.fullname} />
            <ErrMsg>{errors.fullname && RULES.fullname.why}</ErrMsg>
          </div>

          <div className={cls('email')}>
            <label htmlFor="email">Work email <span className="req" aria-hidden="true">*</span></label>
            <input type="email" id="email" autoComplete="email" inputMode="email" placeholder="dana@company.com" required
              value={values.email} onChange={set('email')} onBlur={blur('email')} aria-invalid={!!errors.email} />
            <ErrMsg>{errors.email && RULES.email.why}</ErrMsg>
          </div>

          <div className="row2">
            <div className={cls('company')}>
              <label htmlFor="company">Company <span className="req" aria-hidden="true">*</span></label>
              <input type="text" id="company" autoComplete="organization" placeholder="Company Ltd." required
                value={values.company} onChange={set('company')} onBlur={blur('company')} aria-invalid={!!errors.company} />
              <ErrMsg>{errors.company && RULES.company.why}</ErrMsg>
            </div>

            <div className={cls('role')}>
              <label htmlFor="role">Role <span className="req" aria-hidden="true">*</span></label>
              <select id="role" autoComplete="organization-title" required
                value={values.role} onChange={set('role')} aria-invalid={!!errors.role}>
                <option value="" disabled>Select your role</option>
                {ROLES.map((r) => <option key={r}>{r}</option>)}
              </select>
              <ErrMsg>{errors.role && RULES.role.why}</ErrMsg>
            </div>
          </div>

          <div className={cls('phone')}>
            <label htmlFor="phone">Phone number <span className="req" aria-hidden="true">*</span> <span className="hint">— so we can schedule quickly</span></label>
            <input type="tel" id="phone" autoComplete="tel" inputMode="tel" placeholder="+972 50 123 4567" required
              value={values.phone} onChange={set('phone')} onBlur={blur('phone')} aria-invalid={!!errors.phone} />
            <ErrMsg>{errors.phone && RULES.phone.why}</ErrMsg>
          </div>

          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input type="text" id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
          </div>
        </div>

        <button type="submit" className="submit" disabled={sending}>
          <span>{sending ? 'Sending…' : 'Book my demo'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
        {formErr && <p className="formerr on" role="alert">{formErr}</p>}
        <p className="privacy">Your details go to the Datamint team only — we don&rsquo;t sell or share them.</p>
      </form>
    </div>
  );
}
