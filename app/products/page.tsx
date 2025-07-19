'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';
import TabBar from '../components/TabBar';

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedQuality, setSelectedQuality] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const brands = ['All', 'Nike', 'Adidas', 'Jordan', 'Puma', 'Converse', 'Vans'];
  const priceRanges = ['All', 'Under ₹999', 'Under ₹1499', 'Under ₹1999', 'Under ₹2499', 'Above ₹2500'];
  const qualities = ['All', 'Grade A', 'Grade A+'];

  const allProducts = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High',
      brand: 'Jordan',
      originalPrice: 20750,
      offerPrice: 18250,
      quality: 'Grade A+',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%2C%20premium%20basketball%20shoes%2C%20red%20and%20black%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Nike Dunk Low Panda',
      brand: 'Nike',
      originalPrice: 14950,
      offerPrice: 13700,
      quality: 'Grade A',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Nike%20Dunk%20Low%20Panda%20sneakers%2C%20black%20and%20white%20colorway%2C%20premium%20skateboarding%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Adidas Yeezy Boost 350',
      brand: 'Adidas',
      originalPrice: 24900,
      offerPrice: 23250,
      quality: 'Grade A+',
      stock: 'Limited',
      image: 'https://readdy.ai/api/search-image?query=Adidas%20Yeezy%20Boost%20350%20V2%20sneakers%2C%20beige%20cream%20colorway%2C%20premium%20lifestyle%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Travis Scott x Nike',
      brand: 'Nike',
      originalPrice: 37350,
      offerPrice: 34850,
      quality: 'Grade A+',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Travis%20Scott%20Nike%20collaboration%20sneakers%2C%20brown%20suede%20colorway%2C%20premium%20limited%20edition%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Nike Air Force 1 White',
      brand: 'Nike',
      originalPrice: 12750,
      offerPrice: 11500,
      quality: 'Grade A',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Nike%20Air%20Force%201%20all%20white%20sneakers%2C%20classic%20basketball%20shoes%2C%20premium%20leather%20construction%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Adidas Stan Smith',
      brand: 'Adidas',
      originalPrice: 10950,
      offerPrice: 9750,
      quality: 'Grade A',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Adidas%20Stan%20Smith%20white%20green%20sneakers%2C%20classic%20tennis%20shoes%2C%20premium%20leather%20construction%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product6&orientation=squarish'
    },
    {
      id: 7,
      name: 'Converse Chuck Taylor',
      brand: 'Converse',
      originalPrice: 8500,
      offerPrice: 7650,
      quality: 'Grade A',
      stock: 'In Stock',
      image: 'https://readdy.ai/api/search-image?query=Converse%20Chuck%20Taylor%20All%20Star%20high%20top%20sneakers%2C%20classic%20canvas%20shoes%2C%20black%20colorway%2C%20authentic%20casual%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product7&orientation=squarish'
    },
    {
      id: 8,
      name: 'Puma RS-X',
      brand: 'Puma',
      originalPrice: 15850,
      offerPrice: 14250,
      quality: 'Grade A+',
      stock: 'Limited',
      image: 'https://readdy.ai/api/search-image?query=Puma%20RS-X%20sneakers%2C%20chunky%20running%20shoes%2C%20colorful%20design%2C%20premium%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=200&height=200&seq=product8&orientation=squarish'
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesQuality = selectedQuality === 'All' || product.quality === selectedQuality;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      const price = product.offerPrice;
      switch (selectedPriceRange) {
        case 'Under ₹999':
          matchesPrice = price < 999;
          break;
        case 'Under ₹1499':
          matchesPrice = price < 1499;
          break;
        case 'Under ₹1999':
          matchesPrice = price < 1999;
          break;
        case 'Under ₹2499':
          matchesPrice = price < 2499;
          break;
        case 'Above ₹2500':
          matchesPrice = price >= 2500;
          break;
      }
    }
    
    return matchesSearch && matchesBrand && matchesQuality && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      <main className="pt-16 pb-20">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">All Products</h1>
          
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
              />
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Brand</label>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap !rounded-button ${
                      selectedBrand === brand
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap !rounded-button ${
                      selectedPriceRange === range
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="flex space-x-2">
                {qualities.map((quality) => (
                  <button
                    key={quality}
                    onClick={() => setSelectedQuality(quality)}
                    className={`px-4 py-2 rounded-full text-sm font-medium !rounded-button ${
                      selectedQuality === quality
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {quality}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
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
                  <div className="flex items-center gap-1 mb-2">
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
                  
                  <h3 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm font-bold text-black">
                      ₹{product.offerPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  
                  <button className="w-full bg-black text-white text-xs font-medium py-2 rounded-full !rounded-button hover:bg-gray-800 transition-colors">
                    Buy Now
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      <TabBar />
    </div>
  );
}