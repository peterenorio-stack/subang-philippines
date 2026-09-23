import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subang Philippines | Live. Create. Inspire.",
  description: "A youth-led volunteer organization committed to transforming communities into safer, equitable, sustainable, and resilient communities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
