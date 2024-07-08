from django.contrib import admin
from userauths.models import User,Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','full_name', 'phone']
    
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'gender','country']
    search_fields = ['full_name','date']
    list_filter = ['date']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
