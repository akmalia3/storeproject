from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView


class ProductsByCategoryView(APIView):
    def get(self, request, category):
        products = Product.objects.filter(category__iexact=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def product_list_api(request):
    section = request.GET.get('section')

    if section == "Best-Seller":
        products = Product.objects.filter(is_best_seller=True)
    elif section == "New-Arrival":
        products = Product.objects.filter(is_new=True)
    elif section == "Promo":
        products = Product.objects.filter(is_promo=True)
    elif section == "Recommended":
        products = Product.objects.filter(is_recommended=True)
    else:
        products = Product.objects.all()

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_by_category_api(request):
    category_name = request.GET.get('category')
    if category_name:
        products = Product.objects.filter(category__name__iexact=category_name)
    else:
        products = Product.objects.none()
    
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows products to be viewed.
    """
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = Product.objects.filter(in_stock=True)
        
        # Filter by category
        category = self.request.query_params.get('category')
        if category:
            return Product.objects.filter(category__iexact=category)
            
        # Filter by section
        section = self.request.query_params.get('section', None)
        if section:
            if section == 'new':
                queryset = queryset.filter(is_new=True)
            elif section == 'best-seller':
                queryset = queryset.filter(is_best_seller=True)
            elif section == 'promo':
                queryset = queryset.filter(is_promo=True)
            elif section == 'recommended':
                queryset = queryset.filter(is_recommended=True)
                
        return queryset