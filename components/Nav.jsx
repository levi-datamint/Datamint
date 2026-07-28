'use client';
import { useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => ref.current && ref.current.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="nav" ref={ref}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Datamint — home">
          <img className="lg-l" src="/logo-light.png" alt="Datamint" width="640" height="132" />
          <img className="lg-d" src="/logo-dark.png" alt="Datamint" width="640" height="132" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#platform">What we do</a>
          <a href="#consulting">AI Services</a>
          <a href="#results">Results</a>
          <a href="#customers">Customers</a>
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <a href="/book-demo" className="btn btn-ghost">Talk to Sales</a>
          <a href="/book-demo" className="btn btn-primary">Book a Demo</a>
        </div>
      </div>
    </header>
  );
}
