import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
}

export type NavItem = LinkType;

export interface ContactInfoItem {
  icon: string;
  label?: string;
  value: string;
  href?: string;
}

export interface SocialItem {
  icon: string;
  href: string;
}

export interface TopbarData {
  tagline?: string;
  mobile_call_text?: string;
  contact_info: ContactInfoItem[];
  socials?: SocialItem[];
}

export interface HeaderData {
  logo_image?: string;
  logo_text: string;
  phone?: string;
  phone_href?: string;
  links: LinkType[];
  button_text: string;
  button_text_mobile?: string;
  button_link: string;
}

export interface FooterData {
  logo_image?: string;
  logo_text: string;
  description: string;
  quick_links_title?: string;
  our_services_title?: string;
  contact_us_title?: string;
  socials: SocialItem[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: {
    address: string;
    phone: string;
    email: string;
    hours?: string;
  };
  copyright: string;
}

export interface HeroSectionData {
  badge_text: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  primary_button: { text: string; href: string };
  secondary_button?: { text: string; href: string };
  image: string;
  image_alt?: string;
  floating_badge_top?: {
    text: string;
    subtext?: string;
    video_url?: string;
  };
  floating_badge_bottom?: {
    label: string;
    speed: string;
    tag?: string;
  };
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2?: string;
  description: string;
  image: string;
  image_secondary?: string;
  experience_badge?: {
    years: string;
    label: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  button?: {
    text: string;
    href: string;
  };
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface HighlightsSectionData {
  items: HighlightItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
  link_text?: string;
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  card_button_text?: string;
  button?: { text: string; href: string };
  items: ServiceItem[];
}

export interface PageComponentItem {
  key: string;
  component: string;
  sectionKey?: string;
}

export interface PricingPlan {
  name: string;
  category: string;
  speed: string;
  speed_unit: string;
  price: string;
  billing_period?: string;
  period?: string;
  icon: string;
  is_popular?: boolean;
  popular_badge?: string;
  button_text: string;
  button_href?: string;
  button_link?: string;
  features: string[];
}

export interface PricingSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  plans: PricingPlan[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  items: WhyChooseItem[];
}

export interface CtaBannerSectionData {
  subtitle?: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  image: string;
}

export interface TestimonialReview {
  text: string;
  author: string;
  role: string;
  location?: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  rating_summary: {
    score: string;
    label: string;
    avatars: string[];
  };
  reviews: TestimonialReview[];
}

export interface ContactNocCard {
  title: string;
  description: string;
  hours_label: string;
  hours_value: string;
}

export interface ContactFormData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  button_text?: string;
  consent_text?: string;
  success_title?: string;
  success_message?: string;
  service_options?: string[];
  placeholders?: {
    name?: string;
    phone?: string;
    email?: string;
    city?: string;
    service_type?: string;
    message?: string;
  };
}

export interface ContactSectionData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  image?: string;
  form?: ContactFormData;
  noc_card?: ContactNocCard;
}

export interface HomePageData {
  title: string;
  pageName: string;
  metadata: {
    title: string;
    description: string;
  };
  components: PageComponentItem[];
}

// Global data references matching data.json
export const siteJson = data;
export const common = data.common;
export const template = data.categories.Broadband.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
