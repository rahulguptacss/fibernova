'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderData, LinkType } from '../../types';

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pricing', 'why-choose', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      setMobileMenuOpen(false);

      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }
      }, 100);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return activeSection === href.substring(1);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[84px]">
          {/* Left: Logo + Desktop Navigation */}
          <div className="flex items-center gap-5 xl:gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center shrink-0 cursor-pointer"
            >
              <div className="relative h-[40px] xs:h-[46px] sm:h-[58px] lg:h-[62px] w-[140px] xs:w-[160px] sm:w-52 lg:w-56 xl:w-60">
                <Image
                  src={data.logo_image || '/logo/logo.webp'}
                  alt={data.logo_text || 'Fiber Nova'}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 180px, 240px"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 whitespace-nowrap">
              {data.links?.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[13.5px] xl:text-[14.5px] font-semibold transition-colors duration-200 relative py-1 ${
                      active ? 'text-[#FF7A00]' : 'text-[#0A1931] hover:text-[#00A3FF]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <motion.div
                        layoutId="headerUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full"
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Action: Book Connection Button */}
          <div className="hidden md:flex items-center">
            <a
              href={data.button_link || '#contact'}
              onClick={(e) => handleNavClick(e, data.button_link || '#contact')}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
            >
              <span>{data.button_text || 'Book Connection'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          </div>

          {/* Mobile Menu Button + CTA */}
          <div className="flex items-center gap-2 sm:gap-3.5 lg:hidden shrink-0">
            <a
              href={data.button_link || '#contact'}
              onClick={(e) => handleNavClick(e, data.button_link || '#contact')}
              className="md:hidden inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all shrink-0"
            >
              <span>{data.button_text_mobile || data.button_text}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2.5 rounded-xl text-gray-700 hover:text-[#FF7A00] hover:bg-orange-50 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer with Touch Drag Support */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 60 || info.velocity.y > 300 || info.offset.y < -60) {
                setMobileMenuOpen(false);
              }
            }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-[0_12px_24px_rgba(0,0,0,0.06)] overflow-hidden touch-pan-y"
          >
            {/* Drag Handle Indicator */}
            <div className="flex justify-center pt-2 pb-1 cursor-grab">
              <span className="h-1.5 w-10 rounded-full bg-slate-300" />
            </div>

            <div className="px-4 sm:px-6 pt-2 pb-5 space-y-1">
              {data.links?.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.99] touch-manipulation ${
                      active
                        ? 'bg-[#FFF3EA] text-[#FF7A00] font-bold shadow-2xs'
                        : 'text-[#0A1931] hover:bg-orange-50/60 hover:text-[#FF7A00]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        active ? 'text-[#FF7A00] translate-x-0.5' : 'text-gray-300'
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
