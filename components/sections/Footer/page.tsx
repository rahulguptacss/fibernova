'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FooterData } from '../../types';

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    quick_links: false,
    our_services: false,
    contact_us: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF className="w-3.5 h-3.5" />;
      case 'instagram':
        return <FaInstagram className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedinIn className="w-3.5 h-3.5" />;
      case 'youtube':
        return <FaYoutube className="w-3.5 h-3.5" />;
      default:
        return <FaFacebookF className="w-3.5 h-3.5" />;
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
    <footer className="bg-gradient-to-b from-[#0A1931] via-[#08152B] to-[#040C1A] text-gray-300 pt-8 sm:pt-10 pb-4 sm:pb-5 border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-[#00A3FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_0.75px,transparent_0.75px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Main 4 Column Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-y-4 md:gap-y-6 pb-6 sm:pb-7">
          {/* Column 1: Logo & Bio & Socials */}
          <div className="w-full lg:w-[33%] shrink-0 flex flex-col justify-between lg:pr-8 xl:pr-10 lg:border-r lg:border-white/10 pb-4 md:pb-0 border-b border-white/10 md:border-b-0">
            <div>
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="inline-block -mt-1 sm:-mt-2"
              >
                <div className="relative h-16 sm:h-20 lg:h-[76px] w-64 sm:w-76 -ml-2 sm:-ml-3">
                  <Image
                    src={data.logo_image || '/logo/logo-w.webp'}
                    alt={data.logo_text || 'Fiber Nova'}
                    fill
                    priority
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 280px, 340px"
                  />
                </div>
              </a>

              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed max-w-xs -mt-1 sm:-mt-2 mb-4">
                {data.description ||
                  'Fiber Nova delivers ultra-fast optical fiber broadband with symmetric gigabit speeds, zero buffering, Wi-Fi 6 mesh coverage, and 24/7 dedicated customer care.'}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {data.socials?.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0F2342] border border-white/10 hover:border-[#00A3FF] hover:bg-gradient-to-r hover:from-[#00A3FF] hover:to-[#FF7A00] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                  aria-label={social.icon}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-[19%] shrink-0 flex flex-col lg:pl-8 xl:pl-9 pb-3 md:pb-0 border-b border-white/10 md:border-b-0">
            <button
              type="button"
              onClick={() => toggleSection('quick_links')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.quick_links}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  {data.quick_links_title || 'Quick Links'}
                </h4>
                <div className="w-7 h-[2px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#00A3FF] md:hidden transition-transform duration-200 ${
                  openSections.quick_links ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`${
                openSections.quick_links ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-2 sm:space-y-2.5">
                {data.quick_links?.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#00A3FF] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#00A3FF] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="w-full sm:w-1/2 lg:w-[21%] shrink-0 flex flex-col lg:pl-6 xl:pl-7 lg:pr-8 xl:pr-9 lg:border-r lg:border-white/10 pb-3 md:pb-0 border-b border-white/10 md:border-b-0">
            <button
              type="button"
              onClick={() => toggleSection('our_services')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.our_services}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  {data.our_services_title || 'Our Services'}
                </h4>
                <div className="w-7 h-[2px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#FF7A00] md:hidden transition-transform duration-200 ${
                  openSections.our_services ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`${
                openSections.our_services ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-2 sm:space-y-2.5">
                {data.our_services?.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#FF7A00] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="w-full lg:w-[27%] shrink-0 flex flex-col lg:pl-8 xl:pl-9 pb-2 md:pb-0">
            <button
              type="button"
              onClick={() => toggleSection('contact_us')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.contact_us}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  {data.contact_us_title || 'Contact Us'}
                </h4>
                <div className="w-7 h-[2px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#00A3FF] md:hidden transition-transform duration-200 ${
                  openSections.contact_us ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`${
                openSections.contact_us ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-3">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2342] border border-white/10 flex items-center justify-center text-[#00A3FF] shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 fill-[#00A3FF]/20" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-gray-300 leading-snug whitespace-pre-line">
                    {data.contact?.address || '123 Education Lane,\nNew York, NY 10001'}
                  </span>
                </li>

                {/* Phone */}
                {data.contact?.phone && (
                  <li className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2342] border border-white/10 flex items-center justify-center text-[#FF7A00] shrink-0 shadow-xs">
                      <Phone className="w-3.5 h-3.5 fill-[#FF7A00]" />
                    </div>
                    <a
                      href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#FF7A00] transition-colors font-medium"
                    >
                      {data.contact.phone}
                    </a>
                  </li>
                )}

                {/* Email */}
                {data.contact?.email && (
                  <li className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2342] border border-white/10 flex items-center justify-center text-[#00A3FF] shrink-0 shadow-xs">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#00A3FF] transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3.5 sm:pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400 font-normal">
            {data.copyright || 'Copyright © 2026. All rights reserved. Powered by Lestow'}
          </p>
        </div>
      </div>
    </footer>
  );
}
