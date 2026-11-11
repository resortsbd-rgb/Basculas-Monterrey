import type { MetadataRoute } from "next";
import { getProductos } from "@/lib/catalogo";

export const dynamic = "force-static";

const origin = "https://www.basculasmonterrey.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/catalogo`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${origin}/calibracion`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/contacto`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${origin}/aviso-de-privacidad`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productPages: MetadataRoute.Sitemap = getProductos().map(({ id }) => ({
    url: `${origin}/catalogo/${encodeURIComponent(id)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...productPages];
}
