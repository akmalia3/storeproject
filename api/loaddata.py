#!/usr/bin/env python
"""
Script to load initial product data into the database.
Run this after migrations: python loaddata.py
"""

import os
import django

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerce.settings')
django.setup()

from products.models import Product

# Sample product data with categories and sections
products_data = [
  {
    "name": "Apple iPhone 16 Pro Max",
    "price": "22499000",
    "description": "Flagship iPhone dengan performa tinggi dan layar besar.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_16_pro_max_desert_titanium_01_3.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": True
  },
]


def load_products():
    """Load product data into the database."""
    print("Loading product data...")
    
    for product_data in products_data:
        # Check if product already exists
        existing = Product.objects.filter(name=product_data['name']).first()
        if existing:
            print(f"Product '{product_data['name']}' already exists, skipping.")
            continue
        
        # Create new product
        product = Product(
            name=product_data['name'],
            description=product_data['description'],
            price=product_data['price'],
            image_url=product_data['image_url'],
            category=product_data['category'],
            is_new=product_data.get('is_new', False),
            is_best_seller=product_data.get('is_best_seller', False),
            is_promo=product_data.get('is_promo', False),
            is_recommended=product_data.get('is_recommended', False)
        )
        product.save()
        print(f"Created product: {product.name}")
    
    print("Product data loading complete!")

if __name__ == "__main__":
    load_products()