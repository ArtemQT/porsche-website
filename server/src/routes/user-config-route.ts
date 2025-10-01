import {Router} from "express";
import {authMiddleware} from "../middlewares/auth-middleware.js";
import {UserConfigController} from "../controllers/user-config-controller.js";

export const userConfigRouter = Router();

userConfigRouter.post('/', authMiddleware, UserConfigController.addUserConfig)