import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { login as apiLogin, logout as apiLogout } from '../services/api';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAdmin(parsedUser.role === 'admin');
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user: userData } = await apiLogin(email, password);
      setUser(userData);
      setIsAdmin(userData.role === 'admin');
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to create the user
    const mockUser = {
      id: Math.random().toString(),
      name,
      email,
      role: 'user'
    };
    
    setUser(mockUser);
    setIsAdmin(false);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    apiLogout();
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};