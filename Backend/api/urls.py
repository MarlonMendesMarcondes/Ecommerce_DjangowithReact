from django.urls import path

from userauths import views as userauths_views 
from store import views as store_views
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
    path('user/token/', userauths_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh', TokenRefreshView, name='token_refresh_view'),
    path('user/register/', userauths_views.MyRegisterView.as_view(), name='')
]
