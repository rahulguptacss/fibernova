'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CtaBannerSectionData } from '../../types';

interface CtaBannerProps {
  data: CtaBannerSectionData;
}

export default function CtaBanner({ data }: CtaBannerProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-[#00A3FF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#FF7A00]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group/banner relative rounded-[22px] sm:rounded-[28px] border border-orange-100/90 shadow-[0_8px_30px_rgba(255,122,0,0.06)] overflow-hidden bg-gradient-to-br from-white via-[#FFFDF9] to-[#F0F9FF]/80 flex flex-col lg:flex-row items-stretch justify-between"
        >
          {/* Subtle Ambient Glow inside Card */}
          <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#00A3FF]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/3 w-60 h-60 bg-[#FF7A00]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text Content */}
          <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 lg:py-8 lg:pl-10 lg:pr-4 flex flex-col justify-center z-20 bg-transparent">
            {/* Subtitle tag with cyan & orange indicator */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#00A3FF]">
                {data.subtitle || 'LIGHTSPEED BROADBAND'}
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0A1931] leading-[1.18] tracking-tight mb-2 sm:mb-2.5"
            >
              {data.title_line1 || 'Ready for a Faster,'}
              <br />
              {data.title_line2 || 'Smarter'}{' '}
              <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent">
                {data.title_highlight || 'Fiber Experience?'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-md font-normal"
            >
              {data.description ||
                'Join thousands of happy users and get connected today with high-speed, reliable and secure optical fiber services.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <a
                href={data.button?.href || '#contact'}
                onClick={(e) => handleNavClick(e, data.button?.href || '#contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(255,122,0,0.3)] hover:shadow-[0_6px_22px_rgba(255,122,0,0.45)] active:scale-95 group/btn"
              >
                <span>{data.button?.text || 'Book Connection Now'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Image Container with Router & Glowing Wi-Fi */}
          <div className="w-full lg:w-[52%] xl:w-[54%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-[270px] overflow-hidden bg-slate-50">
            {/* Desktop Organic Curved Wave Transition Mask */}
            <div className="hidden lg:block absolute inset-y-0 -left-1 w-20 pointer-events-none z-10">
              <svg
                className="w-full h-full text-white fill-current"
                viewBox="0 0 100 300"
                preserveAspectRatio="none"
              >
                <path d="M0 0 L70 0 C40 90, 85 180, 25 300 L0 300 Z" />
              </svg>
            </div>

            {/* Mobile/Tablet Top Gradient Fade */}
            <div className="lg:hidden absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Pulsing Neon Dual Logo Glow Effect (Electric Cyan + Sunset Orange) */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.65, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-[18%] right-[22%] sm:right-[26%] w-24 h-24 sm:w-32 sm:h-32 bg-[#FF7A00]/25 rounded-full blur-2xl pointer-events-none z-10"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-[28%] right-[30%] sm:right-[35%] w-20 h-20 sm:w-28 sm:h-28 bg-[#00A3FF]/20 rounded-full blur-2xl pointer-events-none z-10"
            />

            {/* High-Resolution CTA Image (/images/router.webp) */}
            <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[270px]">
              <Image
                src={data.image || '/images/router.webp'}
                alt="Fiber Nova Ultra-Fast Router"
                fill
                quality={95}
                className="object-cover object-center group-hover/banner:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

