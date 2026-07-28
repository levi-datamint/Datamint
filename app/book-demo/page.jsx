import ThemeToggle from '@/components/ThemeToggle';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Book a Demo — Datamint',
  description: 'See Datamint running on your own numbers. Book a 30-minute demo covering billing operations, collections and AI services.',
  robots: { index: false },
};

export default function BookDemo() {
  return (
    <>
      <header className="top">
        <div className="wrap top-inner">
          <a className="brand" href="/" aria-label="Datamint — home">
            <img className="lg-l" src="/logo-light.png" alt="Datamint" width="640" height="132" />
            <img className="lg-d" src="/logo-dark.png" alt="Datamint" width="640" height="132" />
          </a>
          <div className="top-right">
            <a className="back" href="/">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              <span>Back to site</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="demo-main">
        <img className="leaf-bg" src="/leaf.png" alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="intro">
            <span className="eyebrow">Book a demo</span>
            <h1>See Datamint running on <span className="g">your own</span> numbers.</h1>
            <p>Thirty minutes, your actual data, no slideware. We&rsquo;ll show you where AI fits across your billing, collections and finance ops — and what it&rsquo;s worth.</p>
          </div>

          <div className="cols">
            <section className="card" aria-labelledby="formTitle">
              <DemoForm />
            </section>

            <aside className="rail">
              <div className="panel">
                <h3>What happens next</h3>
                <ol className="flow">
                  <li><span className="n">01</span><div><b>We confirm</b><span>One of us replies within one business day with times that work.</span></div></li>
                  <li><span className="n">02</span><div><b>30-minute call</b><span>We walk your real numbers — billing, aging, DSO, and where AI fits.</span></div></li>
                  <li><span className="n">03</span><div><b>Live in under two weeks</b><span>ERP connected day 1–3, dashboard day 4–7, AI collecting by week 2.</span></div></li>
                </ol>
              </div>

              <div className="panel trust">
                <h3>Already working with Datamint</h3>
                <div className="names">
                  <span>Visitt<span className="ac">.io</span></span>
                  <span>LogistiCare</span>
                  <span>Aniview</span>
                  <span>Philip Stein</span>
                </div>
                <div className="facts">
                  <div><div className="fn">40<span className="u">%</span></div><div className="fl">Faster cash recovery</div></div>
                  <div><div className="fn">60<span className="u">%</span></div><div className="fl">Drop in admin work</div></div>
                </div>
              </div>

              <div className="panel">
                <h3>Prefer to talk first?</h3>
                <p className="directline" style={{ marginTop: '.85rem' }}>
                  Email <a href="mailto:itay@datamint.biz">itay@datamint.biz</a><br />
                  or call <a href="tel:+972507664624">+972-50-7664624</a>.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="demo-foot">
        <div className="wrap foot-in">
          <span>© 2026 Datamint Ltd. · Tel Aviv, Israel</span>
          <span className="mono">Get paid faster. See your cash clearly.</span>
        </div>
      </footer>
    </>
  );
}
