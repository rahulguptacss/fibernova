'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, Wifi, Settings, Headset, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AboutSectionData } from '../../types';

interface AboutProps {
  data: AboutSectionData;
  hideCta?: boolean;
}

export default function About({ data, hideCta = false }: AboutProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00] fill-[#FF7A00]" strokeWidth={2.2} />;
      case 'Wifi':
        return <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00]" strokeWidth={2.2} />;
      case 'Settings':
        return <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00] fill-[#FF7A00]/30" strokeWidth={2.2} />;
      case 'Headset':
        return <Headset className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00]" strokeWidth={2.2} />;
      case 'Globe':
        return <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00]" strokeWidth={2.2} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00]" strokeWidth={2.2} />;
      default:
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A00] fill-[#FF7A00]" strokeWidth={2.2} />;
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      {/* Background Ambient Glows & Grid Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00A3FF]/8 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#FF7A00]/7 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A3FF_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
          {/* Left Column: Overlapping Images */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[520px] h-[310px] sm:h-[400px] lg:h-[460px] select-none"
            >
              {/* 1. Left Cyan/Blue Solid Accent Pill */}
              <div className="absolute left-0 top-[22%] w-10 sm:w-12 h-36 sm:h-44 bg-gradient-to-b from-[#00A3FF] to-[#0077FF] rounded-2xl sm:rounded-3xl z-[1] shadow-md shadow-sky-500/20" />

              {/* 2. Right Orange Solid Accent Pill */}
              <div className="absolute right-0 top-[34%] w-9 sm:w-11 h-34 sm:h-40 bg-gradient-to-b from-[#FFAE00] to-[#FF7A00] rounded-2xl sm:rounded-3xl z-[1] shadow-md shadow-orange-500/20" />

              {/* 3. Top-Right Dot Matrix Grid (6 cols x 4 rows) */}
              <div className="absolute right-10 sm:right-14 top-2 sm:top-4 grid grid-cols-6 gap-2.5 sm:gap-3 z-[1]">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00A3FF]/70" />
                ))}
              </div>

              {/* 4. Bottom-Left Concentric Wave Lines */}
              <motion.div
                animate={{
                  scale: [1, 1.025, 1],
                  opacity: [0.65, 0.85, 0.65],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
                className="absolute -left-8 sm:-left-12 -bottom-8 sm:-bottom-12 w-60 sm:w-72 h-60 sm:h-72 z-[1] pointer-events-none"
              >
                <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="260" r="45" stroke="#00A3FF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
                  <circle cx="20" cy="260" r="75" stroke="#00A3FF" strokeWidth="1.5" opacity="0.75" />
                  <circle cx="20" cy="260" r="105" stroke="#FF7A00" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.55" />
                  <circle cx="20" cy="260" r="135" stroke="#FF7A00" strokeWidth="1.2" opacity="0.45" />
                  <circle cx="20" cy="260" r="165" stroke="#00A3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  <circle cx="20" cy="260" r="195" stroke="#FF7A00" strokeWidth="0.8" opacity="0.25" />
                </svg>
              </motion.div>

              {/* 5. Main Photo (/images/about.webp) */}
              <div className="absolute right-4 sm:right-6 top-6 sm:top-8 w-[72%] sm:w-[74%] h-[78%] sm:h-[80%] rounded-[24px] sm:rounded-[32px] overflow-hidden z-[2] shadow-xl">
                <Image
                  src={data.image || '/images/about.webp'}
                  alt="Fiber Nova Technician"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 300px, 420px"
                />
              </div>

              {/* 6. Overlapping Hardware Photo (/images/router.webp) */}
              <div className="absolute left-3 sm:left-4 bottom-4 sm:bottom-6 w-[45%] sm:w-[46%] h-[48%] sm:h-[50%] rounded-[20px] sm:rounded-[26px] overflow-hidden z-[3] shadow-2xl border-[3.5px] border-white">
                <Image
                  src={data.image_secondary || '/images/router.webp'}
                  alt="Fiber Nova Router"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 180px, 240px"
                />
              </div>

              {/* 7. Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-10 sm:top-12 left-6 sm:left-8 z-[4] bg-white rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_10px_30px_rgba(0,163,255,0.18)] border border-sky-100 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00A3FF] to-[#0077FF] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  ★
                </div>
                <div>
                  <span className="text-base sm:text-lg font-extrabold text-[#0A1931] leading-none block">
                    {data.experience_badge?.years || '15+ Years'}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#00A3FF] font-semibold">
                    {data.experience_badge?.label || 'Fiber Excellence'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Exact Content & Features */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left lg:pl-2">
            {/* Tagline / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-7 h-[2.5px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A3FF] uppercase">
                {data.subtitle || 'ABOUT FIBER NOVA'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0A1931] leading-[1.18] tracking-tight mb-4"
            >
              <span className="block">{data.title_line1 || 'Connecting You to a'}</span>
              <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent inline-block">
                {data.title_highlight || 'Faster, Smoother'}
              </span>{' '}
              <span>{data.title_line2 || 'Digital World'}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64748b] text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-xl"
            >
              {data.description}
            </motion.p>

            {/* 4 Feature Points (2x2 Grid) with Logo Dual Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-x-3.5 sm:gap-x-8 gap-y-4 sm:gap-y-6 w-full mb-6 sm:mb-9"
            >
              {data.features?.map((item, idx) => {
                const isCyan = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-start gap-2.5 sm:gap-3.5 group cursor-default"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 shadow-2xs mt-0.5 ${
                        isCyan ? 'bg-[#E0F2FE] text-[#00A3FF]' : 'bg-[#FFF3EA] text-[#FF7A00]'
                      }`}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex flex-col">
                      <h3
                        className={`text-[13px] sm:text-[16px] font-bold text-[#0A1931] leading-tight transition-colors ${
                          isCyan ? 'group-hover:text-[#00A3FF]' : 'group-hover:text-[#FF7A00]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-[13px] text-[#64748b] mt-0.5 sm:mt-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            {!hideCta && data.button && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href={data.button.href || '#services'}
                  onClick={(e) => handleNavClick(e, data.button?.href || '#services')}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 group cursor-pointer"
                >
                  <span>{data.button.text || 'Explore Services'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
