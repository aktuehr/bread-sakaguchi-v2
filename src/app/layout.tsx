import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Header from '@/app/features/Header';

const mPlus1p = M_PLUS_1p({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-m-plus-1p'});

export const metadata: Metadata = {
  title: "パン工房SAKAGUCHI | 1985年創業の堺・泉北ニュータウンにあるアットホームなパン屋",
  description: "パン工房SAKAGUCHIの最新情報、パン情報、お店の場所などを発信しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mPlus1p.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
