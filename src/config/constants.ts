/**
 * Global configuration and constants for Finova Accounting
 * This file centralizes all configuration values for easy maintenance and consistency
 */

// ============================================================================
// BRAND & COMPANY
// ============================================================================

export const COMPANY = {
  name: "Finova Accounting",
  tagline: "Financial Excellence Through Professional Expertise",
  description:
    "Full-service accounting firm providing professional accounting solutions to businesses of all sizes.",
  email: "hello@finova.com",
  phone: "+1 (555) 123-4567",
  address: "123 Financial Plaza, New York, NY 10001",
  website: "https://finova.com",
  yearsInBusiness: 15,
  clientCount: 500,
  projectsCompleted: 2000,
  satisfactionRate: 98,
} as const;

// ============================================================================
// COLORS
// ============================================================================

export const COLORS = {
  primary: {
    light: "from-blue-500 to-blue-600",
    main: "from-blue-600 to-blue-700",
    dark: "from-blue-700 to-blue-800",
  },
  secondary: {
    light: "from-teal-500 to-cyan-500",
    main: "from-teal-600 to-teal-700",
    dark: "from-teal-700 to-teal-800",
  },
  accent: {
    blue: "text-blue-600",
    teal: "text-teal-600",
    green: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
  },
  backgrounds: {
    dark: "from-slate-900 via-blue-900 to-slate-900",
    light: "from-white to-gray-50",
    subtle: "from-gray-50 to-white",
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const SPACING = {
  xs: "p-2 md:p-4",
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
  xl: "p-10 md:p-12",
  section: "py-20 md:py-32",
  container: "max-w-7xl mx-auto",
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const TYPOGRAPHY = {
  heading: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h3: "text-2xl md:text-3xl font-bold",
    h4: "text-xl md:text-2xl font-semibold",
    h5: "text-lg md:text-xl font-semibold",
    h6: "text-base md:text-lg font-semibold",
  },
  body: {
    large: "text-lg md:text-xl",
    base: "text-base",
    small: "text-sm",
    caption: "text-xs md:text-sm",
  },
  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
} as const;

// ============================================================================
// ANIMATIONS
// ============================================================================

export const ANIMATIONS = {
  duration: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
  easing: {
    linear: "linear",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
  },
  transition: {
    fast: "transition-all duration-150",
    base: "transition-all duration-200",
    slow: "transition-all duration-300",
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const SHADOWS = {
  sm: "shadow-md",
  md: "shadow-lg",
  lg: "shadow-xl",
  xl: "shadow-2xl",
  none: "shadow-none",
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const RADIUS = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================================
// SERVICES
// ============================================================================

export const SERVICES_LIST = [
  {
    id: 1,
    title: "Bookkeeping",
    icon: "📊",
  },
  {
    id: 2,
    title: "Tax Planning",
    icon: "📈",
  },
  {
    id: 3,
    title: "Payroll Processing",
    icon: "💼",
  },
  {
    id: 4,
    title: "Financial Reporting",
    icon: "📋",
  },
  {
    id: 5,
    title: "Audit Support",
    icon: "✓",
  },
  {
    id: 6,
    title: "Business Advisory",
    icon: "🎯",
  },
] as const;

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL_MEDIA = {
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
} as const;

// ============================================================================
// VALIDATION RULES
// ============================================================================

export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]{10,}$/,
  website: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  minLength: {
    password: 8,
    username: 3,
    message: 10,
  },
  maxLength: {
    message: 500,
  },
} as const;

// ============================================================================
// MESSAGES
// ============================================================================

export const MESSAGES = {
  success: {
    formSubmitted: "Thank you! Your message has been sent successfully.",
    saved: "Changes saved successfully.",
  },
  error: {
    formFailed: "Failed to submit form. Please try again.",
    invalidEmail: "Please enter a valid email address.",
    invalidPhone: "Please enter a valid phone number.",
    requiredField: "This field is required.",
    tooShort: "Input too short.",
    tooLong: "Input too long.",
  },
} as const;

// ============================================================================
// ANIMATION TIMINGS
// ============================================================================

export const ANIMATION_TIMINGS = {
  navbarScroll: 300,
  mobileMenuToggle: 300,
  counterAnimation: 2000,
  sectionFadeIn: 600,
  buttonHover: 200,
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const Z_INDEX = {
  dropdown: 100,
  modal: 200,
  navbar: 50,
  tooltip: 150,
  notification: 250,
} as const;

// ============================================================================
// API ENDPOINTS (Example - Update with real endpoints)
// ============================================================================

export const API_ENDPOINTS = {
  contact: "/api/contact",
  subscribe: "/api/subscribe",
  services: "/api/services",
  testimonials: "/api/testimonials",
} as const;

// ============================================================================
// PAGE METADATA
// ============================================================================

export const PAGE_META = {
  home: {
    title: "Finova Accounting - Professional Accounting Services",
    description:
      "Full-service accounting firm offering bookkeeping, tax planning, payroll, and financial advisory.",
    keywords: "accounting, bookkeeping, tax planning, financial services",
  },
  services: {
    title: "Our Services - Finova Accounting",
    description: "Comprehensive accounting services tailored to your business needs.",
  },
  about: {
    title: "About Finova Accounting",
    description: "Learn about our team, experience, and commitment to excellence.",
  },
  contact: {
    title: "Contact Us - Finova Accounting",
    description: "Get in touch with our team for a free consultation.",
  },
} as const;
