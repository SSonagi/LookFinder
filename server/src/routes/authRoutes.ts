import { Router } from "express";
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

router.post("/register", (req, res) => authController.register(req, res));
router.post("/signin", (req, res) => authController.signin(req, res));

export default router;
