import type { Metadata, Viewport } from "next";
import "./globals.css";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const description = "مبارزات شعرية في عالم عربي صُمِّم للمنافسة، والتقدّم، وبناء المكانة. اكتشف سِجال، حين يصير الشعر ميدانًا.";
export const metadata: Metadata = {
    ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: `${basePath}/` } } : {}),
    title: "سِجَال | حين يصير الشعر ميدانًا", description,
    openGraph: { title: "سِجَال | حين يصير الشعر ميدانًا", description, siteName: "سِجَال", locale: "ar", type: "website" },
    icons: { icon: `${basePath}/favicon.svg` },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0D1821" };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
