import axios from 'axios';
import { Product } from '../types';

const API_BASE_URL = 'https://malia31.pythonanywhere.com/api/';


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set auth token for requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Products API
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/products/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await apiClient.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw new Error('Failed to fetch product');
  }
};


export const createProduct = async (productData: Partial<Product>): Promise<Product> => {
  try {
    const response = await apiClient.post('/products/', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Failed to create product');
  }
};

export const updateProduct = async (id: string, productData: Partial<Product>): Promise<Product> => {
  try {
    const response = await apiClient.patch(`/products/${id}/`, productData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw new Error('Failed to update product');
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/products/${id}/`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Failed to delete product');
  }
};

export const getNewProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/products/?section=New-Arrival');
    return response.data;
  } catch (error) {
    console.error('Error fetching new products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getBestSellers = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/products/?section=Best-Seller');
    return response.data;
  } catch (error) {
    console.error('Error fetching best sellers:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getPromoProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/products/?section=Promo');
    return response.data;
  } catch (error) {
    console.error('Error fetching promo products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getRecommended = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get('/products/?section=Recommended');
    return response.data;
  } catch (error) {
    console.error('Error fetching promo products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getProductsBySection = async (section: string): Promise<Product[]> => {
  try {
    const response = await apiClient.get(`/products/by_section/?section=${section}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Failed to fetch products');
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await apiClient.get(`/products/search/?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw new Error('Failed to search products');
  }
};

// Auth API
export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login/', { email, password });
    const { token, user } = response.data;
    setAuthToken(token);
    return { token, user };
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Invalid credentials');
  }
};

export const logout = () => {
  setAuthToken(null);
};