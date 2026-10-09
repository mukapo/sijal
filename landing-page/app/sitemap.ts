import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
    const origin = process.env.NEXT_PUBLIC_SITE_URL;
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return origin ? [{ url: `${origin.replace(/\/$/, "")}${base}/`, changeFrequency: "monthly", priority: 1 }] : [];
}
