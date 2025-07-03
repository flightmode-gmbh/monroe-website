export function GET() {
  const baseUrl = "https://monroe.zuerich"
  const now = new Date().toISOString()
  const pages = [
    "",
    // "/reservation",
    // "/menu",
    // "/contact",
    // "/impressum",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
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
