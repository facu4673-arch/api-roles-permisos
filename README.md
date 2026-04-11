# API Roles y Permisos

API REST desarrollada con Node.js para gestionar usuarios con autenticación JWT y control de roles.

## 🚀 Tecnologías

- Node.js
- Express
- MySQL
- JWT
- Swagger

## 🔐 Funcionalidades

- Registro de usuarios
- Login con JWT
- Rutas protegidas
- Control de roles (admin / user)

## 📌 Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET /api/users (solo admin)  
DELETE /api/users/:id (solo admin)  
GET /api/users/profile  

## 📄 Documentación

http://localhost:3000/api-docs