import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, Search, Smartphone, User } from 'lucide-react';
import { useWishlist } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state: wishlistState } = useWishlist();

  const wishlistItemCount = wishlistState.items.length;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://malia31.pythonanywhere.com/media/images/favicon.ico"  // adjust the path to your actual logo location
              alt="rasya.acc"
              className="h-8 w-auto mr-2"  //
            />
            <span className="text-xl font-semibold text-gray-900">  rasya.acc</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/category/smartphones" className="text-gray-700 hover:text-primary-600 transition-colors">
              Smartphones
            </Link>
            <Link to="/category/accessories" className="text-gray-700 hover:text-primary-600 transition-colors">
              Aksesoris
            </Link>
            <Link to="/category/electronics" className="text-gray-700 hover:text-primary-600 transition-colors">
              Elektronik
            </Link>
            <Link to="/category/storage" className="text-gray-700 hover:text-primary-600 transition-colors">
              Storage
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              Tentang Kami
            </Link>

          {/* Desktop search, cart, and profile */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/wishlist" className="p-2 text-gray-500 hover:text-primary-600 transition-colors relative">
              <Heart className="h-5 w-5" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/profile" 
              className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart" className="p-2 text-gray-500 hover:text-primary-600 transition-colors relative mr-2">
              <Heart className="h-5 w-5" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/profile" 
              className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-primary-600"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/category/smartphones"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Smartphones
            </Link>
            <Link
              to="/category/accessories"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Aksesoris
            </Link>
            <Link
              to="/category/electronics"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Elektronik
            </Link>
            <Link
              to="/category/storage"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Storage
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
