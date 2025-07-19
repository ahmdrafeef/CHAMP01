
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavigationBar from '../../components/NavigationBar';
import TabBar from '../../components/TabBar';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);

  const allProducts = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High',
      brand: 'Jordan',
      originalPrice: 20750,
      offerPrice: 18250,
      quality: 'Grade A+',
      stock: 'In Stock',
      description: 'The Air Jordan 1 Retro High brings back the classic basketball shoe that started it all. Premium leather construction with iconic colorway and exceptional comfort. Perfect for both casual wear and basketball enthusiasts.',
      features: ['Premium leather upper', 'Air-Sole unit cushioning', 'Rubber outsole for traction', 'Classic high-top silhouette'],
      images: [
        'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%20front%20view%2C%20premium%20basketball%20shoes%2C%20red%20black%20white%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=jordan1-1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%20side%20profile%20view%2C%20premium%20basketball%20shoes%2C%20red%20black%20white%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=jordan1-2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%20back%20view%2C%20premium%20basketball%20shoes%2C%20red%20black%20white%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=jordan1-3&orientation=squarish'
      ],
      youtubeVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Nike Dunk Low Panda',
      brand: 'Nike',
      originalPrice: 14950,
      offerPrice: 13700,
      quality: 'Grade A',
      stock: 'In Stock',
      description: 'The Nike Dunk Low Panda features the classic black and white colorway that has become iconic in streetwear culture. Perfect for everyday wear with premium materials and comfortable fit.',
      features: ['Leather and synthetic upper', 'Foam midsole', 'Rubber outsole', 'Low-top design'],
      images: [
        'https://readdy.ai/api/search-image?query=Nike%20Dunk%20Low%20Panda%20sneakers%20front%20view%2C%20black%20and%20white%20colorway%2C%20premium%20skateboarding%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=dunk-1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Nike%20Dunk%20Low%20Panda%20sneakers%20side%20profile%20view%2C%20black%20and%20white%20colorway%2C%20premium%20skateboarding%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=dunk-2&orientation=squarish'
      ]
    },
    {
      id: 3,
      name: 'Adidas Yeezy Boost 350',
      brand: 'Adidas',
      originalPrice: 24900,
      offerPrice: 23250,
      quality: 'Grade A+',
      stock: 'Limited',
      description: 'The Adidas Yeezy Boost 350 V2 combines innovative design with premium comfort. Features Boost cushioning technology and Primeknit upper for ultimate style and performance.',
      features: ['Primeknit upper', 'Boost midsole cushioning', 'Rubber outsole', 'Distinctive side stripe'],
      images: [
        'https://readdy.ai/api/search-image?query=Adidas%20Yeezy%20Boost%20350%20V2%20sneakers%20front%20view%2C%20beige%20cream%20colorway%2C%20premium%20lifestyle%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=yeezy-1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Adidas%20Yeezy%20Boost%20350%20V2%20sneakers%20side%20profile%20view%2C%20beige%20cream%20colorway%2C%20premium%20lifestyle%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=yeezy-2&orientation=squarish'
      ]
    },
    {
      id: 4,
      name: 'Travis Scott x Nike',
      brand: 'Nike',
      originalPrice: 37350,
      offerPrice: 34850,
      quality: 'Grade A+',
      stock: 'In Stock',
      description: 'Limited edition Travis Scott collaboration featuring premium suede construction and unique design elements. A must-have for collectors and streetwear enthusiasts.',
      features: ['Premium suede upper', 'Reverse swoosh design', 'Special edition packaging', 'Limited availability'],
      images: [
        'https://readdy.ai/api/search-image?query=Travis%20Scott%20Nike%20collaboration%20sneakers%20front%20view%2C%20brown%20suede%20colorway%2C%20premium%20limited%20edition%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=travis-1&orientation=squarish'
      ]
    },
    {
      id: 5,
      name: 'Nike Air Force 1 White',
      brand: 'Nike',
      originalPrice: 12750,
      offerPrice: 11500,
      quality: 'Grade A',
      stock: 'In Stock',
      description: 'The timeless Nike Air Force 1 in classic all-white colorway. A versatile sneaker that pairs perfectly with any outfit, featuring premium leather construction.',
      features: ['Premium leather upper', 'Air cushioning', 'Durable rubber outsole', 'Classic low-top design'],
      images: [
        'https://readdy.ai/api/search-image?query=Nike%20Air%20Force%201%20all%20white%20sneakers%20front%20view%2C%20classic%20basketball%20shoes%2C%20premium%20leather%20construction%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=af1-1&orientation=squarish'
      ]
    },
    {
      id: 6,
      name: 'Adidas Stan Smith',
      brand: 'Adidas',
      originalPrice: 10950,
      offerPrice: 9750,
      quality: 'Grade A',
      stock: 'In Stock',
      description: 'The iconic Adidas Stan Smith tennis shoe featuring clean white leather construction with green accents. A timeless classic that never goes out of style.',
      features: ['Premium leather upper', 'Perforated three stripes', 'Green heel tab and tongue', 'Tennis-inspired design'],
      images: [
        'https://readdy.ai/api/search-image?query=Adidas%20Stan%20Smith%20white%20green%20sneakers%20front%20view%2C%20classic%20tennis%20shoes%2C%20premium%20leather%20construction%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high%20detail%20quality%2C%20centered%20composition%2C%20premium%20sneaker%20showcase&width=375&height=375&seq=stan-1&orientation=squarish'
      ]
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Product not found</h2>
          <Link href="/products" className="text-black underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const getSimilarProducts = () => {
    return allProducts
      .filter(p => p.id !== product.id && (p.brand === product.brand || p.quality === product.quality))
      .slice(0, 4);
  };

  const similarProducts = getSimilarProducts();

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering:
    
Product: ${product.name}
Price: ₹${product.offerPrice.toLocaleString('en-IN')}
Quality: ${product.quality}

Please let me know about availability and next steps.`;
    
    const whatsappUrl = `https://wa.me/919567334117?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main className="pt-16 pb-20">
        <div className="px-4 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 mb-4"
          >
            <i className="ri-arrow-left-line text-xl mr-2"></i>
            <span className="text-sm">Back</span>
          </button>

          <div className="mb-6">
            <div 
              className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4 cursor-pointer"
              onClick={() => setShowZoom(true)}
            >
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                    selectedImageIndex === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                product.quality === 'Grade A+' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {product.quality}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                product.stock === 'In Stock' 
                  ? 'bg-gray-100 text-gray-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {product.stock}
              </span>
            </div>

            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.brand}</p>

            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold text-black">
                ₹{product.offerPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                Save ₹{(product.originalPrice - product.offerPrice).toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 text-white font-medium py-3 rounded-2xl !rounded-button hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              <span>Order via WhatsApp</span>
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            
            <h3 className="text-md font-semibold mb-2">Key Features:</h3>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {product.youtubeVideo && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3">Product Showcase</h2>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={product.youtubeVideo}
                  title="Product Video"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {similarProducts.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Similar Products</h2>
                <Link href="/products" className="text-sm text-gray-600 hover:text-black">
                  View All
                </Link>
              </div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {similarProducts.map((similarProduct) => (
                  <Link
                    key={similarProduct.id}
                    href={`/products/${similarProduct.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0 w-40"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={similarProduct.images[0]}
                        alt={similarProduct.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    
                    <div className="p-3">
                      <div className="flex items-center gap-1 mb-2">
                        <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                          similarProduct.quality === 'Grade A+' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {similarProduct.quality}
                        </span>
                      </div>
                      
                      <h3 className="font-medium text-xs text-gray-900 mb-2 line-clamp-2">
                        {similarProduct.name}
                      </h3>
                      
                      <div className="flex flex-col space-y-1 mb-3">
                        <span className="text-sm font-bold text-black">
                          ₹{similarProduct.offerPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-gray-500 line-through">
                          ₹{similarProduct.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      
                      <button className="w-full bg-black text-white text-xs font-medium py-2 rounded-full !rounded-button hover:bg-gray-800 transition-colors">
                        View Details
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {showZoom && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowZoom(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setShowZoom(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>
      )}

      <TabBar />
    </div>
  );
}
