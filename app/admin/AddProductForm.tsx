
'use client';

import { useState } from 'react';

interface AddProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (productData: any) => void;
}

export default function AddProductForm({ isOpen, onClose, onSubmit }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    brand: 'Nike',
    originalPrice: '',
    offerPrice: '',
    quality: 'Grade A',
    stock: 'In Stock',
    description: '',
    features: ['', '', '', ''],
    category: 'Basketball',
    customBrand: '',
    customCategory: '',
    thumbnailImage: null as File | null,
    productImages: [] as File[],
    thumbnailPreview: '',
    imagesPreviews: [] as string[]
  });

  const [showCustomBrand, setShowCustomBrand] = useState(false);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [brands, setBrands] = useState(['Nike', 'Adidas', 'Jordan', 'Puma', 'Converse', 'Vans', 'New Balance']);
  const [categories, setCategories] = useState(['Basketball', 'Lifestyle', 'Running', 'Skateboarding', 'Tennis', 'Casual']);

  const qualities = ['Grade A', 'Grade A+'];
  const stockOptions = ['In Stock', 'Limited', 'Out of Stock'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleAddNewBrand = () => {
    if (formData.customBrand.trim() && !brands.includes(formData.customBrand.trim())) {
      const newBrand = formData.customBrand.trim();
      setBrands(prev => [...prev, newBrand]);
      setFormData(prev => ({
        ...prev,
        brand: newBrand,
        customBrand: ''
      }));
      setShowCustomBrand(false);
    }
  };

  const handleAddNewCategory = () => {
    if (formData.customCategory.trim() && !categories.includes(formData.customCategory.trim())) {
      const newCategory = formData.customCategory.trim();
      setCategories(prev => [...prev, newCategory]);
      setFormData(prev => ({
        ...prev,
        category: newCategory,
        customCategory: ''
      }));
      setShowCustomCategory(false);
    }
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          thumbnailImage: file,
          thumbnailPreview: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.productImages.length > 6) {
      alert('Maximum 6 product images allowed');
      return;
    }

    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Please select files under 5MB.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          productImages: [...prev.productImages, file],
          imagesPreviews: [...prev.imagesPreviews, event.target?.result as string]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeProductImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productImages: prev.productImages.filter((_, i) => i !== index),
      imagesPreviews: prev.imagesPreviews.filter((_, i) => i !== index)
    }));
  };

  const removeThumbnail = () => {
    setFormData(prev => ({
      ...prev,
      thumbnailImage: null,
      thumbnailPreview: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.originalPrice || !formData.offerPrice) {
      alert('Please fill in all required fields');
      return;
    }

    if (!formData.thumbnailImage) {
      alert('Please upload a thumbnail image');
      return;
    }

    if (formData.productImages.length === 0) {
      alert('Please upload at least one product image');
      return;
    }

    const productData = {
      ...formData,
      originalPrice: parseInt(formData.originalPrice),
      offerPrice: parseInt(formData.offerPrice),
      features: formData.features.filter(feature => feature.trim() !== ''),
      id: Date.now(),
      thumbnailUrl: formData.thumbnailPreview,
      imageUrls: formData.imagesPreviews
    };

    onSubmit(productData);
    
    // Reset form
    setFormData({
      name: '',
      brand: 'Nike',
      originalPrice: '',
      offerPrice: '',
      quality: 'Grade A',
      stock: 'In Stock',
      description: '',
      features: ['', '', '', ''],
      category: 'Basketball',
      customBrand: '',
      customCategory: '',
      thumbnailImage: null,
      productImages: [],
      thumbnailPreview: '',
      imagesPreviews: []
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white rounded-t-3xl p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Add New Product</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="ri-close-line text-lg text-gray-600"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Basic Product Info */}
          <div>
            <label className="block text-sm font-medium mb-2">Product Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter product name"
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
              required
            />
          </div>

          {/* Brand Selection with Add New Option */}
          <div>
            <label className="block text-sm font-medium mb-2">Brand *</label>
            {!showCustomBrand ? (
              <div className="flex space-x-2">
                <select
                  value={formData.brand}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowCustomBrand(true)}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData.customBrand}
                  onChange={(e) => handleInputChange('customBrand', e.target.value)}
                  placeholder="Enter new brand name"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                />
                <button
                  type="button"
                  onClick={handleAddNewBrand}
                  className="px-3 py-2 bg-green-50 text-green-600 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <i className="ri-check-line"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomBrand(false)}
                  className="px-3 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            )}
          </div>

          {/* Category Selection with Add New Option */}
          <div>
            <label className="block text-sm font-medium mb-2">Category *</label>
            {!showCustomCategory ? (
              <div className="flex space-x-2">
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowCustomCategory(true)}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData.customCategory}
                  onChange={(e) => handleInputChange('customCategory', e.target.value)}
                  placeholder="Enter new category name"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                />
                <button
                  type="button"
                  onClick={handleAddNewCategory}
                  className="px-3 py-2 bg-green-50 text-green-600 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <i className="ri-check-line"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomCategory(false)}
                  className="px-3 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            )}
          </div>

          {/* Thumbnail Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Thumbnail Image * (Max 5MB)</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4">
              {formData.thumbnailPreview ? (
                <div className="relative">
                  <img
                    src={formData.thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeThumbnail}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <i className="ri-image-add-line text-2xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-500 mb-2">Upload main product image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Choose File
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Product Images Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Product Images * (Max 6 images, 5MB each)</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4">
              {formData.imagesPreviews.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {formData.imagesPreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Product ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeProductImage(index)}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {formData.productImages.length < 6 && (
                <div className="text-center">
                  <i className="ri-gallery-add-line text-2xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-500 mb-2">Add more product images ({formData.productImages.length}/6)</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleProductImagesUpload}
                    className="hidden"
                    id="product-images-upload"
                  />
                  <label
                    htmlFor="product-images-upload"
                    className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">Original Price *</label>
              <input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                placeholder="₹0"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Offer Price *</label>
              <input
                type="number"
                value={formData.offerPrice}
                onChange={(e) => handleInputChange('offerPrice', e.target.value)}
                placeholder="₹0"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                required
              />
            </div>
          </div>

          {/* Quality and Stock */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <select
                value={formData.quality}
                onChange={(e) => handleInputChange('quality', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
              >
                {qualities.map(quality => (
                  <option key={quality} value={quality}>{quality}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Stock Status</label>
              <select
                value={formData.stock}
                onChange={(e) => handleInputChange('stock', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
              >
                {stockOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter product description"
              rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm resize-none"
            />
          </div>

          {/* Key Features */}
          <div>
            <label className="block text-sm font-medium mb-2">Key Features</label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <input
                  key={index}
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 text-sm"
                />
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 font-medium py-3 rounded-xl !rounded-button hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white font-medium py-3 rounded-xl !rounded-button hover:bg-gray-800 transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
