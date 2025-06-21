import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Flame, Star, Tag, Percent } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist } = useWishlist();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && product.price) {
      const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
      return Math.round(discount);
    }
    return 0;
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <div className="card group animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden pb-[100%]">
          <img 
            src={product.image || product.image_url} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* Product Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="inline-flex items-center bg-blue-500 text-white text-xs px-2.5 py-1.5 rounded-full">
                <Flame className="h-3 w-3 mr-1" />
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="inline-flex items-center bg-yellow-500 text-white text-xs px-2.5 py-1.5 rounded-full">
                <Star className="h-3 w-3 mr-1" />
                Best Seller
              </span>
            )}
            {product.isPromo && (
              <span className="inline-flex items-center bg-red-500 text-white text-xs px-2.5 py-1.5 rounded-full">
                <Percent className="h-3 w-3 mr-1" />
                {calculateDiscount()}% OFF
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2 h-8">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary-700">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            <button 
              onClick={handleAddToWishlist}
              className="btn btn-primary p-2 rounded-full hover:scale-110 transition-transform"
              aria-label={`Add ${product.name} to wishlist`}
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
