require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const logger = require("./utils/logger");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: {
    error: "Demasiadas peticiones, intenta más tarde"
  }
});
const app = express();


const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(limiter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// rutas
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));


module.exports = app;