from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'in_stock', 'created_at')
    list_filter = ('in_stock',)
    search_fields = ('name', 'description')
    list_editable = ('price', 'in_stock')