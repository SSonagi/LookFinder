import { Request, Response } from 'express';
import OutfitService from '../services/outiftServices';
import HttpStatus from 'http-status-codes';

export default class OutfitController {
    private outfitService: OutfitService;

    constructor() {
        this.outfitService = new OutfitService(0);
    }

    async getOutfitTitle(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.outfitService.getOutfitTitle(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async getUserOutfits(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.outfitService.getUserOutfits(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async updateOutfitTitle(req: Request, res: Response): Promise<void> {
        try {
            const { id, title } = req.body;
            await this.outfitService.updateOutfitTitle(id, title);
            res.sendStatus(200);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }
}