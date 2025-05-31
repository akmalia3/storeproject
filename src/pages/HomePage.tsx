import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { Smartphone, Package, Cpu, HardDrive } from 'lucide-react';
import { Product } from '../types';
import { 
  getProducts, 
  getNewProducts, 
  getBestSellers, 
  getPromoProducts 
} from '../services/api';

const HomePage: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [promoProducts, setPromoProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [all, news, best, promos] = await Promise.all([
          getProducts(),
          getNewProducts(),
          getBestSellers(),
          getPromoProducts()
        ]);
        
        setRecommendedProducts(all.slice(0, 4));
        setNewProducts(news);
        setBestSellers(best);
        setPromoProducts(promos);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-center mb-8">Browse Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="/category/smartphones" className="card flex flex-col items-center p-6 text-center hover:border-primary-500 transition-all group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="font-medium mb-2">Smartphones</h3>
              <p className="text-sm text-gray-500">Latest mobile phones</p>
            </a>
            
            <a href="/category/accessories" className="card flex flex-col items-center p-6 text-center hover:border-primary-500 transition-all group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-medium mb-2">Aksesoris</h3>
              <p className="text-sm text-gray-500">Phone accessories</p>
            </a>
            
            <a href="/category/electronics" className="card flex flex-col items-center p-6 text-center hover:border-primary-500 transition-all group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="font-medium mb-2">Elektronik</h3>
              <p className="text-sm text-gray-500">Electronic devices</p>
            </a>
            
            <a href="/category/storage" className="card flex flex-col items-center p-6 text-center hover:border-primary-500 transition-all group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <HardDrive className="h-8 w-8" />
              </div>
              <h3 className="font-medium mb-2">Storage</h3>
              <p className="text-sm text-gray-500">Storage solutions</p>
            </a>
          </div>
        </div>
      </section>

      {/* Product Sections with alternating backgrounds */}
      <section className="bg-white py-16">
        <ProductSection
          title="Rekomendasi untuk Kamu"
          products={recommendedProducts}
          loading={loading}
          error={error}
          viewAllLink="/view-all/recommended"
        />
      </section>

      <section className="bg-gray-50 py-16">
        <ProductSection
          title="Spesial Promo"
          products={promoProducts}
          loading={loading}
          error={error}
          viewAllLink="/view-all/promos"
        />
      </section>

      <section className="bg-white py-16">
        <ProductSection
          title="Best Seller"
          products={bestSellers}
          loading={loading}
          error={error}
          viewAllLink="/view-all/best-sellers"
        />
      </section>

      <section className="bg-gray-50 py-16">
        <ProductSection
          title="Produk Baru"
          products={newProducts}
          loading={loading}
          error={error}
          viewAllLink="/view-all/new-arrivals"
        />
      </section>
    </div>
  );
};

export default HomePage;