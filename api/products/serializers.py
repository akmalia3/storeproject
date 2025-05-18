from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price',
            'image', 'image_url', 'category', 'is_new', 'is_best_seller',
            'is_promo', 'is_recommended', 'in_stock', 'created_at'
        ]