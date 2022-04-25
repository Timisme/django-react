from django.urls import path 
from .views import UserRegisterView, BlacklistTokenView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name= 'register'),
    path('logout/blacklist/', BlacklistTokenView.as_view(), name= 'blacklist')
]