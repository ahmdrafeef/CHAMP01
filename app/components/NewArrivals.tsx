
'use client';

import Link from 'next/link';

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High',
      brand: 'Jordan',
      originalPrice: 20750,
      offerPrice: 18250,
      quality: 'Grade A+',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%2C%20premium%20basketball%20shoes%2C%20red%20and%20black%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=jordan1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Nike Dunk Low Panda',
      brand: 'Nike',
      originalPrice: 14950,
      offerPrice: 13700,
      quality: 'Grade A',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Nike%20Dunk%20Low%20Panda%20sneakers%2C%20black%20and%20white%20colorway%2C%20premium%20skateboarding%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=dunklow&orientation=squarish'
    },
    {
      id: 3,
      name: 'Adidas Yeezy Boost 350',
      brand: 'Adidas',
      originalPrice: 24900,
      offerPrice: 23250,
      quality: 'Grade A+',
      stock: 'Limited',
      image: 'https://readdy.ai/api/search-image?query=Adidas%20Yeezy%20Boost%20350%20V2%20sneakers%2C%20beige%20cream%20colorway%2C%20premium%20lifestyle%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=yeezy350&orientation=squarish'
    },
    {
      id: 4,
      name: 'Travis Scott x Nike',
      brand: 'Nike',
      originalPrice: 37350,
      offerPrice: 34850,
      quality: 'Grade A+',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Travis%20Scott%20Nike%20collaboration%20sneakers%2C%20brown%20suede%20colorway%2C%20premium%20limited%20edition%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=travis&orientation=squarish'
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">New Arrivals</h2>
        <Link href="/products" className="text-sm text-gray-600 font-medium">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="p-3">
              <div className="flex items-center gap-1 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  product.quality === 'Grade A+' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {product.quality}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  product.stock === 'In Stock' 
                    ? 'bg-gray-100 text-gray-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {product.stock}
                </span>
              </div>
              
              <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-black">
                  ₹{product.offerPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              
              <button className="w-full mt-2 bg-black text-white text-xs font-medium py-2 rounded-full !rounded-button hover:bg-gray-800 transition-colors">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
