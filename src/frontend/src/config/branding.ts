/**
 * Centralized branding configuration
 * Single source of truth for all brand assets and metadata
 */

export const BRANDING = {
  // Logo assets
  logo: {
    main: '/assets/generated/linex-logo-user.dim_512x512.png',
    alt: 'LINEX AUTOMATION Logo',
  },
  
  // SEO and meta assets
  favicon: '/assets/generated/favicon.dim_32x32.png',
  appleTouchIcon: '/assets/generated/apple-touch-icon.dim_180x180.png',
  ogImage: '/assets/generated/og-image.dim_1200x630.png',
  
  // Company information
  company: {
    name: 'LINEX AUTOMATION',
    tagline: 'Industrial automation solutions for modern manufacturing and process control.',
  },
} as const;
