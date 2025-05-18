import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  loading?: boolean;
  error?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  viewAllLink,
  loading,
  error
}) => {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="text-primary-600 hover:text-primary-700 flex items-center text-sm font-medium">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-error-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 btn btn-primary"
            >
              Try Again
            </button>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;