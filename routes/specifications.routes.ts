import { Router } from 'express';
import { ensureAuthenticated } from '../src/middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../src/modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes };
