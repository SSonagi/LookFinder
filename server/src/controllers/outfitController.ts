import { Request, Response } from 'express';
import OutfitService from '../services/outiftServices';
import HttpStatus from 'http-status-codes';

export default class OutfitController {
    private outfitService: OutfitService;

    constructor() {
        this.outfitService = new OutfitService(0);
    }

    async getOutfit(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.outfitService.getOutfit(req.params.id);

            console.log({ result: JSON.stringify(result) });

            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async getOutfits(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.outfitService.getOutfits();

            console.log({ result: JSON.stringify(result) });

            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }
}