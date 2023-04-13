# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

@startuml

entity User
entity User.Name
entity User.Login
entity User.Password
entity User.Email
entity User.Role

User.Name --* User
User.Login --* User
User.Password --* User
User.Email --* User
User.Role --* User

entity Role
entity Role.name
entity Role.description
entity Role.created

Role.name --* Role
Role.description --* Role
Role.created --* Role

entity Access.Control

entity Service.Request
entity Request.ID
entity Request.Title
entity Request.Description
entity Request.Date

Request.ID --* Service.Request
Request.Title --* Service.Request
Request.Description --* Service.Request
Request.Date --* Service.Request

entity Support.Content
entity Content.ID
entity Content.Title
entity Content.Description

Content.ID --* Support.Content
Content.Title --* Support.Content
Content.Description -u-* Support.Content


Access.Control "0,*" -u- "1,1" Role
Access.Control "0," -u- "1,1" User
Access.Control "0," -l- "1,1" Service.Request
Access.Control "0,*" -r- "1,1" Support.Content

entity Resource
entity Resource.ID
entity Resource.URL

Resource.ID -u-* Resource
Resource.URL -u-* Resource

entity Date.Filter
entity Filter.Date.From
entity Filter.Date.To

Filter.Date.From -u-* Date.Filter
Filter.Date.To -u-* Date.Filter

entity Search.Result
entity Result.ID
entity Result.Title
entity Result.Description

Result.ID -u-* Search.Result
Result.Title -u-* Search.Result
Result.Description -d-* Search.Result

Service.Request "0,1" -d- "1,1" Date.Filter
Service.Request "0," -d- "1," Resource
Service.Request "1,1" -d- "0,*" Search.Result

entity Media.Content
entity Media.ID
entity Media.Type
entity Media.URL
entity Media.Duration
entity Media.Metadata

Media.ID --* Media.Content
Media.Type --* Media.Content
Media.URL --* Media.Content
Media.Duration --* Media.Content
Media.Metadata --* Media.Content


Resource "0," -d- "1,1" Media.Content


@enduml
