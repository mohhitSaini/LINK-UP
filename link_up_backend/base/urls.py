from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    # TokenRereshView,
)

urlpatterns = [
    path('',views.endpoints),
    # path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('companies/',views.company_list),
    path('advocates/',views.advocate_list),
    path('advocates/<str:username>',views.advocate_detail),
]
