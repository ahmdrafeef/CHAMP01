'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();

  const tabs = [
    { href: '/', icon: 'ri-home-line', label: 'Home' },
    { href: '/products', icon: 'ri-store-line', label: 'Shop' },
    { href: '/brands', icon: 'ri-price-tag-3-line', label: 'Brands' },
    { href: '/contact', icon: 'ri-customer-service-line', label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-100 z-40">
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center space-y-1 ${
                isActive ? 'text-black' : 'text-gray-400'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${tab.icon} text-lg`}></i>
              </div>
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}