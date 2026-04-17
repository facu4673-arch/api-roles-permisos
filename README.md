## 🔗 Demo en producción
👉 https://api-roles-permisos-1.onrender.com/api-docs

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
GET /api/users/profile (requiere autenticación)  
GET /api/users (solo admin)

## 📥 Ejemplo de uso

### Crear usuario
POST /api/auth/register

{
  "name": "Facundo",
  "email": "facu@test.com",
  "password": "123456",
  "role": "user"
}

### Login
POST /api/auth/login

{
  "email": "facu@test.com",
  "password": "123456"
}

## 🔒 Ejemplo de ruta protegida

GET /api/users/profile

Requiere token JWT en header:
Authorization: Bearer <token>

## 🔐 Roles

- USER → acceso básico
- ADMIN → acceso completo (gestión de usuarios)

## 🔐 Autenticación

Esta API utiliza JWT para proteger rutas.

1. Registrarse o loguearse
2. Copiar el token
3. Usar el botón **Authorize** en Swagger
4. Probar endpoints protegidos

## 📁 Estructura

src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── routes/
 ├── models/
 └── utils/
 
## ⚙️ Variables de entorno

Crear un archivo .env con:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
PORT=3000

## 📌 Estado del proyecto

✅ Funcional y desplegado  
🚧 Próximas mejoras: refresh tokens, roles dinámicos, tests

## 📄 Documentación

👉 https://api-roles-permisos-1.onrender.com/api-docs

## ⚙️ Instalación

```bash
npm install
npm run dev
```

## 📬 Contacto

Si te interesa el proyecto o querés contactarme:
📧 facu4673@gmail.com

## 👨‍💻 Autor

Facundo Rodriguez  
🔗 GitHub: https://github.com/facu4673-arch  
🔗 LinkedIn: www.linkedin.com/in/facundo-rodriguez-2032ba251
