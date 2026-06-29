import { posts } from './blog/posts';

export default function sitemap() {
  const base = 'https://www.bfc-flensburg.de';
  const now = new Date().toISOString();

  const blogUrls = posts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: base,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/mitglied`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/team`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    ...blogUrls,
    { url: `${base}/kontakt`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/impressum`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/datenschutz`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ];
}
