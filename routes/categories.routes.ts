import { response, Router } from 'express';

import { CategoriesRepository } from '../src/modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../src/modules/cars/useCases/createCategory';
import { CreateCategoryUseCase } from '../src/modules/cars/useCases/createCategory/CreateCategoryUseCase';
import { listCategoriesController } from '../src/modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
