import {Router} from 'express';
import {AuthController} from "../controllers/auth-controller.js";

export const authRoute = Router();

authRoute.post('/login', AuthController.login);
authRoute.post('/register', AuthController.register);
authRoute.post('/logout', AuthController.logout);
authRoute.post('/refresh', AuthController.refresh);
