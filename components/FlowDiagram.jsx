'use client';
import { useEffect, useRef } from 'react';

const PHRASES = [
  'Running billing\u2026',
  'Chasing overdue invoices\u2026',
  'Updating the ERP\u2026',
  'Reconciling payments\u2026',
  'Prepping monthly close\u2026',
];

function HubTicker() {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0;
    const iv = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      setTimeout(() => {
        i = (i + 1) % PHRASES.length;
        el.textContent = PHRASES[i];
        el.style.opacity = '1';
      }, 260);
    }, 2600);
    return () => clearInterval(iv);
  }, []);
  return <text ref={ref} className="fx-tick" x="480" y="240" textAnchor="middle">{PHRASES[0]}</text>;
}

export default function FlowDiagram() {
  return (
    <svg className="flow-svg" viewBox="0 0 960 430" xmlns="http://www.w3.org/2000/svg" role="img"
      aria-label="Diagram: invoice and payment data flows from Priority, SAP, NetSuite, QuickBooks, Xero and Stripe into Datamint; Datamint sends reminders by email, syncs status to CRM, matches payments with banks, and flags escalations in Slack.">
      <text className="fx-cap" x="30" y="16">DATA IN</text>
      <text className="fx-cap" x="770" y="16">ACTION OUT</text>
      <path key="pl0" className="con" d="M190,50 C300,50 300,150 392,150"/>
      <path key="pl1" className="con" d="M190,116 C300,116 300,166 392,166"/>
      <path key="pl2" className="con" d="M190,182 C300,182 300,182 392,182"/>
      <path key="pl3" className="con" d="M190,248 C300,248 300,198 392,198"/>
      <path key="pl4" className="con" d="M190,314 C300,314 300,214 392,214"/>
      <path key="pl5" className="con" d="M190,380 C300,380 300,230 392,230"/>
      <path key="pr0" className="con" d="M568,158 C670,158 670,68 770,68"/>
      <path key="pr1" className="con" d="M568,178 C670,178 670,156 770,156"/>
      <path key="pr2" className="con" d="M568,198 C670,198 670,244 770,244"/>
      <path key="pr3" className="con" d="M568,218 C670,218 670,332 770,332"/>
      <g key="l0"><rect className="fx-node" x="30" y="28" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="50" r="4"/><text className="fx-name" x="70" y="55">Priority</text></g>
      <g key="l1"><rect className="fx-node" x="30" y="94" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="116" r="4"/><text className="fx-name" x="70" y="121">SAP</text></g>
      <g key="l2"><rect className="fx-node" x="30" y="160" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="182" r="4"/><text className="fx-name" x="70" y="187">NetSuite</text></g>
      <g key="l3"><rect className="fx-node" x="30" y="226" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="248" r="4"/><text className="fx-name" x="70" y="253">QuickBooks</text></g>
      <g key="l4"><rect className="fx-node" x="30" y="292" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="314" r="4"/><text className="fx-name" x="70" y="319">Xero</text></g>
      <g key="l5"><rect className="fx-node" x="30" y="358" width="160" height="44" rx="10"/><circle className="fx-dot" cx="54" cy="380" r="4"/><text className="fx-name" x="70" y="385">Stripe</text></g>
      <g key="r0"><rect className="fx-node" x="770" y="42" width="164" height="52" rx="10"/><circle className="fx-dot" cx="794" cy="62" r="4"/><text className="fx-name" x="810" y="68">Email</text><text className="fx-sub" x="810" y="83">reminders & follow-ups</text></g>
      <g key="r1"><rect className="fx-node" x="770" y="130" width="164" height="52" rx="10"/><circle className="fx-dot" cx="794" cy="150" r="4"/><text className="fx-name" x="810" y="156">CRM</text><text className="fx-sub" x="810" y="171">status synced</text></g>
      <g key="r2"><rect className="fx-node" x="770" y="218" width="164" height="52" rx="10"/><circle className="fx-dot" cx="794" cy="238" r="4"/><text className="fx-name" x="810" y="244">Banks</text><text className="fx-sub" x="810" y="259">payments matched</text></g>
      <g key="r3"><rect className="fx-node" x="770" y="306" width="164" height="52" rx="10"/><circle className="fx-dot" cx="794" cy="326" r="4"/><text className="fx-name" x="810" y="332">Slack</text><text className="fx-sub" x="810" y="347">escalations flagged</text></g>
      <g>
        <circle className="ring ring-a" cx="480" cy="176" r="52" strokeWidth="1.5"/>
        <circle className="ring ring-b" cx="480" cy="176" r="52" strokeWidth="1"/>
        <rect className="fx-hub" x="392" y="118" width="176" height="140" rx="16" strokeWidth="1.5"/>
        <image href="/leaf.png" x="459" y="136" width="42" height="42"/>
        <text className="fx-hubname" x="480" y="202" textAnchor="middle">Datamint</text>
        <text className="fx-hubsub" x="480" y="219" textAnchor="middle">AI FINANCE OPS</text>
        <HubTicker/>
      </g>
      <circle key="fl0" className="fp" r="3.2"><animateMotion dur="2.6s" begin="0.0s" repeatCount="indefinite" path="M190,50 C300,50 300,150 392,150"/></circle>
      <circle key="fl1" className="fp" r="3.2"><animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite" path="M190,116 C300,116 300,166 392,166"/></circle>
      <circle key="fl2" className="fp" r="3.2"><animateMotion dur="2.6s" begin="0.9s" repeatCount="indefinite" path="M190,182 C300,182 300,182 392,182"/></circle>
      <circle key="fl3" className="fp" r="3.2"><animateMotion dur="2.6s" begin="1.4s" repeatCount="indefinite" path="M190,248 C300,248 300,198 392,198"/></circle>
      <circle key="fl4" className="fp" r="3.2"><animateMotion dur="2.6s" begin="1.8s" repeatCount="indefinite" path="M190,314 C300,314 300,214 392,214"/></circle>
      <circle key="fl5" className="fp" r="3.2"><animateMotion dur="2.6s" begin="2.2s" repeatCount="indefinite" path="M190,380 C300,380 300,230 392,230"/></circle>
      <circle key="fr0" className="fp" r="3.2"><animateMotion dur="2.4s" begin="0.70s" repeatCount="indefinite" path="M568,158 C670,158 670,68 770,68"/></circle>
      <circle key="fr1" className="fp" r="3.2"><animateMotion dur="2.4s" begin="1.25s" repeatCount="indefinite" path="M568,178 C670,178 670,156 770,156"/></circle>
      <circle key="fr2" className="fp" r="3.2"><animateMotion dur="2.4s" begin="1.80s" repeatCount="indefinite" path="M568,198 C670,198 670,244 770,244"/></circle>
      <circle key="fr3" className="fp" r="3.2"><animateMotion dur="2.4s" begin="2.35s" repeatCount="indefinite" path="M568,218 C670,218 670,332 770,332"/></circle>
    </svg>
  );
}
