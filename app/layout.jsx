import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fontDisplay = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-d',
  display: 'swap',
});
const fontBody = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-b',
  display: 'swap',
});
const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-m',
  display: 'swap',
});

export const metadata = {
  title: 'Datamint — The AI Finance Ops Layer',
  description:
    'Datamint automates billing operations and collections for B2B finance teams, and builds AI across the finance stack — strategy, implementation, agents and training.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Datamint — The AI Finance Ops Layer',
    description:
      'Finance that runs itself. AI that ships. Billing operations, AI-powered collections, and AI strategy, implementation and training for finance teams.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
