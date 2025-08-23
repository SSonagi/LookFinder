import { Request, Response } from 'express';
import OutfitPieceService from '../services/outfitPieceService';
import HttpStatus from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';

export default class OutfitPieceController {
    private outfitPieceServices: OutfitPieceService;

    constructor() {
        this.outfitPieceServices = new OutfitPieceService();
    }

    async addPieceToOutfit(req: Request, res: Response): Promise<void> {
        try {
            const { outfitId, pieceId } = req.body;
            const result = await this.outfitPieceServices.addPieceToOutfit(outfitId, pieceId);
            res.status(200).json(result[0].id);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async updatePieceOnOutfit(req: Request, res: Response): Promise<void> {
        try {
            const { id, posx, posy, width, height } = req.body;
            await this.outfitPieceServices.updatePieceOnOutfit(id, posx, posy, width, height);
            res.sendStatus(200);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async removePieceOnOutfit(req: Request, res: Response): Promise<void> {
        try {
            await this.outfitPieceServices.removePieceOnOutfit(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }
}