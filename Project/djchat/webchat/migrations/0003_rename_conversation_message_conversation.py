# Generated by Django 4.2.3 on 2023-07-28 00:45

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("webchat", "0002_rename_conversation_message_conversation"),
    ]

    operations = [
        migrations.RenameField(
            model_name="message",
            old_name="conversation",
            new_name="Conversation",
        ),
    ]
