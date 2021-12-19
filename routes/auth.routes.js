import { Router } from 'express';
import authController from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/auth/signup', authController.signup);

export default authRouter;
