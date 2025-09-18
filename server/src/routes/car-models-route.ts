import {Router} from "express";
import {CarModelsController} from "../controllers/car-models-controller.js";

export const carModelsRoute = Router();

carModelsRoute.get('/', CarModelsController.getCarModelsByRow);