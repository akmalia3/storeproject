# Generated by Django 5.2 on 2025-05-13 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_is_recommended'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='original_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('smartphones', 'Smartphones'), ('accessories', 'Accessories'), ('electronics', 'Electronics'), ('storage', 'Storage')], max_length=50),
        ),
    ]
