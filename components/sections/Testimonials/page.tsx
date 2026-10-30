'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TestimonialsSectionData } from '../../types';

interface TestimonialsProps {
  data: TestimonialsSectionData;
  isGrid?: boolean;
}

export default function Testimonials({ data }: TestimonialsProps) {
  const reviews = data.reviews || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayReviews = [...reviews, ...reviews.slice(0, 3)];

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(reviews.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(reviews.length - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, reviews.length]);

  useEffect(() => {
    if (currentIndex >= reviews.length) {
      resetTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 460);
    }
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [currentIndex, reviews.length]);

  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused, reviews.length]);

  const translateX = (currentIndex * 100) / cardsPerView;

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-10 lg:py-14 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F3]/70 to-[#F0F9FF]/40 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glows & Optic Stream Lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3FF]/7 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF7A00]/7 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A3FF_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-6 h-[2.5px] bg-gradient-to-r from-[#00A3FF] to-[#FF7A00] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-[#00A3FF]">
                {data.subtitle || 'CUSTOMER REVIEWS'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0A1931] leading-[1.15] tracking-tight mb-1.5 sm:mb-2">
              {data.title_line1 || 'What Our'}{' '}
              <span className="bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF5500] bg-clip-text text-transparent">
                {data.title_highlight || 'Subscribers Say'}
              </span>
            </h2>

            <p className="text-gray-500 text-xs sm:text-[14px] leading-relaxed max-w-lg">
              {data.description ||
                'Trusted by thousands of happy families and growing businesses for blazing speed and dependable uptime.'}
            </p>
          </div>

          {/* Rating Summary Card */}
          {data.rating_summary && (
            <div className="flex items-center gap-3 bg-white border border-orange-100 rounded-2xl px-4 py-2.5 shadow-xs shrink-0 self-start sm:self-auto">
              <div className="flex -space-x-2">
                {data.rating_summary.avatars?.map((img, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image src={img} alt="Customer avatar" fill className="object-cover" sizes="32px" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-extrabold text-[#0A1931]">{data.rating_summary.score}</span>
                  <div className="flex text-[#FF7A00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-gray-500">{data.rating_summary.label}</span>
              </div>
            </div>
          )}
        </div>

        {/* 1-by-1 Continuous Sliding Track */}
        <div className="overflow-hidden py-1">
          <div
            className="flex -mx-2 sm:-mx-2.5 items-stretch"
            style={{
              transform: `translateX(-${translateX}%)`,
              transition: isTransitioning
                ? 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
          >
            {displayReviews.map((review, idx) => {
              const isCyan = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-2.5"
                >
                  <div
                    className={`bg-white rounded-2xl sm:rounded-[22px] p-5 border transition-all duration-300 flex flex-col justify-between h-full ${
                      isCyan
                        ? 'border-sky-100 shadow-[0_4px_18px_rgba(0,163,255,0.03)] hover:shadow-[0_10px_28px_rgba(0,163,255,0.1)] hover:border-sky-200'
                        : 'border-orange-100/70 shadow-[0_4px_18px_rgba(255,122,0,0.03)] hover:shadow-[0_10px_28px_rgba(255,122,0,0.1)] hover:border-orange-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 shadow-xs shrink-0 ${
                              isCyan ? 'border-sky-200' : 'border-orange-200'
                            }`}
                          >
                            <Image
                              src={review.avatar}
                              alt={review.author}
                              fill
                              quality={95}
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>

                          <div className="flex flex-col">
                            <h4 className="text-[14px] sm:text-[15px] font-extrabold text-[#0A1931] tracking-tight leading-snug">
                              {review.author}
                            </h4>
                            <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
                              {review.role}
                            </p>
                            <div className="flex items-center gap-0.5 text-[#FF7A00] mt-0.5">
                              {[...Array(review.rating || 5)].map((_, sIdx) => (
                                <Star
                                  key={sIdx}
                                  className="w-3.5 h-3.5 fill-current text-[#FF7A00]"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className={`shrink-0 select-none pl-1 ${isCyan ? 'text-sky-200' : 'text-[#FFD2B8]'}`}>
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6zm14 0c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6z" />
                          </svg>
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-normal mt-2">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-[#00A3FF] flex items-center justify-center shadow-xs hover:border-[#00A3FF] active:scale-90 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-200/90 bg-white hover:bg-orange-50 text-[#FF7A00] flex items-center justify-center shadow-xs hover:border-[#FF7A00] active:scale-90 transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  );
}
