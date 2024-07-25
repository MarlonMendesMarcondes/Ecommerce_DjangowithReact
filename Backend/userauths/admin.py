from django.contrib import admin
from userauths.models import User,Profile
from django.contrib.auth.admin import UserAdmin
from django.urls import path 
class UserAdmin(admin.ModelAdmin):
    user_change_password = UserAdmin.user_change_password
    list_display = ['username','full_name', 'phone']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': (('is_active', 'is_staff', 'is_superuser'),("groups",
        "user_permissions"))}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    filter_horizontal = (
        "groups",
        "user_permissions",
    )
    def get_urls(self):
        return [
            path(
                "<id>/password/",
                self.admin_site.admin_view(self.user_change_password),
                name="auth_user_password_change",
            ),
        ] + super().get_urls()
    
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'gender','country']
    search_fields = ['full_name','date']
    list_filter = ['date']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
