import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNewProducts, getBestSellers, getPromoProducts, getProducts } from '../services/api';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

const ViewAllPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let data: Product[] = [];
        
        switch (type) {
          case 'new-arrivals':
            data = await getNewProducts();
            break;
          case 'best-sellers':
            data = await getBestSellers();
            break;
          case 'promos':
            data = await getPromoProducts();
            break;
          default:
            data = await getProducts();
        }
        
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

  const getPageTitle = () => {
    switch (type) {
      case 'new-arrivals':
        return 'New Arrivals';
      case 'best-sellers':
        return 'Best Sellers';
      case 'promos':
        return 'Special Promos';
      default:
        return 'All Products';
    }
  };

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-error-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{getPageTitle()}</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">{getPageTitle()}</h1>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPage;