import { Request, Response } from "express";

import { ListCategoriesUseCase} from './ListCategoryUseCase';

class ListCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}
  
  handle(request: Request, response: Response): Response {
    const all = this.ListCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController }