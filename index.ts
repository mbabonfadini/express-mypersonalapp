import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import authDocProducao from "./src/middleware/autoDocProduction";
import routes from "./src/routes.js";
const swaggerOptions = { customCssUrl: "./public/swagger-ui-css" };

config();

const app = express();
const router = routes;

app
  .use(cors())
  .use(express.json())
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")));

router(app);

if (process.env.NODE_ENV !== "teste") {
  const swaggerFile = require("./swagger/swagger_output.json");

  app.use(
    "/doc",
    authDocProducao,
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, swaggerOptions)
  );
}

if (process.env.NODE_ENV !== "teste") {
  const PORT = process.env.port || 4000;
  app.listen(PORT, (): void =>
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
  );
}

export default app;
