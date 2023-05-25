﻿# Тестування працездатності системи
Тестування буде проводитись з використанням сервісу Postman. В якості тестів, будуть надіслані ряд POST та GET запросів для перевірки працювання системи реєстрації, авторизаціїї, додавання та пошуку медіа-контенту.
## Система реєстарції
![alt text](./register1.PNG)
![alt text](./register2.PNG)

**Спробуємо додати такий ж самий логін**

![alt text](./register3.PNG)

**Лог консолі сервера:**

![alt text](./register4.PNG)

**Результат у БД:**

![alt text](./register5.PNG)

## Система авторизації
**Авторизуємось у систему за логіном "Alex" та "Testlogin":**

![alt text](./login1.PNG)
![alt text](./login2.PNG)

**Спробуємо надіслати невірний пароль:**

![alt text](./login3.PNG)

**Лог консолі сервера:**

![alt text](./login4.PNG)

## Система обробки медіаданих:
**Додамо новий текст:**

![alt text](./meta1.PNG)
![alt text](./meta2.PNG)

**Результат у БД:**

![alt text](./meta3.PNG)

**Пошук:**

![alt text](./meta4.PNG)
![alt text](./meta5.PNG)



