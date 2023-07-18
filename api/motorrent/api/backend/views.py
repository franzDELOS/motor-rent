from django.shortcuts import render
from rest_framework import generics, status
from api.models import Products, User
from api.backend.serializer import ProductsSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import python_jwt as jwt, jwcrypto.jwk as jwk, datetime
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class ProductList(generics.ListCreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


@api_view(
    [
        "POST",
    ]
)
def register_view(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password")

        key = jwk.JWK.generate(kty="RSA", size=2048)
        priv_pem = key.export_to_pem(private_key=True, password=None)
        pub_pem = key.export_to_pem()
        payload = {"foo": "bar", "wup": 90}
        priv_key = jwk.JWK.from_pem(priv_pem)
        pub_key = jwk.JWK.from_pem(pub_pem)
        token = jwt.generate_jwt(
            payload, priv_key, "RS256", datetime.timedelta(minutes=60)
        )
        header, claims = jwt.verify_jwt(token, pub_key, ["RS256"])
        for k in payload:
            assert claims[k] == payload[k]

        response = Response()

        response.set_cookie(key="jwt", value=token, httponly=True)

        response.data = {"jwy": token}

        return response


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {"message": "Logged out successfully"}
        return response
