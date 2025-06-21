from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        image_url = obj.get_image_url()
        if image_url and image_url.startswith('/'):
            # Build absolute URL if it's a relative media URL
            return request.build_absolute_uri(image_url)
        return image_url
            
