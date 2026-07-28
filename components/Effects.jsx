'use client';
import { useEffect } from 'react';

/* Scroll-reveal + stat count-up. Class-based on purpose: the reveal targets
   are scattered across static server markup, and one observer here keeps
   that markup free of client boundaries. */
export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || reduced) {
      els.forEach((e) => e.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add('in');
              io.unobserve(x.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      els.forEach((e) => io.observe(e));
    }

    const stats = document.querySelector('.stats');
    let io2;
    if (stats && !reduced && 'IntersectionObserver' in window) {
      io2 = new IntersectionObserver(
        (es) => {
          es.forEach((x) => {
            if (!x.isIntersecting) return;
            io2.disconnect();
            stats.querySelectorAll('.cnt').forEach((el) => {
              const t = +el.getAttribute('data-cnt');
              const s0 = performance.now();
              const tick = (now) => {
                const p = Math.min(1, (now - s0) / 1100);
                el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });
          });
        },
        { threshold: 0.4 }
      );
      io2.observe(stats);
    }
    return () => io2 && io2.disconnect();
  }, []);
  return null;
}
