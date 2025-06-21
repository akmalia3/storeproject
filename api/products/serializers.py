from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'category',
            'is_new', 'is_best_seller', 'is_promo', 'is_recommended',
            'in_stock', 'created_at', 'updated_at', 'image'
        ]

    def get_image(self, obj):
        request = self.context.get('request')
        image_url = obj.get_image_url()
        if image_url and image_url.startswith('/'):
            # Build absolute URL if it's a relative media URL
            return request.build_absolute_uri(image_url)
        return image_url
            
