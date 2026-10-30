import React from 'react';
import Link from 'next/link';
import Topbar from '../components/sections/Topbar/page';
import Header from '../components/sections/Header/page';
import Footer from '../components/sections/Footer/page';
import BackToTop from '../components/ui/BackToTop/page';
import { common } from '../components/types';
import { WifiOff, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Fiber Nova',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A1931] font-sans text-white">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="flex-1 flex items-center justify-center py-20 px-5 sm:px-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] flex items-center justify-center mx-auto mb-6 shadow-xl">
            <WifiOff className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] block mb-2">
            Signal Disconnected
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-3">
            404 - Page Not Found
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            The fiber optic line you are trying to reach does not exist or has been relocated to our main network.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FFA500] hover:brightness-105 text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-[#FF7A00]/25 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Fiber Nova Home</span>
          </Link>
        </div>
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
