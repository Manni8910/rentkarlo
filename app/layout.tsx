import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Rent Karlo",description:"Rent Easy. Live Better."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}