export async function GET() {
  const pages = [
    {
      url: 'https://psenicova.cz/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: 'https://psenicova.cz/o-mne',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: 'https://psenicova.cz/kontakt',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: 'https://psenicova.cz/media',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
