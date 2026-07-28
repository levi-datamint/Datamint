const base = {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
};

export const Check = ({ w = 2.4 }) => (
  <svg {...base} strokeWidth={w}><path d="M20 6L9 17l-5-5" /></svg>
);

export const Arrow = ({ className }) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const IconBilling = () => (
  <svg {...base} strokeWidth={1.9}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h5" /></svg>
);

export const IconCollections = () => (
  <svg {...base} strokeWidth={1.9}><path d="M3 3v18h18" /><path d="M7 15l3-4 3 2 4-6" /></svg>
);

export const IconAI = () => (
  <svg {...base} strokeWidth={1.9}><path d="M12 2.5a5.5 5.5 0 0 0-3.2 9.98V15h6.4v-2.52A5.5 5.5 0 0 0 12 2.5z" /><path d="M9.4 18h5.2M10.4 21h3.2" /></svg>
);
