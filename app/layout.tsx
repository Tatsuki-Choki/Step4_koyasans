import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "チームコンパス",
  description: "社会で通用する力を育てる教育DX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.variable}>
        {children}
      </body>
    </html>
  );
}
