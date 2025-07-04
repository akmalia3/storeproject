# Generated by Django 5.2 on 2025-05-13 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_product_original_price_alter_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='is_best_seller',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_new',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_promo',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_recommended',
        ),
        migrations.RemoveField(
            model_name='product',
            name='original_price',
        ),
        migrations.AddField(
            model_name='product',
            name='section',
            field=models.CharField(choices=[('Best Seller', 'Best Seller'), ('Promo', 'Promo'), ('Recommended', 'Recommended'), ('New Arrival', 'New Arrival')], default='Promo', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('smartphones', 'Smartphones'), ('accessories', 'Aksesoris'), ('electronics', 'Elektronik'), ('storage', 'Storage')], max_length=50),
        ),
    ]
