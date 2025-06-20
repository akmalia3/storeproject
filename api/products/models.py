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

    #Images 
    image = models.ImageField(upload_to='images/', blank=True, null=True)
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

    def get_image_url(self):
        if self.image:
            return self.image.url
        elif self.image_url:
            return self.image_url
        return ""

        def save(self, *args, **kwargs):
        """
        If image_url is provided and image is empty,
        optionally download the external image and save it.
        """
        if self.image_url and not self.image:
            try:
                response = requests.get(self.image_url)
                if response.status_code == 200:
                    file_name = self.image_url.split('/')[-1].split('?')[0]  # Clean filename
                    self.image.save(file_name, ContentFile(response.content), save=False)
                    self.image_url = ""  # Clear external URL if you want
            except Exception as e:
                # You could log the error if needed
                print(f"Failed to download image: {e}")

        super().save(*args, **kwargs)
