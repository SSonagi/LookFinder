import { Request, Response } from 'express';
import AuthService from '../services/authService';
import HttpStatus from 'http-status-codes';

export default class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async register(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        try {
            const user = await this.authService.registerUser(email, password);
            res.status(HttpStatus.CREATED).json(user);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
            });
        }
    }

    async signin(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        try {
            const user = await this.authService.signInUser(email, password);
            res.status(HttpStatus.OK).json(user);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.UNAUTHORIZED).json({
                message: (error as Error).message,
            });
        }
    }
}
