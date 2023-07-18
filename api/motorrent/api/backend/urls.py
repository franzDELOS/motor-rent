from django.urls import path
from api.backend.views import ProductList, register_view, LoginView, LogoutView

urlpatterns = [
    path("products/", ProductList.as_view(), name="product-list"),
    path("auth/register/", register_view, name="register"),
    path("auth/login/", LoginView.as_view(), name="login"),
    path("auth/logout/", LogoutView.as_view(), name="logout"),
]
