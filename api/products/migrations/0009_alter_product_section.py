# Generated by Django 5.2 on 2025-05-16 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_alter_product_options_product_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='section',
            field=models.CharField(choices=[('best_seller', 'Best Seller'), ('promo', 'Promo'), ('recommended', 'Recommended'), ('new_arrival', 'New Arrival')], max_length=50),
        ),
    ]
