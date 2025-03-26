'use client';

import Link from 'next/link';
import SakaguchiLogo from "@/assets/svg/sakaguchi-logo.svg"

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-primary">
      <div className="container p-1">
        <nav className="flex justify-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <SakaguchiLogo width={150} height={34} className="text-secondary"/>
          </Link>
        </nav>
      </div>
    </header>
  );
}
