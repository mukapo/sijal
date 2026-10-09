import type { Metadata, Viewport } from "next";
import { copy } from "../data/copy";
import "./globals.css";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const title = `${copy.brand} | ${copy.headline}`;
const description = `${copy.description} ${copy.ideaLines.join(" ")}`;
export const metadata: Metadata = {
    ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: `${basePath}/` } } : {}),
    title, description,
    openGraph: { title, description, siteName: copy.brand, locale: "ar", type: "website" },
    twitter: { card: "summary", title, description },
    icons: { icon: `${basePath}/favicon.svg` },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0D1821" };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
