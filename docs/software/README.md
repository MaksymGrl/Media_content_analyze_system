# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення БД:
```
    -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Login` TEXT NOT NULL,
  `Password` TEXT NOT NULL,
  `Email` TEXT NOT NULL,
  `Role` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`MediaContent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`MediaContent` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Type` TEXT NOT NULL,
  `URL` TEXT NOT NULL,
  `Duration` TIME NULL,
  `Metadata` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`Resource`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Resource` (
  `Id` INT NOT NULL,
  `URL` TEXT NOT NULL,
  `MediaContent_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Resource_MediaContent1_idx` (`MediaContent_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Resource_MediaContent1`
    FOREIGN KEY (`MediaContent_Id`)
    REFERENCES `mydb`.`MediaContent` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`SearchResult`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SearchResult` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`DateFilter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`DateFilter` (
  `DateFrom` DATE NOT NULL,
  `DateTo` DATE NOT NULL,
  PRIMARY KEY (`DateFrom`));


-- -----------------------------------------------------
-- Table `mydb`.`ServiceRequest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ServiceRequest` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  `Resource_Id` INT NOT NULL,
  `SearchResult_Id` INT NOT NULL,
  `DateFilter_DateFrom` DATE NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ServiceRequest_Resource1_idx` (`Resource_Id` ASC) VISIBLE,
  INDEX `fk_ServiceRequest_SearchResult1_idx` (`SearchResult_Id` ASC) VISIBLE,
  INDEX `fk_ServiceRequest_DateFilter1_idx` (`DateFilter_DateFrom` ASC) VISIBLE,
  CONSTRAINT `fk_ServiceRequest_Resource1`
    FOREIGN KEY (`Resource_Id`)
    REFERENCES `mydb`.`Resource` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ServiceRequest_SearchResult1`
    FOREIGN KEY (`SearchResult_Id`)
    REFERENCES `mydb`.`SearchResult` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ServiceRequest_DateFilter1`
    FOREIGN KEY (`DateFilter_DateFrom`)
    REFERENCES `mydb`.`DateFilter` (`DateFrom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`SupportContent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SupportContent` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `Id` INT NOT NULL,
  `Description` TEXT NOT NULL,
  `Created` DATETIME NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`AcessControl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`AcessControl` (
  `User_Id` INT NOT NULL,
  `ServiceRequest_Id` INT NOT NULL,
  `SupportContent_Id` INT NOT NULL,
  `Role_Id` INT NOT NULL,
  INDEX `fk_AcessControl_User1_idx` (`User_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_ServiceRequest1_idx` (`ServiceRequest_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_SupportContent1_idx` (`SupportContent_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_Role1_idx` (`Role_Id` ASC) VISIBLE,
  CONSTRAINT `fk_AcessControl_User1`
    FOREIGN KEY (`User_Id`)
    REFERENCES `mydb`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_ServiceRequest1`
    FOREIGN KEY (`ServiceRequest_Id`)
    REFERENCES `mydb`.`ServiceRequest` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_SupportContent1`
    FOREIGN KEY (`SupportContent_Id`)
    REFERENCES `mydb`.`SupportContent` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_Role1`
    FOREIGN KEY (`Role_Id`)
    REFERENCES `mydb`.`Role` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`view1`;
USE `mydb`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
## Початкове наповнення бази даних
![alt text](./insert1.png)
![alt text](./insert2.png)

## RESTfull сервіс для управління даними
Сервіс реалізован з використанням Django REST framework.

### Налаштування Django сервера:
```
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-4!770zs05^b4)%9#x=d-6en(d8kd&ziw9krtnm%ut3!hk&7+8f'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'mcas',
    'django_filters',
    'rest_framework',
    'rest_framework.authtoken',
    'dj_rest_auth',
    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mcas.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mcas.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': 'root',
        'PASSWORD': 'S,.Kz@:?=nF2kh2',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

```

```
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import MediaContentViewSet,RegisterView, LoginView

router = DefaultRouter()
router.register(r'mediacontent', MediaContentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]


```
### Моделі для взаємодіїї з БД:
```
from django.db import models

class User(models.Model):
    Id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    role = models.CharField(max_length=255)

    class Meta:
        db_table = 'user'
        
class MediaContent(models.Model):
    Id = models.AutoField(primary_key=True)
    Type = models.TextField(max_length=255)
    URL = models.TextField(max_length=255)
    Duration = models.TimeField()
    Metadata = models.TextField()

    class Meta:
        db_table = 'mediacontent'
```
### Реалізація REST сервісу:
```
from rest_framework import viewsets
from rest_framework import filters
from .models import MediaContent
from .models import User
from .serializers import MediaContentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError

class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Metadata']



class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        role = request.data.get('role')
        
        if not username or not password or not email or not role:
            return Response(
                data={
                    "message": "username, password, email and role are required to register a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user = User.objects.get(login=username)
            return Response(
            data={
                "message": "A user with this username already exists."
             },
            status=status.HTTP_400_BAD_REQUEST
        )
        except User.DoesNotExist:
            user = User.objects.create(login=username, password=password, email=email, role=role)
            return Response(data={
            "message": "User registered successfully"
        }, status=status.HTTP_201_CREATED)
    
        
        
    
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            return Response(
                data={
                    "message": "username and password is required to login a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user = User.objects.get(login=username)
            if user.password != password:
                raise User.DoesNotExist
        except User.DoesNotExist:
            return Response(
                data={
                    "message": "Invalid username or password"
                },
                status=status.HTTP_401_UNAUTHORIZED
            )
        #login(request, user)
        return Response(data={
            "message": "User logged in successfully"
        }, status=status.HTTP_200_OK)
```

```
from rest_framework import serializers
from .models import MediaContent

class MediaContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaContent
        fields = ['Id', 'Type', 'URL', 'Duration', 'Metadata']
```
