import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./DashboardWrapper";


export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "800", "900"],
});


export const notoSansKr = Noto_Sans_KR({
  preload: false,
  display: "swap",
  variable: "--font-noto-sans-kr",
  weight: ["100", "400", "500", "700", "900"],
  fallback: ["Noto Sans KR", "Helvetica", "sans-serif"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${notoSansKr.variable}`}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
