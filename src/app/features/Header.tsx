'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sakaguchi-brown">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            パン工房SAKAGUCHI
          </Link>
          
          <div className="flex gap-6">
            <Link href="/about" className="text-white hover:text-sakaguchi-ivory">
              お店について
            </Link>
            <Link href="/category" className="text-white hover:text-sakaguchi-ivory">
              パンの紹介
            </Link>
            <Link href="/access" className="text-white hover:text-sakaguchi-ivory">
              アクセス
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
