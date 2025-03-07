import { MetadataRoute } from "next";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const siteUrl = `${BASE_URL}`;

  
  const dynamicPages = [
    { url: "/", lastModified: new Date().toISOString() },
    { url: "/tarifs", lastModified: new Date().toISOString() },
    { url: "/services", lastModified: new Date().toISOString() },
    { url: "/portfolio", lastModified: new Date().toISOString() },
    { url: "/faq", lastModified: new Date().toISOString() },
    { url: "/contact", lastModified: new Date().toISOString() },
    { url: "/devis/site-web", lastModified: new Date().toISOString() },
    { url: "/devis/site-vitrine", lastModified: new Date().toISOString() },
    { url: "/devis/site-vitrine-plus", lastModified: new Date().toISOString() },
    { url: "/devis/site-ecommerce", lastModified: new Date().toISOString() },
    { url: "/devis/formation-wordpress", lastModified: new Date().toISOString() },
    { url: "/devis/modification-site", lastModified: new Date().toISOString() },
    { url: "/mentions-legales", lastModified: new Date().toISOString() },
    { url: "/blog", lastModified: new Date().toISOString() },
    { url: "/blog/pourquoi-chaque-pme-a-besoin-d-un-site-web-professionnel-en-2025", lastModified: new Date().toISOString() },
  ];

  const pages = [
    { url: siteUrl, lastModified: new Date().toISOString() },
    ...dynamicPages.map((page) => ({
        url: `${siteUrl.replace(/\/$/, "")}/${page.url.replace(/^\//, "")}`,
      lastModified: page.lastModified,
    })),
  ];

  // Générer le XML pour le sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  // Retourner le sitemap avec le bon Content-Type
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
