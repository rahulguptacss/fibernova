import React from 'react';
import Topbar from '../components/sections/Topbar/page';
import Header from '../components/sections/Header/page';
import Hero from '../components/sections/Hero/page';
import About from '../components/sections/About/page';
import Highlights from '../components/sections/Highlights/page';
import Services from '../components/sections/Services/page';
import Pricing from '../components/sections/Pricing/page';
import WhyChoose from '../components/sections/WhyChoose/page';
import CtaBanner from '../components/sections/CtaBanner/page';
import Testimonials from '../components/sections/Testimonials/page';
import Contact from '../components/sections/Contact/page';
import Footer from '../components/sections/Footer/page';
import BackToTop from '../components/ui/BackToTop/page';
import { common, pages, sections, PageComponentItem } from '../components/types';

export const metadata = {
  title: pages.home?.metadata?.title,
  description: pages.home?.metadata?.description,
};

const componentMap: Record<string, (sectionData: any) => React.ReactNode> = {
  Hero: (data) => <Hero key="hero" data={data} />,
  About: (data) => <About key="about" data={data} />,
  Highlights: (data) => <Highlights key="highlights" data={data} />,
  Services: (data) => <Services key="services" data={data} />,
  Pricing: (data) => <Pricing key="pricing" data={data} />,
  WhyChoose: (data) => <WhyChoose key="whychoose" data={data} />,
  CtaBanner: (data) => <CtaBanner key="ctabanner" data={data} />,
  Testimonials: (data) => <Testimonials key="testimonials" data={data} />,
  Contact: (data) => <Contact key="contact" data={data} />,
};

const sectionKeyMap: Record<string, string> = {
  HeroSection: 'hero',
  AboutSection: 'about',
  HighlightsSection: 'highlights',
  ServicesSection: 'services',
  PricingSection: 'pricing',
  WhyChooseSection: 'why_choose',
  CtaBannerSection: 'cta_banner',
  TestimonialsSection: 'testimonials',
  ContactSection: 'contact',
};

export default function Home() {
  const homeComponents = pages.home?.components || [];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a] selection:bg-[#FF7A00] selection:text-white">
      {common.Topbar && <Topbar data={common.Topbar} />}
      {common.Header && <Header data={common.Header} />}
      <main className="w-full flex-1">
        {homeComponents.map((item: PageComponentItem) => {
          const sKey = item.sectionKey || sectionKeyMap[item.key] || item.component.toLowerCase();
          const sectionData = (sections as any)[sKey];
          const renderFn = componentMap[item.component];
          if (typeof renderFn !== 'function' || !sectionData) return null;
          return (
            <React.Fragment key={item.key}>
              {renderFn(sectionData)}
            </React.Fragment>
          );
        })}
      </main>
      {common.Footer && <Footer data={common.Footer} />}
      <BackToTop />
    </div>
  );
}
