export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // Added for discount calculation
  description: string;
  image: string;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
  isPromo: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface CartItem extends Product {
  quantity: number;
}
