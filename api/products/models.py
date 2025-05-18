from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('smartphones', 'Smartphones'),
        ('accessories', 'Accessories'),
        ('electronics', 'Electronics'),
        ('storage', 'Storage'),
    ]
    
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    image_url = models.URLField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    
    # Section flags
    is_new = models.BooleanField(default=False)
    is_best_seller = models.BooleanField(default=False)
    is_promo = models.BooleanField(default=False)
    is_recommended = models.BooleanField(default=False)
    
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name