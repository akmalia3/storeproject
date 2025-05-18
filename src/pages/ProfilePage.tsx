import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, ShoppingBag, Heart, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Log In</h1>
        <p className="text-gray-600">You need to be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-primary-600 px-6 py-8">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                <User className="h-10 w-10 text-primary-600" />
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-primary-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Account Information</h2>
              
              <div className="space-y-4">
                <button className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="ml-3">Edit Profile</span>
                </button>

                <button className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="ml-3">Account Settings</span>
                </button>

                <button 
                  onClick={logout}
                  className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-error-500 hover:text-error-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-3">Logout</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Shopping Information</h2>
              
              <div className="space-y-4">
                <button className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                  <ShoppingBag className="h-5 w-5 text-gray-500" />
                  <span className="ml-3">Order History</span>
                </button>

                <button className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                  <Heart className="h-5 w-5 text-gray-500" />
                  <span className="ml-3">Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;