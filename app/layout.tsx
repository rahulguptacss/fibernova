import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { pages } from '../components/types';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: pages.home?.metadata?.title || 'Fiber Nova – INTERNET & BROADBAND SERVICES',
  description: pages.home?.metadata?.description || 'Experience lightning-fast optical fiber broadband with symmetric speeds up to 1 Gbps, unlimited data, and 24/7 dedicated support with Fiber Nova.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
