import { Router } from "express";
import PieceController from '../controllers/pieceController';

const router = Router();
const pieceController = new PieceController();

router.get("/", (req, res) =>  pieceController.getPieces(req, res));
router.post("/", (req, res) => pieceController.addPiece(req, res));

export default router;