# API REST - Roles y Permisos (RBAC) 🔐

API REST desarrollada con Node.js que implementa autenticación JWT y control de acceso basado en roles (RBAC).

## 🚀 Funcionalidades

- Registro y login de usuarios
- Autenticación con JWT
- Rutas protegidas
- Control de roles (admin / user)
- Middleware de autorización
- Documentación con Swagger

## 🛠 Tecnologías

- Node.js
- Express
- MySQL
- Sequelize
- JWT
- Swagger

## 📌 Endpoints principales

POST /api/auth/register  
POST /api/auth/login  
GET /api/users/profile  
GET /api/users (solo admin)  

## 📥 Ejemplo de uso

### Crear usuario
POST /api/auth/register

{
  "name": "Facundo",
  "email": "facu@test.com",
  "password": "123456"
}

### Login
POST /api/auth/login

{
  "email": "facu@test.com",
  "password": "123456"
}

## 🔐 Roles

- USER → acceso básico
- ADMIN → acceso completo (gestión de usuarios)

## 📄 Documentación

👉 http://localhost:3000/api-docs

## ⚙️ Instalación

```bash
npm install
npm run dev


## 📬 Contacto

Si te interesa el proyecto o querés contactarme:
📧 facu4673@gmail.com

## 👨‍💻 Autor

Facundo Rodriguez  
🔗 GitHub: https://github.com/facu4673-arch  
🔗 LinkedIn: www.linkedin.com/in/facundo-rodriguez-2032ba251
