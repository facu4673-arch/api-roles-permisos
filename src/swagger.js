const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Roles y Permisos",
      version: "1.0.0",
      description: "API con autenticación JWT y control de roles"
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? "https://api-roles-permisos-1.onrender.com/api"
          : "http://localhost:3000/api"
      }
    ], // 👈 ESTA COMA ES LA QUE TE FALTABA
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;