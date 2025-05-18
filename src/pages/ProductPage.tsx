import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Check, ChevronRight, Star, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { getProductById } from '../services/api';
import { useWishlist } from '../context/CartContext';


//const getImageUrl = (path: string) => `${API_BASE_URL}${path}`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleWhatsAppOrder = () => {
    if (!product) return;
    
    const message = `Hi, saya tertarik dengan produk ini ${product.name} (${formattedPrice})`;
    const whatsappUrl = `https://wa.me/6285640994441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formattedPrice = product ? new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price) : '';

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-error-500 mb-4">{error || 'Product not found'}</p>
        <a href="/" className="btn btn-primary">
          Return to Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-primary-600">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <a href="/category/smartphones" className="text-gray-500 hover:text-primary-600">Smartphones</a>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-auto object-contain mx-auto"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Product Details */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">4.0 (24 reviews)</span>
            </div>
            
            <p className="text-3xl font-bold text-primary-700 mb-4">{formattedPrice}</p>
            
            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 my-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button 
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 h-8 border-t border-b border-gray-300 text-center focus:outline-none"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Check className="h-4 w-4 text-success-500 mr-1" />
                <span>In stock and ready to ship</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={handleWhatsAppOrder}
                className="btn btn-primary flex-1 py-3 text-base">
                <MessageCircle className="h-5 w-5 mr-2" />
                Order sekarang
              </button>
              <button 
                onClick={() => addToWishlist(product)}
                className="btn btn-secondary flex-1 py-3 text-base">
                <Heart className="h-5 w-5 mr-2" />
                Tambah ke Wishlist
              </button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-600 hover:text-primary-600 flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Brand</td>
                    <td className="py-3 font-medium text-gray-900">{product.name.split(' ')[0]}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Model</td>
                    <td className="py-3 font-medium text-gray-900">{product.name}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">RAM</td>
                    <td className="py-3 font-medium text-gray-900">
                      {product.name.match(/\d+\/\d+/) ? product.name.match(/(\d+)\/\d+/)?.[1] + 'GB' : '8GB'}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Storage</td>
                    <td className="py-3 font-medium text-gray-900">
                      {product.name.match(/\d+\/\d+/) ? product.name.match(/\d+\/(\d+)/)?.[1] + 'GB' : '128GB'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Display</td>
                    <td className="py-3 font-medium text-gray-900">AMOLED, 120Hz</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Camera</td>
                    <td className="py-3 font-medium text-gray-900">48MP + 12MP + 5MP</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">Battery</td>
                    <td className="py-3 font-medium text-gray-900">5000mAh</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-gray-500">OS</td>
                    <td className="py-3 font-medium text-gray-900">Android 13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;