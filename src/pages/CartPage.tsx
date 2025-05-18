import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, MessageCircle } from 'lucide-react';
import { useWishlist } from '../context/CartContext';

const WishlistPage: React.FC = () => {
  const { state: wishlistState, removeFromWishlist } = useWishlist();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi, I'm interested in buying ${product.name} (${formatPrice(product.price)})`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8">Your Wishlist</h1>

        {wishlistState.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding some items to your wishlist!</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {wishlistState.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                      <p className="text-primary-600 font-semibold mt-2">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleWhatsAppOrder(item)}
                      className="btn btn-primary flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Order Now</span>
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-error-500 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;