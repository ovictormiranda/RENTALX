import { Router } from "express";
import multer from "multer";

import uploadConfig from "../src/config/upload"
import { ensureAuthenticated } from "../src/middlewares/ensureAuthenticated";
import { CreateUserController } from "../src/modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../src/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes }
