import { Router } from "express";
import { AuthenticateUserController } from "../src/modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle)

export { authenticateRoutes };
