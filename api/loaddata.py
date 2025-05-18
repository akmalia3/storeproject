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
  {
    "name": "Apple iPhone 16 Pro",
    "price": "18499000",
    "description": "Kualitas kamera pro dan performa luar biasa.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_16_pro_desert_titanium_01_4.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": False,
    "is_recommended": True
  },
  {
    "name": "Apple iPhone 16 Plus",
    "price": "16999000",
    "description": "iPhone layar besar dengan daya tahan baterai hebat.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_16_plus_ultramarine_01_2_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": False,
    "is_recommended": False
  },
  {
    "name": "Apple iPhone 16",
    "price": "14999000",
    "description": "iPhone modern dengan fitur canggih dan elegan.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_16_ultramarine_01_3.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": True
  },
  {
    "name": "Apple iPhone 16e",
    "price": "12499000",
    "description": "iPhone terjangkau dengan performa solid.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_16e_white_01_3.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": False,
    "is_recommended": False
  },
  {
    "name": "Samsung Galaxy S25 Ultra",
    "price": "22999000",
    "description": "Smartphone premium dengan fitur profesional.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/s/a/samsung_galaxy_s25_ultra_titanium_silverblue_1_2_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": True,
    "is_promo": True,
    "is_recommended": True
  },
  {
    "name": "Samsung Galaxy S25+",
    "price": "17999000",
    "description": "Performa cepat dengan layar AMOLED memukau.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/s/a/samsung_galaxy_s25_plus_navy_1_1_1.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": True
  },
  {
    "name": "Samsung Galaxy S25",
    "price": "14999000",
    "description": "Ponsel flagship Samsung dengan performa optimal.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/s/a/samsung_galaxy_s25_icyblue_1_1_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": True,
    "is_recommended": False
  },
  {
    "name": "Samsung Galaxy A36 5G",
    "price": "5199000",
    "description": "Smartphone 5G dengan desain stylish dan kamera jernih.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/g/a/galaxy_a36_5g_awesome_lavender_1_2.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": False,
    "is_promo": True,
    "is_recommended": True
  },
  {
    "name": "Samsung Galaxy A56 5G",
    "price": "6199000",
    "description": "Koneksi 5G cepat dan performa handal.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/s/a/samsung_galaxy_a56_5g_awesome_pink_01_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": False
  },
  {
    "name": "Samsung Galaxy A26 5G",
    "price": "3999000",
    "description": "Pilihan ekonomis dengan teknologi 5G.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/s/a/samsung_galaxy_a26_5g_black_01.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": False,
    "is_promo": True,
    "is_recommended": False
  },
  {
    "name": "vivo V50 12/256GB - Black",
    "price": "6999000",
    "description": "vivo dengan RAM besar dan desain elegan.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_black_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": True,
    "is_recommended": True
  },
  {
    "name": "vivo V50 12/512GB - Black",
    "price": "7999000",
    "description": "Smartphone dengan kapasitas penyimpanan ekstra.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_black_1_1.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": False
  },
  {
    "name": "vivo V50 12/256GB - Red",
    "price": "6999000",
    "description": "Desain warna mencolok dan performa mulus.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_red_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": False,
    "is_recommended": True
  },
  {
    "name": "vivo V50 12/256GB - Purple",
    "price": "6999000",
    "description": "Tampilan menarik dan spesifikasi kuat.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_purple_1.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": True,
    "is_promo": True,
    "is_recommended": False
  },
  {
    "name": "Tecno Camon 40 8/128 - Green",
    "price": "2699000",
    "description": "Smartphone ramah kantong dengan spesifikasi mumpuni.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/t/e/tecno_camon_40_green_01_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": True,
    "is_recommended": False
  },
  {
    "name": "vivo V50 Lite 5G 12/512GB - Gold",
    "price": "5599000",
    "description": "Kombinasi 5G dan memori jumbo untuk kebutuhan harian.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_lite_5g_all_gold_1_1.jpg",
    "category": "smartphones",
    "is_new": False,
    "is_best_seller": True,
    "is_promo": False,
    "is_recommended": True
  },
  {
    "name": "vivo V50 Lite 4G 8/256GB - Gold",
    "price": "3999000",
    "description": "Pilihan hemat dengan spesifikasi seimbang.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_lite_4g_all_gold_1_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": False,
    "is_promo": False,
    "is_recommended": False
  },
  {
    "name": "vivo V50 Lite 5G 12/512GB - Black",
    "price": "5599000",
    "description": "Kinerja maksimal dengan desain minimalis.",
    "image_url": "https://cdnpro.eraspace.com/media/catalog/product/v/i/vivo_v50_lite_5g_just_black_1_1.jpg",
    "category": "smartphones",
    "is_new": True,
    "is_best_seller": True,
    "is_promo": True,
    "is_recommended": True
  }
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