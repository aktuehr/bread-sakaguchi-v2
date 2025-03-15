import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Header from '@/app/features/Header';
import Footer from "@/app/features/Footer";
import Head from "next/head";

const mPlus1p = M_PLUS_1p({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-m-plus-1p'
});

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
      <Head>
        <meta name="viewport" content="width=360, initial-scale=1" />
      </Head>
      <body className={mPlus1p.className}>
        <div className="max-w-lg mx-auto min-w-[360px]">
          <div className="origin-top-left scale-[calc(100vw/360)]">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
