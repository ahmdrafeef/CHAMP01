'use client';

import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-pacifico text-xl">
            CHAMP
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/search" className="w-6 h-6 flex items-center justify-center">
              <i className="ri-search-line text-white text-lg"></i>
            </Link>
            <Link href="/admin" className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-line text-white text-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}