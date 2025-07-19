
'use client';

import Link from 'next/link';

export default function BrandLogos() {
  const brands = [
    { name: 'Nike', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Nike%20swoosh%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=nike&orientation=squarish' },
    { name: 'Adidas', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Adidas%20three%20stripes%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=adidas&orientation=squarish' },
    { name: 'Jordan', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Air%20Jordan%20jumpman%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=jordan&orientation=squarish' },
    { name: 'Puma', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Puma%20cat%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=puma&orientation=squarish' },
    { name: 'Converse', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Converse%20star%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=converse&orientation=squarish' },
    { name: 'Vans', logo: 'https://readdy.ai/api/search-image?query=icon%2C%20Vans%20logo%2C%20minimalist%20brand%20symbol%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20brand%20aesthetic%2C%20professional%20logo%20design&width=100&height=100&seq=vans&orientation=squarish' }
  ];

  const priceRanges = [
    { label: 'Under ₹999', range: 'under-999', icon: 'https://readdy.ai/api/search-image?query=icon%2C%20Indian%20rupee%20currency%20symbol%20with%20999%20number%2C%20minimalist%20price%20tag%20design%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20pricing%20aesthetic%2C%20professional%20icon%20design&width=100&height=100&seq=price999&orientation=squarish' },
    { label: 'Under ₹1499', range: 'under-1499', icon: 'https://readdy.ai/api/search-image?query=icon%2C%20Indian%20rupee%20currency%20symbol%20with%201499%20number%2C%20minimalist%20price%20tag%20design%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20pricing%20aesthetic%2C%20professional%20icon%20design&width=100&height=100&seq=price1499&orientation=squarish' },
    { label: 'Under ₹1999', range: 'under-1999', icon: 'https://readdy.ai/api/search-image?query=icon%2C%20Indian%20rupee%20currency%20symbol%20with%201999%20number%2C%20minimalist%20price%20tag%20design%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20pricing%20aesthetic%2C%20professional%20icon%20design&width=100&height=100&seq=price1999&orientation=squarish' },
    { label: 'Under ₹2499', range: 'under-2499', icon: 'https://readdy.ai/api/search-image?query=icon%2C%20Indian%20rupee%20currency%20symbol%20with%202499%20number%2C%20minimalist%20price%20tag%20design%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20premium%20pricing%20aesthetic%2C%20professional%20icon%20design&width=100&height=100&seq=price2499&orientation=squarish' },
    { label: 'Above ₹2500', range: 'above-2500', icon: 'https://readdy.ai/api/search-image?query=icon%2C%20Indian%20rupee%20currency%20symbol%20with%202500+%20number%2C%20premium%20price%20tag%20design%2C%20clean%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20luxury%20pricing%20aesthetic%2C%20professional%20icon%20design&width=100&height=100&seq=price2500&orientation=squarish' }
  ];

  return (
    <div className="py-6">
      <h2 className="text-lg font-bold mb-4 text-center px-4">Popular Brands</h2>
      
      <div className="flex overflow-x-auto space-x-4 px-4 pb-2 scrollbar-hide">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/brands/${brand.name.toLowerCase()}`}
            className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 transition-colors overflow-hidden flex-shrink-0 min-w-[80px]"
          >
            <div className="w-12 h-12 overflow-hidden">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">{brand.name}</span>
          </Link>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4 mt-8 text-center px-4">Shop by Price</h2>
      
      <div className="flex overflow-x-auto space-x-4 px-4 pb-2 scrollbar-hide">
        {priceRanges.map((range) => (
          <Link
            key={range.range}
            href={`/products?price=${range.range}`}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 flex flex-col items-center justify-center space-y-2 hover:from-green-100 hover:to-emerald-100 transition-colors overflow-hidden flex-shrink-0 min-w-[90px] border border-green-100"
          >
            <div className="w-12 h-12 overflow-hidden">
              <img
                src={range.icon}
                alt={range.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">{range.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
