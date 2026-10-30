'use client';

import React from 'react';
import Image from 'next/image';
import { Router, Wrench, Headset, ArrowRight, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServicesSectionData } from '../../types';

interface ServicesProps {
  data: ServicesSectionData;
  isGrid?: boolean;
}

export default function Services({ data, isGrid = false }: ServicesProps) {
  const getIcon = (iconName: string, isCyan: boolean) => {
    const fillClass = isCyan ? 'fill-[#00A3FF]' : 'fill-[#FF7A00]';
    const strokeClass = isCyan ? 'text-[#00A3FF]' : 'text-[#FF7A00]';
    switch (iconName) {
      case 'Wifi':
        return (
          <svg viewBox="0 0 24 24" className={`w-7 h-7 ${fillClass}`} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3 7.8a15.2 15.2 0 0 1 21.4 0 1.3 1.3 0 0 1-1.8 1.8 12.6 12.6 0 0 0-17.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M4.8 11.3a10.2 10.2 0 0 1 14.4 0 1.3 1.3 0 0 1-1.8 1.8 7.6 7.6 0 0 0-10.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M8.4 14.9a5.2 5.2 0 0 1 7.2 0 1.3 1.3 0 0 1-1.8 1.8 2.6 2.6 0 0 0-3.6 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <circle cx="12" cy="19.5" r="1.8" />
          </svg>
        );
      case 'Briefcase':
        return (
          <svg viewBox="0 0 24 24" className={`w-7 h-7 ${fillClass}`} xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1.5h-6V3z" />
            <path d="M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v3.2a1 1 0 0 1-.7.95l-7.3 2.1a2 2 0 0 1-2 0l-7.3-2.1A1 1 0 0 1 3 10.2V7z" />
            <path d="M3 12.5v5A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-5l-6.8 2a3.5 3.5 0 0 1-4.4 0L3 12.5zm9 2.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        );
      case 'Router':
        return <Router className={`w-6 h-6 ${strokeClass}`} strokeWidth={2.2} />;
      case 'Cpu':
      case 'Server':
        return (
          <svg viewBox="0 0 24 24" className={`w-7 h-7 ${fillClass}`} xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="5.25" r="0.9" fill="white" />
            <circle cx="17.5" cy="5.25" r="0.9" fill="white" />
            <rect x="2" y="9.75" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="12" r="0.9" fill="white" />
            <circle cx="17.5" cy="12" r="0.9" fill="white" />
            <rect x="2" y="16.5" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="18.75" r="0.9" fill="white" />
            <circle cx="17.5" cy="18.75" r="0.9" fill="white" />
          </svg>
        );
      case 'Wrench':
        return <Wrench className={`w-6 h-6 ${strokeClass}`} strokeWidth={2.2} />;
      case 'Headset':
        return <Headset className={`w-6 h-6 ${strokeClass}`} strokeWidth={2.2} />;
      default:
        return <Wifi className={`w-6 h-6 ${strokeClass}`} strokeWidth={2.2} />;
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
    <section id="services" className="pt-8 sm:pt-10 pb-12 sm:pb-14 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-[#00A3FF]/6 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[480px] h-[320px] bg-[#FF7A00]/6 rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Subtle Background Optical Stream Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] overflow-hidden -z-0">
        <svg viewBox="0 0 1440 900" fill="none" className="w-full h-full preserve-3d" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 300 280, 600 120, 1100 220 C 1300 260, 1500 210, 1600 200" stroke="#00A3FF" strokeWidth="1" strokeDasharray="6 6" opacity="0.4" />
          <path d="M-100 450 C 350 400, 750 550, 1200 480 C 1400 450, 1550 490, 1600 480" stroke="#FF7A00" strokeWidth="1" strokeDasharray="5 5" opacity="0.35" />
          <path d="M-100 700 C 400 750, 800 620, 1300 720 C 1450 750, 1550 710, 1600 700" stroke="#00A3FF" strokeWidth="1" opacity="0.25" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <div className="w-6 h-0.5 bg-[#00A3FF]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#00A3FF]">
              {data.subtitle || 'OUR SERVICES'}
            </span>
            <div className="w-6 h-0.5 bg-[#FF7A00]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0A1931] leading-tight tracking-tight mb-2.5"
          >
            {data.title_line1 || 'Our'}{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent">
              {data.title_highlight || 'Internet Services'}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-sm sm:text-base leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 6 Cards Grid (3x2) with Dual Brand Color Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {data.items?.map((item, idx) => {
            const isCyan = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-[22px] sm:rounded-[24px] p-3 sm:p-3.5 border transition-all duration-300 flex flex-col group h-full shadow-[0_4px_25px_rgba(0,0,0,0.04)] ${
                  isCyan
                    ? 'border-slate-100 hover:border-sky-200 hover:shadow-[0_12px_35px_rgba(0,163,255,0.08)]'
                    : 'border-slate-100 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(255,122,0,0.08)]'
                }`}
              >
                <a
                  href={item.link || '#contact'}
                  onClick={(e) => handleNavClick(e, item.link || '#contact')}
                  className="flex flex-col h-full"
                >
                  {/* Framed Image Container */}
                  <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={95}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlapping Circular Icon Badge */}
                  <div
                    className={`relative -mt-7 sm:-mt-8 ml-3 sm:ml-4 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${
                      isCyan ? 'bg-[#E0F2FE]' : 'bg-[#FFF3EA]'
                    }`}
                  >
                    {getIcon(item.icon, isCyan)}
                  </div>

                  {/* Card Body */}
                  <div className="px-3 sm:px-4 pt-3 pb-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-[19px] sm:text-[20px] font-extrabold text-[#0A1931] tracking-tight leading-snug transition-colors mb-2 ${
                          isCyan ? 'group-hover:text-[#00A3FF]' : 'group-hover:text-[#FF7A00]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] text-[#556480] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="pt-1">
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold transition-colors ${
                          isCyan ? 'text-[#00A3FF] group-hover:text-[#0082CC]' : 'text-[#FF7A00] group-hover:text-[#E66E00]'
                        }`}
                      >
                        <span>{item.link_text || data.card_button_text || 'Book Service'}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        {data.button && !isGrid && (
          <div className="text-center mt-10">
            <a
              href={data.button.href || '#contact'}
              onClick={(e) => handleNavClick(e, data.button?.href || '#contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 active:scale-95 cursor-pointer"
            >
              <span>{data.button.text || 'Check Availability'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
