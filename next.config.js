/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Alumni section lives on /team
      { source: '/alumni', destination: '/team#alumni', permanent: true },
      // Old WordPress team/board pages
      { source: '/vorstand', destination: '/team', permanent: true },
      { source: '/der-vorstand', destination: '/team', permanent: true },
      { source: '/schirmherrschaft', destination: '/team', permanent: true },
      // Old business/partner pages
      { source: '/fuer-unternehmen', destination: '/kontakt', permanent: true },
      { source: '/fur-unternehmen', destination: '/kontakt', permanent: true },
      { source: '/unternehmen', destination: '/kontakt', permanent: true },
      { source: '/fuer-partner', destination: '/kontakt', permanent: true },
      { source: '/partner', destination: '/', permanent: true },
      // Old event/blog posts (wildcard)
      { source: '/events/:slug*', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      // Specific old pages seen in Google Search
      { source: '/sydbank-portfolioaufbau-und-:slug*', destination: '/', permanent: true },
      { source: '/:year(\\d{4})/:month(\\d{2})/:slug*', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
