'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  User,
  Wifi,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactSectionData } from '../../types';

interface ContactProps {
  data: ContactSectionData;
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service_type: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = data.form?.service_options || [
    'Home Broadband (100 Mbps)',
    'Turbo Streamer (300 Mbps)',
    'GigaMax Pro (1 Gbps)',
    'Business Dedicated Fiber',
    'Wi-Fi 6 Mesh Setup',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanNumbers = e.target.value.replace(/\D/g, '');
    setFormData((prev) => ({ ...prev, phone: cleanNumbers }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        service_type: '',
        message: '',
        consent: false,
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/70 to-[#FFF8F3]/60 relative overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-[#00A3FF]/7 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#FF7A00]/7 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A3FF_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* BOOKING / INQUIRY FORM + PHOTO SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#00A3FF]">
                {data.form?.subtitle || 'SEND US A MESSAGE'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0A1931] tracking-tight leading-tight mb-2">
              {data.form?.title_line1 || 'Get In'}{' '}
              <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent">
                {data.form?.title_highlight || 'Touch'}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              {data.form?.description ||
                'Fill out the form below and our optical fiber engineering team will contact you within 2 hours.'}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FFF3EA] border border-[#FF7A00]/30 rounded-2xl p-7 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#FF7A00] mx-auto mb-2.5" />
                <h4 className="text-lg font-bold text-[#0A1931]">
                  {data.form?.success_title || 'Thank You for Reaching Out!'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  {data.form?.success_message ||
                    'Your enquiry has been received. Our Fiber Nova specialist will connect with you shortly.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder={data.form?.placeholders?.name || 'Full Name *'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      placeholder={data.form?.placeholders?.phone || 'Phone Number *'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder={data.form?.placeholders?.email || 'Email Address *'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder={data.form?.placeholders?.city || 'Installation Address *'}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>
                </div>

                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className={`w-full bg-white border rounded-xl pl-10 pr-10 py-3 text-xs sm:text-[13.5px] text-left flex items-center justify-between transition-all cursor-pointer select-none touch-manipulation min-h-[46px] ${
                      isDropdownOpen
                        ? 'border-[#FF7A00] ring-1 ring-[#FF7A00] shadow-sm'
                        : 'border-gray-200/90 hover:border-gray-300'
                    }`}
                  >
                    <Wifi
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                        formData.service_type || isDropdownOpen ? 'text-[#FF7A00]' : 'text-gray-400'
                      }`}
                    />
                    <span className={formData.service_type ? 'text-gray-800 font-medium' : 'text-gray-400'}>
                      {formData.service_type || data.form?.placeholders?.service_type || 'Select Desired Fiber Plan *'}
                    </span>
                    <ChevronDown
                      className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#FF7A00]' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 top-full mt-1.5 z-30 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden py-1 max-h-56 overflow-y-auto"
                      >
                        {serviceOptions.map((opt) => (
                          <li
                            key={opt}
                            onClick={() => {
                              setFormData({ ...formData, service_type: opt });
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2.5 text-xs sm:text-[13px] cursor-pointer flex items-center justify-between transition-colors ${
                              formData.service_type === opt
                                ? 'bg-[#FFF3EA] text-[#FF7A00] font-bold'
                                : 'text-gray-700 hover:bg-orange-50/60 hover:text-[#FF7A00]'
                            }`}
                          >
                            <span>{opt}</span>
                            {formData.service_type === opt && <Check className="w-3.5 h-3.5 text-[#FF7A00]" />}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder={data.form?.placeholders?.message || 'Your Message or Special Installation Requests (Optional)'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all resize-none"
                  />
                </div>

                {data.form?.consent_text && (
                  <label className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer select-none pt-1">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="accent-[#FF7A00] rounded w-4 h-4 cursor-pointer"
                    />
                    <span>{data.form.consent_text}</span>
                  </label>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:from-[#E66E00] hover:to-[#FF4500] text-white px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 active:scale-95 cursor-pointer"
                >
                  <span>{data.form?.button_text || 'Request Connection & Installation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Office Photo & NOC Center */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={data.image || '/images/service-noc.webp'}
                  alt="Fiber Nova Network Center"
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-base sm:text-lg font-bold text-[#0A1931]">
                  {data.noc_card?.title || 'Fiber Nova Network Operations Center'}
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {data.noc_card?.description ||
                    'Our 24/7 technical headquarters monitors optical distribution frames and thousands of fiber miles to deliver consistent 99.9% uptime.'}
                </p>
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">{data.noc_card?.hours_label || 'Business Hours:'}</span>
                  <span className="bg-sky-50 text-[#00A3FF] border border-sky-100/80 px-2.5 py-0.5 rounded-full font-bold">
                    {data.noc_card?.hours_value || 'Mon - Fri: 9:00 AM - 6:00 PM PST'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
