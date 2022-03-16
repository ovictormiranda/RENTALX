import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import swaggerUi from 'swagger-ui-express';

import "../../container";
import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import createConnection from "../typeorm";
import swaggerFile from '../../../swagger.json';

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

//Error Middleware
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
// Verifying which error instance is
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
})

app.listen(3333, () => console.log("Server is running!"));
