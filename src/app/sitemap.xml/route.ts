export function GET() {
  const baseUrl = "https://www.monroe.zuerich"
  const pages = [
    { path: "", lastmod: "2026-02-19" },
    { path: "/menu", lastmod: "2026-02-19" },
    { path: "/reservations", lastmod: "2026-02-19" },
    { path: "/faq", lastmod: "2026-02-19" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, lastmod }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
