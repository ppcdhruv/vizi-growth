import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ViziGrowth™ - Visibility. Credibility. Profitability.',
  description: 'A performance marketing powerhouse for fast-scaling brands.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
