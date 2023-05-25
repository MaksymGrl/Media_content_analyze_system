# Модель прецедентів

## Загальна схема

@startuml
skinparam actorStyle awesome
actor "Користувач" as User 
actor "Адміністратор" as Admin
actor "Команда підтримки" as Tech
actor "Гість" as Guest

usecase "USER.REG\nРеєстрація" as USER.REG
usecase "USER.LOGIN\nАвторизація" as USER.LOGIN
usecase "MEDIA.SEARCH\nПошук\n результатів аналізу" as MEDIA.SEARCH
usecase "MEDIA.UPLOAD\nЗавантаження\n медіаданих" as MEDIA.UPLOAD 
usecase "USER.HELP\nЗвернення за допомогою" as USER.HELP

Guest -d-> USER.REG 
User -d-> USER.LOGIN 
USER.REG -d-> User
User -u-> MEDIA.SEARCH
User -d-> MEDIA.UPLOAD 
User -u-> USER.HELP  
Tech -u-> USER.HELP

usecase "ADMIN.EDIT\nРедагування даних\n адміністратором" as ADMIN.EDIT 
usecase "ADMIN.VIEW_USER_PROFILE\nІНФОРМАЦІЯ ПРО КОРИСТУВАЧА" as ADMIN.VIEW_USER_PROFILE
usecase "SYS.LOG\nЛог помилок" as SYS.LOG

Admin -d-> ADMIN.EDIT   
Admin -d-> ADMIN.VIEW_USER_PROFILE
Admin -d-> SYS.LOG

Admin -u-|> User


@enduml
## Діаграми прецедентів

#### **РЕЄСТРАЦІЯ**<a id="registration"></a>

**ID:** USER.REG

**НАЗВА:**  Реєстрація нового облікового запису користувача

**УЧАСНИКИ:**  Система, Користувач

**ПЕРЕДУМОВИ:**  Користувач не зареєстрований у системі

**РЕЗУЛЬТАТ:**  Створено новий обліковий запис та надано доступ до нього користувачу

**ВИКЛЮЧНІ СИТУАЦІЇ:**

1.  Обліковий запис з введеними даними реєстрації вже існує (код помилки: user.reg_err1)
2.  Пароль не відповідає умовам (занадто легкий/недостатньо символів;  код помилки: user.reg_err2) 
@startuml
|Користувач|
start
: Користувач виконує запит на реєстрацію;
|Система|
: Система надсилає форму реєстрації нового облікового запису;
|Користувач|
: Користувач вводить дані у форму реєстрації;
: Користувач натискає кнопку відправки форми;
|Система|
: Система перевіряє чи існує цей обліковий запис;
note right #ffaaaa
    <b> Можливо
    <b> user.reg_err1
    end note
: Система перевіряє пароль;
note right #ffaaaa
    <b> Можливо
    <b> user.reg_err2
    end note
: Створення нового облікового запису;
: Оповіщення користувача про успішну реєстрацію;
|Користувач|
stop;
@enduml

---
#### **АВТОРИЗАЦІЯ**<a id="authorisation"></a>

**ID:** USER.LOGIN

**НАЗВА:**  Авторизація в обліковий запис зареєстрованого користувача

**УЧАСНИКИ:**  Система, Користувач

**ПЕРЕДУМОВИ:**  Користувач зареєстрований у системі

**РЕЗУЛЬТАТ:**  Отримання доступу до свого облікового запису

**ВИКЛЮЧНІ СИТУАЦІЇ:**

1.  Облікового запису з введеними даними реєстрації не існує (код помилки: user.login_err1)
2. Невірно введенні дані. (код помилки: user.login_err2) 

@startuml

|Користувач|
start
: Користувач натискає на кнопку входу в обліковий запис;
|Система|
: Система надсилає користувачу форму для вводу даних облікового запису;
|Користувач|
: Користувач вводить дані свого облікового запису;
: Користувач настикає кнопку для відпарвки форми;
|Система|
: Система перевіряє дані, які надіслав користувач;
note right #ffaaaa
    <b> Можливо
    <b> user.login_err1
    end note
note left #ffaaaa
    <b> Можливо
    <b> user.login_err2
    end note
if (дані вірні?) then (так)
: Система надає користувачу доступ до облікового запису;
else (ні)
: Система відображає повідомлення про невірність даних;
endif
|Користувач|
stop;

@enduml


---
#### **ЗАВАНТАЖЕННЯ МЕДІАДАНИХ**<a id="upload"></a>

**ID:** MEDIA.UPLOAD

**НАЗВА:**  Завантаження медіаданих для аналізу

**УЧАСНИКИ:** Користувач, Система.

**ПЕРЕДУМОВИ:** Користувач увійшов у свій обліковий запис і має медіаконтент для аналізу.

**РЕЗУЛЬТАТ:** Медіаконтент завантажується для аналізу, а користувач отримує повідомлення про завершення аналізу.

**ВИНЯТКИ:**
1. Користувач не увійшов до свого облікового запису (код помилки: media.upload_err1)
2. Завантажений формат файлу не підтримується (код помилки: media.upload_err2)

@startuml

|Користувач|
start
: Користувач натискає кнопку завантаження медіаконтенту;
|Система|
: Система надсилає форму завантаження з інструкціями;
note right #ffaaaa
    <b> Можливо
    <b> user.upload_err1
    end note
|Користувач|
: Користувач заповнює форму та натискає кнопку;
|Система|
: Система отримає форму;
note right #ffaaaa
    <b> Можливо
    <b> user.upload_err2
    end note
if (Форма відповідає інструкції?) then (так)
: Система аналізує медіафайл;
: Система зберігає результат аналізу;
: Система повідомляє користувача про завершення аналізу;
else (ні)
: Система повідомляє про помилку;
endif
|Користувач|
stop;

@enduml

---
#### **ПОШУК РЕЗУЛЬТАТІВ АНАЛІЗУ ЗА ПАРАМЕТРАМИ ПОШУКУ**<a id="search"></a>
**ID:** MEDIA.SEARCH

**НАЗВА:** Пошук результатів аналізу за параметрами пошуку

**УЧАСНИКИ:** Користувач, Система

**ПЕРЕДУМОВИ:** Користувач увійшов до свого облікового запису.

**РЕЗУЛЬТАТ:** Користувач може шукати результати аналізу свого медіаконтенту та переглядати їх.

**ВИНЯТКИ:** 
1. Користувач не увійшов до свого облікового запису (код помилки: media.search_err1)
2. Введені дані не знайдено (код помилки: media.search_err2)

@startuml

|Користувач|
start
: Користувач натискає кнопку пошуку;
|Система|
: Система надсилає користувачеві форму пошуку
з інструкціями та опціями фільтрації результатів пошуку;
note right #ffaaaa
    <b> Можливо
    <b> media.search_err1
    end note
|Користувач|
: Користувач вводить критерії пошуку та натискає кнопку пошуку;
|Система|
: Система отримує результати аналізу, які відповідають критеріям пошуку,і відображає їх користувачеві;
note right #ffaaaa
<b> Можливо
<b> media.search_err2
end note
: Користувач може переглянути результати аналізу;

|Користувач|
stop;

@enduml

#### **ЗВЕРНЕННЯ ЗА ДОПОМОГОЮ ДО СЛУЖБИ ПІДТРИМКИ**<a id="help"></a>

**ID:** USER.HELP

**НАЗВА:**  Звернення за допомогою до служби підтримки

**УЧАСНИКИ:**  Користувач, команда підтримки

**ПЕРЕДУМОВИ:** Користувач має проблему з системою  і потребує допомоги від служби підтримки.

**РЕЗУЛЬТАТ:** Команда підтримки вирішує проблему користувача.

**ВИНЯТКИ**:

1. Проблема користувача не може бути вирішена службою підтримки (код помилки: support.help_err1)
2. Користувач ображає або порушує кодекс поведінки служби підтримки (код помилки: support.help_err2)

@startuml
|Користувач|
start
: Користувач має проблему з системою;
: Користувач звертається до служби підтримки;
|Команда підтримки|
: Підтвердження облікового запису користувача;
: Перевірка проблеми;
note left #ffaaaa
<b> Можливо
<b> support.help_err2
end note
if (Проблема вирішується?) then (так)
    
  : Надання розв'язання;
|Користувач|
  : Користувач тестує рішення;
|Команда підтримки|
  if (Рішення працює?) then (так)

    : Дякує службі підтримки і завершує взаємодію;
  else (ні)

    : Надання додаткових кроків з усунення 
несправностей або ескалує проблему;
    
  endif
else (ні)
  : Команда підтримки інформує користувача, 
що проблема не може бути вирішена, і вказує причину;
#FFAAAA: <b> Помилка: support.help_err1;
endif
: Завершення взаємодії;
stop;
@enduml

---
 #### **РЕДАГУВАННЯ ДАНИХ АДМІНІСТРАТОРОМ**<a id="edit"></a>
 
**ID:** ADMIN.EDIT

**НАЗВА:** Редагування даних адміністратором

**УЧАСНИКИ:** Адміністратор, Система

**Передумови:** Адміністратор має необхідні права для редагування медіаконтенту в системі.

**РЕЗУЛЬТАТ:** Медіаконтент відредаговано відповідно до змін, внесених адміністратором.

**ВИНЯТКИ:**
1. Адміністратор не має необхідних прав для редагування медіаконтенту (код помилки: admin.edit_err1)
2. Медіаконтент заблоковано для редагування іншим користувачем (код помилки: admin.edit_err2)
3. Зміни, внесені адміністратором, порушують політику вмісту системи (код помилки: admin.edit_err3)


@startuml

|Адміністратор|
start
: Адміністратор переходить до медіаконтенту, який він хоче відредагувати;
: Адміністратор натискає на кнопку редагування або вибирає опцію редагування зі спадного меню;
|Система|
: Система відображає медіаконтент у режимі редагування;
note left #ffaaaa
<b> Можливо
<b> admin.edit_err1
<b> admin.edit_err2
end note
: Адміністратор вносить бажані зміни до медіаконтенту;
if (Зміни порушують політику вмісту системи?) then (так)
#FFAAAA: <b> Помилка: admin.edit_err3;
: Система повідомляє адміністратора про порушення політики;
: Система реєструє порушення політики;
else (ні)
: Система підтверджує зміни адміністратора;
: Система оновлює медіаконтент новими змінами;
|Адміністратор|
: Адміністратор зберігає зміни;
|Система|
: Система реєструє зміни;
endif
|Адміністратор|
: Адміністратор виходить з режиму редагування;
stop

@enduml

####  ІНФОРМАЦІЯ ПРО КОРИСТУВАЧА <a id="view-user-profile"></a>

**ID:** ADMIN.VIEW_USER_PROFILE

**НАЗВА:** Перегляд інформації про профіль користувача

**УЧАСНИКИ:** Адміністратор, Система, Користувач

**НЕОБХІДНІ УМОВИ:** Адміністратор повинен бути зареєстрований в системі, а користувач, інформація профілю якого переглядається, повинен існувати в системі.

**РЕЗУЛЬТАТ:** Адміністратор може переглянути інформацію профілю користувача.

**ВИНЯТКИ:**

1. Якщо адміністратор не увійшов до системи, він не зможе переглянути інформацію профілю користувача. (код помилки: admin.view_user_profile_err1)
2. Якщо користувач, інформація про профіль якого переглядається, не існує в системі, система видасть повідомлення про помилку. (код помилки: admin.view_user_profile_err2)

@startuml

|Адміністратор|
start
: Адміністратор переходить до розділу керування користувачами системи;
: Адміністратор обирає користувача, 
інформацію про профіль якого він хоче переглянути;
|Система|
: Система відображає інформацію про профіль користувача;
note left #ffaaaa
<b> Можливо
<b> admin.view_user_profile_err1
<b> admin.view_user_profile_err2
end note
|Адміністратор|
: Адміністратор переглядає інформацію профілю користувача 
і вживає необхідних заходів;
if(Адміністратор вносить зміни у профіль) then(так)
|Система|
: Реєструє зміни у профілі; 
|Користувач|
: Отримає сповіщення про зміни у профілі;
|Адміністратор|
stop
else (ні)
stop
endif
@enduml