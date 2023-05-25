(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{665:function(e,n,t){e.exports=t.p+"assets/img/insert1.3abb6e43.png"},666:function(e,n,t){e.exports=t.p+"assets/img/insert2.79c084e4.png"},709:function(e,n,t){"use strict";t.r(n);var s=t(47),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),s("h2",{attrs:{id:"sql-скрипт-для-створення-бд"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-скрипт-для-створення-бд"}},[e._v("#")]),e._v(" SQL-скрипт для створення БД:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    -- MySQL Workbench Forward Engineering\n\nSET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\nCREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;\nUSE `mydb` ;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`timestamps`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`timestamps` (\n  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,\n  `update_time` TIMESTAMP NULL);\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`User`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`User` (\n  `Id` INT NOT NULL AUTO_INCREMENT,\n  `Login` TEXT NOT NULL,\n  `Password` TEXT NOT NULL,\n  `Email` TEXT NOT NULL,\n  `Role` TEXT NOT NULL,\n  PRIMARY KEY (`Id`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`MediaContent`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`MediaContent` (\n  `Id` INT NOT NULL AUTO_INCREMENT,\n  `Type` TEXT NOT NULL,\n  `URL` TEXT NOT NULL,\n  `Duration` TIME NULL,\n  `Metadata` TEXT NOT NULL,\n  PRIMARY KEY (`Id`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Resource`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`Resource` (\n  `Id` INT NOT NULL,\n  `URL` TEXT NOT NULL,\n  `MediaContent_Id` INT NOT NULL,\n  PRIMARY KEY (`Id`),\n  INDEX `fk_Resource_MediaContent1_idx` (`MediaContent_Id` ASC) VISIBLE,\n  CONSTRAINT `fk_Resource_MediaContent1`\n    FOREIGN KEY (`MediaContent_Id`)\n    REFERENCES `mydb`.`MediaContent` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION);\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`SearchResult`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`SearchResult` (\n  `Id` INT NOT NULL,\n  `Title` TEXT NOT NULL,\n  `Description` TEXT NOT NULL,\n  PRIMARY KEY (`Id`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`DateFilter`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`DateFilter` (\n  `DateFrom` DATE NOT NULL,\n  `DateTo` DATE NOT NULL,\n  PRIMARY KEY (`DateFrom`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`ServiceRequest`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`ServiceRequest` (\n  `Id` INT NOT NULL,\n  `Title` TEXT NOT NULL,\n  `Description` TEXT NOT NULL,\n  `Resource_Id` INT NOT NULL,\n  `SearchResult_Id` INT NOT NULL,\n  `DateFilter_DateFrom` DATE NOT NULL,\n  PRIMARY KEY (`Id`),\n  INDEX `fk_ServiceRequest_Resource1_idx` (`Resource_Id` ASC) VISIBLE,\n  INDEX `fk_ServiceRequest_SearchResult1_idx` (`SearchResult_Id` ASC) VISIBLE,\n  INDEX `fk_ServiceRequest_DateFilter1_idx` (`DateFilter_DateFrom` ASC) VISIBLE,\n  CONSTRAINT `fk_ServiceRequest_Resource1`\n    FOREIGN KEY (`Resource_Id`)\n    REFERENCES `mydb`.`Resource` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_ServiceRequest_SearchResult1`\n    FOREIGN KEY (`SearchResult_Id`)\n    REFERENCES `mydb`.`SearchResult` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_ServiceRequest_DateFilter1`\n    FOREIGN KEY (`DateFilter_DateFrom`)\n    REFERENCES `mydb`.`DateFilter` (`DateFrom`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION);\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`SupportContent`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`SupportContent` (\n  `Id` INT NOT NULL,\n  `Title` TEXT NOT NULL,\n  `Description` TEXT NOT NULL,\n  PRIMARY KEY (`Id`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Role`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`Role` (\n  `Id` INT NOT NULL,\n  `Description` TEXT NOT NULL,\n  `Created` DATETIME NOT NULL,\n  PRIMARY KEY (`Id`));\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`AcessControl`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`AcessControl` (\n  `User_Id` INT NOT NULL,\n  `ServiceRequest_Id` INT NOT NULL,\n  `SupportContent_Id` INT NOT NULL,\n  `Role_Id` INT NOT NULL,\n  INDEX `fk_AcessControl_User1_idx` (`User_Id` ASC) VISIBLE,\n  INDEX `fk_AcessControl_ServiceRequest1_idx` (`ServiceRequest_Id` ASC) VISIBLE,\n  INDEX `fk_AcessControl_SupportContent1_idx` (`SupportContent_Id` ASC) VISIBLE,\n  INDEX `fk_AcessControl_Role1_idx` (`Role_Id` ASC) VISIBLE,\n  CONSTRAINT `fk_AcessControl_User1`\n    FOREIGN KEY (`User_Id`)\n    REFERENCES `mydb`.`User` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_AcessControl_ServiceRequest1`\n    FOREIGN KEY (`ServiceRequest_Id`)\n    REFERENCES `mydb`.`ServiceRequest` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_AcessControl_SupportContent1`\n    FOREIGN KEY (`SupportContent_Id`)\n    REFERENCES `mydb`.`SupportContent` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_AcessControl_Role1`\n    FOREIGN KEY (`Role_Id`)\n    REFERENCES `mydb`.`Role` (`Id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION);\n\nUSE `mydb` ;\n\n-- -----------------------------------------------------\n-- Placeholder table for view `mydb`.`view1`\n-- -----------------------------------------------------\nCREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);\n\n-- -----------------------------------------------------\n-- View `mydb`.`view1`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`view1`;\nUSE `mydb`;\n\n\nSET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n")])])]),s("h2",{attrs:{id:"початкове-наповнення-бази-даних"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#початкове-наповнення-бази-даних"}},[e._v("#")]),e._v(" Початкове наповнення бази даних")]),e._v(" "),s("p",[s("img",{attrs:{src:t(665),alt:"alt text"}}),e._v(" "),s("img",{attrs:{src:t(666),alt:"alt text"}})]),e._v(" "),s("h2",{attrs:{id:"restfull-сервіс-для-управління-даними"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restfull-сервіс-для-управління-даними"}},[e._v("#")]),e._v(" RESTfull сервіс для управління даними")]),e._v(" "),s("p",[e._v("Сервіс реалізован з використанням Django REST framework.")]),e._v(" "),s("h3",{attrs:{id:"налаштування-django-сервера"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-django-сервера"}},[e._v("#")]),e._v(" Налаштування Django сервера:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("from pathlib import Path\n\n# Build paths inside the project like this: BASE_DIR / 'subdir'.\nBASE_DIR = Path(__file__).resolve().parent.parent\n\n\n# Quick-start development settings - unsuitable for production\n# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/\n\n# SECURITY WARNING: keep the secret key used in production secret!\nSECRET_KEY = 'django-insecure-4!770zs05^b4)%9#x=d-6en(d8kd&ziw9krtnm%ut3!hk&7+8f'\n\n# SECURITY WARNING: don't run with debug turned on in production!\nDEBUG = True\n\nALLOWED_HOSTS = []\n\n\n# Application definition\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'mcas',\n    'django_filters',\n    'rest_framework',\n    'rest_framework.authtoken',\n    'dj_rest_auth',\n    \n]\n\nMIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n]\n\nROOT_URLCONF = 'mcas.urls'\n\nTEMPLATES = [\n    {\n        'BACKEND': 'django.template.backends.django.DjangoTemplates',\n        'DIRS': [],\n        'APP_DIRS': True,\n        'OPTIONS': {\n            'context_processors': [\n                'django.template.context_processors.debug',\n                'django.template.context_processors.request',\n                'django.contrib.auth.context_processors.auth',\n                'django.contrib.messages.context_processors.messages',\n            ],\n        },\n    },\n]\n\nWSGI_APPLICATION = 'mcas.wsgi.application'\n\n\n# Database\n# https://docs.djangoproject.com/en/4.2/ref/settings/#databases\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'mydb',\n        'USER': 'root',\n        'PASSWORD': 'S,.Kz@:?=nF2kh2',\n        'HOST': 'localhost',\n        'PORT': '3306',\n    }\n}\n\n\n# Password validation\n# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators\n\nAUTH_PASSWORD_VALIDATORS = [\n    {\n        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',\n    },\n    {\n        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',\n    },\n    {\n        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',\n    },\n    {\n        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',\n    },\n]\n\n\n# Internationalization\n# https://docs.djangoproject.com/en/4.2/topics/i18n/\n\nLANGUAGE_CODE = 'en-us'\n\nTIME_ZONE = 'UTC'\n\nUSE_I18N = True\n\nUSE_TZ = True\n\n\n# Static files (CSS, JavaScript, Images)\n# https://docs.djangoproject.com/en/4.2/howto/static-files/\n\nSTATIC_URL = 'static/'\n\n# Default primary key field type\n# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field\n\nDEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'\n\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("from django.contrib import admin\nfrom django.urls import path,include\nfrom rest_framework.routers import DefaultRouter\nfrom .views import MediaContentViewSet,RegisterView, LoginView\n\nrouter = DefaultRouter()\nrouter.register(r'mediacontent', MediaContentViewSet)\n\nurlpatterns = [\n    path('', include(router.urls)),\n    path('admin/', admin.site.urls),\n    path('register/', RegisterView.as_view(), name='register'),\n    path('login/', LoginView.as_view(), name='login'),\n]\n\n\n")])])]),s("h3",{attrs:{id:"моделі-для-взаємодііі-з-бд"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#моделі-для-взаємодііі-з-бд"}},[e._v("#")]),e._v(" Моделі для взаємодіїї з БД:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("from django.db import models\n\nclass User(models.Model):\n    Id = models.AutoField(primary_key=True)\n    login = models.CharField(max_length=255)\n    password = models.CharField(max_length=255)\n    email = models.EmailField()\n    role = models.CharField(max_length=255)\n\n    class Meta:\n        db_table = 'user'\n        \nclass MediaContent(models.Model):\n    Id = models.AutoField(primary_key=True)\n    Type = models.TextField(max_length=255)\n    URL = models.TextField(max_length=255)\n    Duration = models.TimeField()\n    Metadata = models.TextField()\n\n    class Meta:\n        db_table = 'mediacontent'\n")])])]),s("h3",{attrs:{id:"реалізація-rest-сервісу"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-rest-сервісу"}},[e._v("#")]),e._v(" Реалізація REST сервісу:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('from rest_framework import viewsets\nfrom rest_framework import filters\nfrom .models import MediaContent\nfrom .models import User\nfrom .serializers import MediaContentSerializer\nfrom rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom django.db import IntegrityError\n\nclass MediaContentViewSet(viewsets.ModelViewSet):\n    queryset = MediaContent.objects.all()\n    serializer_class = MediaContentSerializer\n    filter_backends = [filters.SearchFilter]\n    search_fields = [\'Metadata\']\n\n\n\nclass RegisterView(APIView):\n    def post(self, request):\n        username = request.data.get(\'username\')\n        password = request.data.get(\'password\')\n        email = request.data.get(\'email\')\n        role = request.data.get(\'role\')\n        \n        if not username or not password or not email or not role:\n            return Response(\n                data={\n                    "message": "username, password, email and role are required to register a user"\n                },\n                status=status.HTTP_400_BAD_REQUEST\n            )\n        try:\n            user = User.objects.get(login=username)\n            return Response(\n            data={\n                "message": "A user with this username already exists."\n             },\n            status=status.HTTP_400_BAD_REQUEST\n        )\n        except User.DoesNotExist:\n            user = User.objects.create(login=username, password=password, email=email, role=role)\n            return Response(data={\n            "message": "User registered successfully"\n        }, status=status.HTTP_201_CREATED)\n    \n        \n        \n    \nclass LoginView(APIView):\n    def post(self, request):\n        username = request.data.get(\'username\')\n        password = request.data.get(\'password\')\n        \n        if not username or not password:\n            return Response(\n                data={\n                    "message": "username and password is required to login a user"\n                },\n                status=status.HTTP_400_BAD_REQUEST\n            )\n        try:\n            user = User.objects.get(login=username)\n            if user.password != password:\n                raise User.DoesNotExist\n        except User.DoesNotExist:\n            return Response(\n                data={\n                    "message": "Invalid username or password"\n                },\n                status=status.HTTP_401_UNAUTHORIZED\n            )\n        #login(request, user)\n        return Response(data={\n            "message": "User logged in successfully"\n        }, status=status.HTTP_200_OK)\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("from rest_framework import serializers\nfrom .models import MediaContent\n\nclass MediaContentSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = MediaContent\n        fields = ['Id', 'Type', 'URL', 'Duration', 'Metadata']\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);