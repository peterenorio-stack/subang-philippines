import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://subangphilippines.org"),

  title: {
    default: "Subang Philippines | Live. Create. Inspire.",
    template: "%s | Subang Philippines",
  },

  description:
    "A youth-led volunteer organization committed to transforming communities into safer, equitable, sustainable, and resilient communities.",

  applicationName: "Subang Philippines",

  authors: [
    {
      name: "Subang Philippines",
      url: "https://subangphilippines.org",
    },
  ],

  creator: "Subang Philippines",
  publisher: "Subang Philippines",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://subangphilippines.org",
    siteName: "Subang Philippines",
    title: "Subang Philippines | Live. Create. Inspire.",
    description:
      "A youth-led volunteer organization committed to transforming communities into safer, equitable, sustainable, and resilient communities.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
