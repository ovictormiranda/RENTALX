import { Router } from 'express';
import { createSpecificationController } from '../src/modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {

})

export { specificationsRoutes };