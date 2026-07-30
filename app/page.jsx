import Nav from '@/components/Nav';
import Effects from '@/components/Effects';
import FlowDiagram from '@/components/FlowDiagram';
import { VisittLogo, AniviewLogo, LcLogo, PsaLogo, BwLogo } from '@/components/logos';
import { Check, Arrow, IconBilling, IconCollections, IconAI } from '@/components/icons';

const Li = ({ b, children }) => (
  <li><Check /><span><b>{b}</b> — {children}</span></li>
);

export default function Home() {
  return (
    <>
      <Nav />
      <Effects />
      <main id="top">

        {/* HERO */}
        <section className="hero">
          <img className="hero-leaf" src="/leaf.png" alt="" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="reveal">
              <span className="eyebrow">The AI Finance Ops Layer</span>
              <h1>Finance that runs itself.<br />AI that <span className="g">ships.</span></h1>
              <p className="lead">Our team and our AI run your billing and collections end to end — your people only handle escalations. And we advise finance departments on what AI and automation they need everywhere else.</p>
              <div className="actions">
                <a href="/book-demo" className="btn btn-primary">Book a Demo<Arrow className="btn-arrow" /></a>
                <a href="#platform" className="btn btn-ghost">See what we do</a>
              </div>
              <p className="hero-note"><span className="dot" aria-hidden="true"></span> Zero to live in under two weeks — connected to your ERP.</p>
            </div>

            <div className="reveal mock-scene" aria-hidden="true">
              <div className="mock">
                <div className="mock-top">
                  <span className="tl"><i></i><i></i><i></i></span>
                  <span className="mt mono">datamint · AR dashboard</span>
                  <span className="pill mono">LIVE</span>
                </div>
                <div className="mock-body">
                  <div className="mock-h">
                    <div>
                      <div className="k">Recovered this month</div>
                      <div className="v tnum">$1.84M</div>
                    </div>
                    <div className="up tnum">▲ 40% faster</div>
                  </div>
                  <svg className="spark" viewBox="0 0 320 56" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="var(--leaf)" stopOpacity=".30" />
                        <stop offset="1" stopColor="var(--leaf)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="sa" d="M0,44 L26,42 L52,45 L78,38 L104,40 L130,32 L156,34 L182,25 L208,27 L234,18 L260,20 L286,10 L316,6 L316,56 L0,56 Z" fill="url(#sg)" />
                    <path className="sl" pathLength="1" d="M0,44 L26,42 L52,45 L78,38 L104,40 L130,32 L156,34 L182,25 L208,27 L234,18 L260,20 L286,10 L316,6" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle className="sd2" cx="316" cy="6" r="3.5" fill="var(--leaf)" />
                  </svg>
                  <div className="buckets">
                    <div className="bucket b-unre"><div className="bl"><i></i>Unresolved</div><div className="bn tnum">12</div><div className="bc tnum">$248K open</div></div>
                    <div className="bucket b-need"><div className="bl"><i></i>Needs attn</div><div className="bn tnum">7</div><div className="bc">promised soon</div></div>
                    <div className="bucket b-appr"><div className="bl"><i></i>Approved</div><div className="bn tnum">31</div><div className="bc">on track</div></div>
                  </div>
                  <div className="mock-row">
                    <span className="ai">AI</span>
                    <span><b>Acme Corp</b> asked to be billed against a PO. Datamint remembered — the next reminder waits for the PO number.</span>
                  </div>
                </div>
              </div>
              <div className="chip">
                <span className="ci"><Check w={2.6} /></span>
                <div><b>Payment received</b><span className="tnum">$48,200 · reconciled automatically</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED */}
        <section className="trusted">
          <div className="wrap reveal">
            <p className="cap mono">Trusted by finance teams across industries</p>
            <div className="logos">
              <div className="logo"><span className="lmk"><VisittLogo /></span><span className="ls">PropTech</span></div>
              <div className="logo"><span className="lmk"><LcLogo /></span><span className="ls">Cargo &amp; Logistics</span></div>
              <div className="logo"><span className="lmk"><AniviewLogo /></span><span className="ls">Ad Tech</span></div>
              <div className="logo"><span className="lmk lmk-plate"><PsaLogo /></span><span className="ls">Accounting Firm</span></div>
              <div className="logo"><span className="lmk"><span className="lockup"><img src="/smartup.png" alt="" width="108" height="108" loading="lazy" decoding="async" /><span className="ln">Smartup Academy</span></span></span><span className="ls">Education</span></div>
              <div className="logo"><span className="lmk"><BwLogo /></span><span className="ls">CFO Services</span></div>
            </div>
          </div>
        </section>

        {/* OFFERINGS */}
        <section className="sect" id="platform">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">What we do</span>
              <h2 className="title">One team. Three ways we put AI to work in finance.</h2>
              <p className="lead">We run the first two for you. The third we help you build.</p>
              <p className="callout">Most vendors hand you software and wish you luck. We take the process. Our team and our AI run billing and collections end to end — your people handle escalations, nothing else.</p>
            </div>
            <div className="trio">
              <div className="offer reveal">
                <span className="tag tag-managed">Fully managed</span>
                <div className="oi"><IconBilling /></div>
                <h3>Billing Operations</h3>
                <p className="od">We take the billing cycle off your desk. Invoices raised, sent, landed in the customer&rsquo;s system and matched when they pay — run by our team, with full visibility for yours.</p>
                <ul>
                  <Li b="Invoice automation">invoices raised, formatted and sent without manual keying.</Li>
                  <Li b="ERP integrations">Priority, SAP, NetSuite, QuickBooks, Stripe, Xero — synced daily.</Li>
                  <Li b="Payment workflows">terms, reminders and payment routes wired end to end.</Li>
                  <Li b="Reconciliation">payments matched to invoices automatically, exceptions surfaced.</Li>
                </ul>
                <a href="/book-demo" className="more">Talk to us about billing<Arrow /></a>
              </div>

              <div className="offer reveal">
                <span className="tag tag-managed">Fully managed</span>
                <div className="oi"><IconCollections /></div>
                <h3>Collections</h3>
                <p className="od">Our team and our AI run the whole collections cycle — tailored outreach, promises tracked, deposits watched, every invoice live on one dashboard. Your people step in on escalations, not follow-ups.</p>
                <ul>
                  <Li b="AI-powered collections platform">outreach tailored by amount, relationship and days overdue.</Li>
                  <Li b="AR management">every invoice sorted into Unresolved, Needs Attention, Approved.</Li>
                  <Li b="Customer follow-up">promises tracked, deposits watched, late payers nudged automatically.</Li>
                  <Li b="Cash flow optimization">forecasting from real payment behaviour, not spreadsheet guesses.</Li>
                </ul>
                <a href="#results" className="more">Explore the platform<Arrow /></a>
              </div>

              <div className="offer reveal">
                <span className="tag">New</span>
                <div className="oi"><IconAI /></div>
                <h3>AI Services</h3>
                <p className="od">We advise finance departments on what AI and automation to use, then implement it — collections, close, forecasting, reporting. You get operators who run an AI finance platform in production every day, not slideware.</p>
                <ul>
                  <Li b="AI Strategy">map your finance ops and rank automations by ROI.</Li>
                  <Li b="AI Consulting">an operator&rsquo;s read on what to build, buy or leave alone.</Li>
                  <Li b="AI Implementation">workflows deployed into your existing stack, not alongside it.</Li>
                  <Li b="AI Agents">agents that carry real work, with guardrails where stakes justify them.</Li>
                  <Li b="Workflow Automation">the manual handoffs between systems, closed for good.</Li>
                  <Li b="AI Training for Finance Teams">your people trained to run, trust and extend it.</Li>
                </ul>
                <a href="#consulting" className="more">See how it works<Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="sect integ" id="integrations">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Integrations</span>
              <h2 className="title">Connected to everything your money touches.</h2>
              <p className="lead">Invoices and payments flow in from your systems of record. Reminders, status updates and alerts flow out through the tools your team already lives in. Datamint sits in the middle and does the work.</p>
            </div>
            <div className="flow-scroll reveal" role="group" aria-label="Integration flow diagram">
              <FlowDiagram />
            </div>
            <p className="flow-note reveal"><span className="dot" aria-hidden="true"></span> Two-way sync, refreshed daily — connected during week one of onboarding.</p>
          </div>
        </section>

        {/* RESULTS */}
        <section className="sect band" id="results">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Collections results</span>
              <h2 className="title">Measurable impact on your bottom line — within weeks.</h2>
              <p className="lead">Measured on the collections platform, across teams running it in production — the numbers finance actually reports on.</p>
            </div>
            <div className="stats reveal">
              <div className="stat"><div className="sn tnum"><span className="cnt" data-cnt="60">60</span><span className="u">%</span></div><div className="sl">Drop in admin work</div><div className="sd">Hours reclaimed from manual emails and follow-ups.</div></div>
              <div className="stat"><div className="sn tnum"><span className="cnt" data-cnt="40">40</span><span className="u">%</span></div><div className="sl">Faster cash recovery</div><div className="sd">Accelerated cash flow and liquidity.</div></div>
              <div className="stat"><div className="sn tnum"><span className="cnt" data-cnt="20">20</span><span className="u">%</span></div><div className="sl">Fewer past-due invoices</div><div className="sd">Significantly reduced Days Sales Outstanding.</div></div>
              <div className="stat"><div className="sn tnum">&lt;2<span className="u">wks</span></div><div className="sl">To go live</div><div className="sd">ERP connected, dashboard live, AI collecting.</div></div>
            </div>
          </div>
        </section>

        {/* CONSULTING */}
        <section className="sect" id="consulting">
          <div className="wrap cwrap">
            <div className="reveal">
              <span className="eyebrow">AI Services</span>
              <h2 className="title">We build the AI. You keep the results.</h2>
              <p className="lead">Not just collections. We sit with your finance department, work out which AI and automation are worth having — and which aren&rsquo;t — then build and embed them. Close, forecasting, reporting, reconciliation: wherever the manual work actually sits.</p>
              <p className="callout">We run our own AI finance platform in production every day. When we advise you, it&rsquo;s from the operator&rsquo;s seat — not the whiteboard.</p>
            </div>
            <div className="steps reveal">
              <div className="step"><span className="sx">01</span><div><h4>Advise</h4><p>We map your finance department end to end and tell you which AI and automation are worth it — and which are not.</p></div></div>
              <div className="step"><span className="sx">02</span><div><h4>Build</h4><p>We design and deploy AI workflows and agents directly into your stack — ERP, billing, email, data.</p></div></div>
              <div className="step"><span className="sx">03</span><div><h4>Enable</h4><p>We train your team to run and trust the system, with clear guardrails and human review where it matters.</p></div></div>
              <div className="step"><span className="sx">04</span><div><h4>Improve</h4><p>We stay on to measure impact, tune what is running, and move to the next workflow that is ready.</p></div></div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="sect">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">AI vs. manual</span>
              <h2 className="title">Datamint tames invoice chaos.</h2>
              <p className="lead">Juggling unpaid invoices by hand means details slip. Datamint turns that struggle into a system that remembers everything and follows up on its own.</p>
            </div>
            <div className="table-scroll reveal">
              <table className="cmp">
                <caption className="sr">Datamint AI compared with a manual collections process</caption>
                <thead><tr><th scope="col">Capability</th><th scope="col" className="dm">Datamint AI</th><th scope="col">Manual process</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Memory</th><td className="dm"><span className="yes"><Check w={2.6} />Perfect recall of every request</span></td><td><span className="no">Prone to forgetting</span></td></tr>
                  <tr><th scope="row">Organization</th><td className="dm"><span className="yes"><Check w={2.6} />Smart Buckets, always current</span></td><td><span className="no">Chaotic and messy</span></td></tr>
                  <tr><th scope="row">Follow-up</th><td className="dm"><span className="yes"><Check w={2.6} />Automated and on time</span></td><td><span className="no">Inconsistent</span></td></tr>
                  <tr><th scope="row">Payment promises</th><td className="dm"><span className="yes"><Check w={2.6} />Watches for the deposit, nudges if late</span></td><td><span className="no">Hope for the best</span></td></tr>
                  <tr><th scope="row">Cash visibility</th><td className="dm"><span className="yes"><Check w={2.6} />Real-time dashboard and forecast</span></td><td><span className="no">Stale spreadsheets</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CUSTOMERS */}
        <section className="sect" id="customers">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Customers</span>
              <h2 className="title">Finance teams that put AI to work with Datamint.</h2>
              <p className="lead">From proptech to freight, ad tech to public accounting — teams rely on Datamint to get billing right, cash in sooner, and AI actually running in production.</p>
            </div>
            <div className="cust-grid">
              <div className="cust reveal"><span className="clg"><VisittLogo /></span></div>
              <div className="cust reveal"><span className="clg"><LcLogo /></span></div>
              <div className="cust reveal"><span className="clg"><AniviewLogo /></span></div>
              <div className="cust reveal"><span className="clg lmk-plate"><PsaLogo /></span></div>
              <div className="cust reveal"><span className="clg"><span className="lockup"><img src="/smartup.png" alt="Smartup Academy" width="108" height="108" loading="lazy" decoding="async" /><span className="ln">Smartup Academy</span></span></span></div>
              <div className="cust reveal"><span className="clg"><BwLogo /></span></div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="sect final" id="demo">
          <div className="wrap reveal">
            <div className="box">
              <span className="eyebrow">Get started</span>
              <h2 className="title">Ready to stop chasing and start automating?</h2>
              <p className="lead">Join finance teams running their billing, collections and AI build work with Datamint.</p>
              <div className="actions">
                <a href="/book-demo" className="btn btn-primary">Book a Demo<Arrow className="btn-arrow" /></a>
                <a href="/book-demo" className="btn btn-ghost">Talk to Sales</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div className="fbrand">
              <a className="brand" href="#top" aria-label="Datamint — home">
                <img className="lg-l" src="/logo-light.png" alt="Datamint" width="640" height="132" />
                <img className="lg-d" src="/logo-dark.png" alt="Datamint" width="640" height="132" />
              </a>
              <p>The AI Finance Ops Layer. Faster cash, happier customers, empowered teams.</p>
            </div>
            <div className="foot-cols">
              <div className="foot-col">
                <h5>Product</h5>
                <a href="#platform">What we do</a>
                <a href="#integrations">Integrations</a>
                <a href="#consulting">AI Services</a>
                <a href="#results">Results</a>
                <a href="#customers">Customers</a>
              </div>
              <div className="foot-col">
                <h5>Contact</h5>
                <a href="mailto:itay@datamint.biz">itay@datamint.biz</a>
                <a href="tel:+972507664624">+972-50-7664624</a>
                <a href="https://us.datamint.biz">us.datamint.biz</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Datamint Ltd. · Tel Aviv, Israel</span>
            <span className="mono">Get paid faster. See your cash clearly.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
