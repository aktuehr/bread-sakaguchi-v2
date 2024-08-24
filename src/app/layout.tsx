import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";

const mPlus1p = M_PLUS_1p({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-m-plus-1p'});

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
    <html lang="ja">
      <body className={mPlus1p.className}>{children}</body>
    </html>
  );
}
