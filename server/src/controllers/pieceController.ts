import { Request, Response } from 'express';
import PieceService from '../services/pieceServices';
import HttpStatus from 'http-status-codes';
import IPiece from '../types/piece';

interface IPieceRequest extends Request {
    body: IPiece;
}

export default class PieceController {
    private pieceService: PieceService;

    constructor() {
        this.pieceService = new PieceService(0);
    }

    async getPieces(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.pieceService.getPieces();

            console.log({ result: JSON.stringify(result) });

            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }

    async addPiece(req: IPieceRequest, res: Response): Promise<void> {
        try {
            const result = await this.pieceService.addPiece( req.body );
            res.status(200).json(result);
        } catch (error) {
            console.error(error);   
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: (error as Error).message,
              });
        }   
    }
}