import Router from "express";
import {ModelDetailController} from "../controllers/model-detail-controller.js";

export const modelDetailRouter = Router();

modelDetailRouter.get('/',  ModelDetailController.getModelDetailById);