# Generated by Django 5.2 on 2025-05-14 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_product_options_remove_product_image_and_more'),
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
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products/'),
        ),
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('smartphone', 'Smartphone'), ('storage', 'Storage'), ('aksesoris', 'Aksesoris'), ('ekektronik', 'Elektronik')], max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=12),
        ),
    ]
