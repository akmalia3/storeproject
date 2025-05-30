import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and about */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-6 w-6 text-primary-400" />
              <span className="text-lg font-semibold text-white">Rasya.com</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
            Tempat terpercaya Anda untuk mendapatkan produk terbaik ❤️
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/RasyaAcc/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@rasya_accessories?" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rasya_acc/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/category/smartphones" className="text-gray-400 hover:text-white transition-colors">Smartphones</Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-400 hover:text-white transition-colors">Aksesoris</Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-gray-400 hover:text-white transition-colors">Elektronik</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span>Jl. KH Subkhi, Besaran, Parakan Kauman, Kec. Parakan, Kabupaten Temanggung, Jawa Tengah 56254</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>0856-4099-4441</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>rasya@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rasya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;