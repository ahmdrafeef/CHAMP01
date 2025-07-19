
'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';
import AddProductForm from './AddProductForm';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Air Jordan 1 Retro High', quality: 'Grade A+', stock: 5, image: 'https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20sneakers%2C%20premium%20basketball%20shoes%2C%20red%20and%20black%20colorway%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=60&height=60&seq=admin1&orientation=squarish' },
    { id: 2, name: 'Nike Dunk Low Panda', quality: 'Grade A', stock: 8, image: 'https://readdy.ai/api/search-image?query=Nike%20Dunk%20Low%20Panda%20sneakers%2C%20black%20and%20white%20colorway%2C%20premium%20skateboarding%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=60&height=60&seq=admin2&orientation=squarish' },
    { id: 3, name: 'Yeezy Boost 350 V2', quality: 'Grade A+', stock: 1, image: 'https://readdy.ai/api/search-image?query=Adidas%20Yeezy%20Boost%20350%20V2%20sneakers%2C%20beige%20cream%20colorway%2C%20premium%20lifestyle%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=60&height=60&seq=admin3&orientation=squarish' }
  ]);

  const stats = [
    { label: 'Total Products', value: '48', icon: 'ri-box-3-line', color: 'bg-blue-500' },
    { label: 'Total Orders', value: '127', icon: 'ri-shopping-cart-line', color: 'bg-green-500' },
    { label: 'Revenue', value: '₹2,45,000', icon: 'ri-money-rupee-circle-line', color: 'bg-purple-500' },
    { label: 'Customers', value: '89', icon: 'ri-user-line', color: 'bg-orange-500' }
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'Rahul Sharma', product: 'Air Jordan 1 Retro', amount: '₹18,250', status: 'Pending' },
    { id: 'ORD002', customer: 'Priya Singh', product: 'Nike Dunk Low Panda', amount: '₹13,700', status: 'Shipped' },
    { id: 'ORD003', customer: 'Amit Kumar', product: 'Yeezy Boost 350', amount: '₹23,250', status: 'Delivered' },
    { id: 'ORD004', customer: 'Sneha Patel', product: 'Travis Scott Nike', amount: '₹34,850', status: 'Processing' }
  ];

  const lowStockProducts = [
    { name: 'Air Jordan 1 Retro High', stock: 2, brand: 'Jordan' },
    { name: 'Yeezy Boost 350 V2', stock: 1, brand: 'Adidas' },
    { name: 'Travis Scott x Nike', stock: 3, brand: 'Nike' }
  ];

  const adminTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'products', label: 'Products', icon: 'ri-box-3-line' },
    { id: 'orders', label: 'Orders', icon: 'ri-shopping-cart-line' },
    { id: 'customers', label: 'Customers', icon: 'ri-user-line' },
    { id: 'analytics', label: 'Analytics', icon: 'ri-bar-chart-line' }
  ];

  const handleAddProduct = (productData: any) => {
    const newProduct = {
      id: products.length + 1,
      name: productData.name,
      quality: productData.quality,
      stock: Math.floor(Math.random() * 10) + 1,
      image: `https://readdy.ai/api/search-image?query=${productData.name}%20${productData.brand}%20sneakers%2C%20premium%20${productData.category.toLowerCase()}%20shoes%2C%20authentic%20athletic%20footwear%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=60&height=60&seq=new${Date.now()}&orientation=squarish`
    };

    setProducts(prev => [...prev, newProduct]);

    alert(`Product "${productData.name}" has been added successfully!`);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                <i className={`${stat.icon} text-white text-lg`}></i>
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-lg font-bold text-black">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Orders</h3>
        </div>
        <div className="p-4 space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sm">{order.customer}</p>
                <p className="text-xs text-gray-500">{order.product}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-sm">{order.amount}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Low Stock Alert</h3>
        </div>
        <div className="p-4 space-y-3">
          {lowStockProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-gray-500">{product.brand}</p>
              </div>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                {product.stock} left
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Product Management</h3>
        <button 
          onClick={() => setShowAddProductForm(true)}
          className="bg-black text-white px-4 py-2 rounded-xl text-sm font-medium !rounded-button"
        >
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.id} className={`flex items-center space-x-3 ${index !== products.length - 1 ? 'pb-3 border-b border-gray-100' : ''}`}>
              <img
                src={product.image}
                alt="Product"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-gray-500">{product.quality} • Stock: {product.stock}</p>
              </div>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <i className="ri-edit-line text-sm"></i>
                </button>
                <button className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                  <i className="ri-delete-bin-line text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Order Management</h3>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {recentOrders.map((order, index) => (
          <div key={order.id} className={`p-4 ${index !== recentOrders.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium text-sm">#{order.id}</p>
                <p className="text-xs text-gray-500">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-sm">{order.amount}</p>
                <select className="text-xs border border-gray-200 rounded px-2 py-1 mt-1">
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-700">{order.product}</p>
            <div className="flex space-x-2 mt-3">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs !rounded-button">
                View Details
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs !rounded-button">
                WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Customer Management</h3>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="space-y-4">
          {['Rahul Sharma', 'Priya Singh', 'Amit Kumar', 'Sneha Patel'].map((customer, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-gray-600"></i>
                </div>
                <div>
                  <p className="font-medium text-sm">{customer}</p>
                  <p className="text-xs text-gray-500">{index + 1} orders</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <i className="ri-whatsapp-line text-sm"></i>
                </button>
                <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <i className="ri-eye-line text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Analytics Overview</h3>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <h4 className="font-medium mb-4">Sales Chart</h4>
        <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center">
          <img
            src="https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%20chart%2C%20sales%20revenue%20graph%2C%20modern%20data%20visualization%2C%20clean%20interface%20design%2C%20professional%20business%20charts%2C%20blue%20and%20green%20color%20scheme%2C%20monthly%20sales%20data%2C%20elegant%20dashboard%20UI&width=300&height=180&seq=chart1&orientation=landscape"
            alt="Sales Chart"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <h4 className="font-medium mb-2">Top Brands</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Nike</span>
              <span className="font-medium">42%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Adidas</span>
              <span className="font-medium">28%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Jordan</span>
              <span className="font-medium">30%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <h4 className="font-medium mb-2">Quality Grades</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Grade A+</span>
              <span className="font-medium">65%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Grade A</span>
              <span className="font-medium">35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'products':
        return renderProducts();
      case 'orders':
        return renderOrders();
      case 'customers':
        return renderCustomers();
      case 'analytics':
        return renderAnalytics();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />

      <main className="pt-16 pb-6">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <i className="ri-user-line text-white text-sm"></i>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
            {adminTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap !rounded-button ${activeTab === tab.id ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {renderContent()}
        </div>
      </main>

      <AddProductForm
        isOpen={showAddProductForm}
        onClose={() => setShowAddProductForm(false)}
        onSubmit={handleAddProduct}
      />
    </div>
  );
}
