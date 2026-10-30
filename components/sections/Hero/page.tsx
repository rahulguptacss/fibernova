'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSectionData } from '../../types';

interface HeroProps {
  data: HeroSectionData;
}

export default function Hero({ data }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFFFFF] to-[#F0F9FF]/60 border-b border-orange-100/40">
      {/* Background Ambient Glows & Fiber Optic Effects */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-[#FF7A00]/12 to-[#FFAE00]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-28 w-[440px] h-[440px] bg-gradient-to-bl from-[#00A3FF]/12 to-[#0077FF]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Faint Fiber Optic Network Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A3FF_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none -z-10" />

      {/* Main Grid: Left Container + Right Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row items-center lg:items-stretch justify-between min-h-[400px] lg:min-h-[480px]">
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-6 sm:py-8 lg:py-10 z-10 order-2 lg:order-1 pr-0 lg:pr-6">
          {/* Top Tagline with Gradient Horizontal Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-3 sm:mb-4"
          >
            <span className="w-8 h-[2.5px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full inline-block" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-[#00A3FF]">
              {data.badge_text || 'FAST. RELIABLE. ALWAYS ON.'}
            </span>
          </motion.div>

          {/* Main Heading matching 3-line format */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-extrabold text-[#0A1931] leading-[1.15] tracking-tight mb-3.5 sm:mb-4"
          >
            {data.title_line1 || 'High-Speed Fiber'} <br />
            {data.title_line2 || 'for a Smarter'} <br />
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent inline-block">
              {data.title_highlight || 'Everyday'}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg"
          >
            {data.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <a
              href={data.primary_button?.href || '#contact'}
              onClick={(e) => handleNavClick(e, data.primary_button?.href || '#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{data.primary_button?.text || 'Get Connected'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            {data.secondary_button && (
              <a
                href={data.secondary_button?.href || '#pricing'}
                onClick={(e) => handleNavClick(e, data.secondary_button?.href || '#pricing')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#00A3FF]/40 hover:border-[#00A3FF] text-[#00A3FF] hover:text-[#0082CC] bg-sky-50/50 hover:bg-sky-50 px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xs cursor-pointer"
              >
                <span>{data.secondary_button?.text || 'Explore Plans'}</span>
              </a>
            )}
          </motion.div>
        </div>

        {/* Right Column: Full Height Image with Mobile Responsive Frame */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center self-stretch p-0 min-h-[290px] xs:min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] rounded-2xl sm:rounded-3xl lg:rounded-none overflow-hidden order-1 lg:order-2 shadow-sm lg:shadow-none my-3 lg:my-0">
          {/* Background Image: /images/hero.webp */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={data.image || '/images/hero.webp'}
              alt="High-Speed Optical Fiber Internet"
              fill
              priority
              quality={95}
              className="object-cover object-center lg:object-[center_right]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Overlay 1: Orange Orbital Elliptical Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
          >
            <svg
              className="w-[90%] xs:w-[94%] sm:w-[102%] lg:w-[110%] h-[90%] xs:h-[94%] sm:h-[102%] lg:h-[110%] max-w-[700px] overflow-visible"
              viewBox="0 0 689 579"
              fill="none"
            >
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A3FF" />
                  <stop offset="35%" stopColor="#0077FF" />
                  <stop offset="65%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#FFAE00" />
                </linearGradient>
                <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <ellipse
                cx="345"
                cy="295"
                rx="318"
                ry="178"
                transform="rotate(-10 345 295)"
                stroke="url(#orbitGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                filter="url(#ringGlow)"
                className="opacity-95"
              />
            </svg>
          </motion.div>

          {/* Overlay 2: Top-Left Card ("Streaming Lag-Free") */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -6, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            }}
            className="absolute top-3 xs:top-4 sm:top-[24%] lg:top-[28%] left-3 xs:left-4 sm:left-6 lg:left-8 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-3xl px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-5 sm:py-3.5 shadow-md sm:shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-sky-100 flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 text-left"
          >
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-12 sm:h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
              <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#00A3FF] to-[#0066FF] flex items-center justify-center shadow-md shadow-sky-500/30 text-white">
                <Play className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 fill-white text-white ml-0.5" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] xs:text-xs sm:text-[14px] font-bold text-[#0A1931] leading-tight">
                {data.floating_badge_top?.text || 'Streaming'}
              </span>
              <span className="text-[10px] xs:text-xs sm:text-[14px] font-bold text-[#00A3FF] leading-tight">
                {data.floating_badge_top?.subtext || 'Lag-Free'}
              </span>
            </div>
          </motion.div>

          {/* Overlay 3: Bottom-Right Card ("Ultra-Fast Speed 1 Gbps") */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 6, 0],
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.03 }}
            className="absolute bottom-3 xs:bottom-4 sm:bottom-10 right-3 xs:right-4 sm:right-6 lg:right-8 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-3xl p-2.5 xs:p-3 sm:px-6 sm:py-4.5 shadow-md sm:shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-orange-100 flex items-center gap-2.5 sm:gap-4 text-left"
          >
            <div className="flex flex-col">
              <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-[#00A3FF] uppercase tracking-wider">
                {data.floating_badge_bottom?.label || 'ULTRA-FAST SPEED'}
              </span>
              <div className="flex items-baseline gap-1 sm:gap-1.5 mt-0.5">
                <span className="text-base xs:text-lg sm:text-3xl font-extrabold text-[#0A1931] tracking-tight leading-none">
                  {data.floating_badge_bottom?.speed || '1 Gbps'}
                </span>
                <span className="text-[10px] xs:text-xs sm:text-sm font-extrabold text-[#FF7A00]">
                  {data.floating_badge_bottom?.tag || 'Symmetric'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
