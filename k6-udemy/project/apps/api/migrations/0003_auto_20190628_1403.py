# Generated by Django 2.2.2 on 2019-06-28 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_crocodile_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='crocodile',
            old_name='user',
            new_name='owner',
        ),
    ]
