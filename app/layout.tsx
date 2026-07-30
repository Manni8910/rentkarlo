import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RentKarlo | Swipe. Discover. Rent.",
  description: "Find verified rental homes across India and connect directly with property owners.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#073B73" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
