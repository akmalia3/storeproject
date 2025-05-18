from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet
from .views import product_list_api
from .views import ProductsByCategoryView



router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('api/products/', product_list_api, name='product-list-api'),
    path('api/products/category/<str:category>/', ProductsByCategoryView.as_view()),
    path('api/', include(router.urls)),  # Router di bawah
]

