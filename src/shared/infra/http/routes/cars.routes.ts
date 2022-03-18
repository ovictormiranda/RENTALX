import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "../../../../modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRouters = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"))

carsRouters.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouters.get("/available", listAvailableCarsController.handle);

carsRouters.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

carsRouters.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),  // "images" é mesmo nome da variavel que recebe as imagens no controller
  uploadCarImagesController.handle
)

export { carsRouters };
