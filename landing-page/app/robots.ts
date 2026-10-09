import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
    const origin = process.env.NEXT_PUBLIC_SITE_URL;
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return { rules: { userAgent: "*", allow: "/" }, ...(origin ? { sitemap: `${origin.replace(/\/$/, "")}${base}/sitemap.xml` } : {}) };
}
