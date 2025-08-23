import { Request, Response } from 'express';
import UserService from '../services/userService';
import HttpStatus from 'http-status-codes';

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.status(HttpStatus.OK).json(users);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
            });
        }
    }
}
