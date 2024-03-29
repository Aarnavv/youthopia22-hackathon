# Generated by Django 4.0.3 on 2022-07-29 17:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_citizen_profile_pic'),
        ('announcements', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='announcements',
            name='title',
        ),
        migrations.AddField(
            model_name='announcements',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='announcements',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.citizen'),
        ),
    ]
