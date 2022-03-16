import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';
import { carsRouters } from "./cars.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRouters);
router.use(authenticateRoutes); // Não estou passando rota(path) nenhuma, é pra executar direto no barra /


export { router };
