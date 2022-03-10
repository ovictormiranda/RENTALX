import { Router } from "express";
import { CreateUserController } from "../src/modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../src/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", updateUserAvatarController.handle);

export { usersRoutes }
