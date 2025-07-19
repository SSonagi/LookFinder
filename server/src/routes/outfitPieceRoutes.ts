import { Router } from "express";
import OutfitPieceController from '../controllers/outfitPieceController';

const router = Router();
const outfitPieceController = new OutfitPieceController();

router.post("/", (req, res) =>  outfitPieceController.addPieceToOutfit(req, res));
router.put("/", (req, res) =>  outfitPieceController.updatePieceOnOutfit(req, res));
router.delete("/:id", (req, res) =>  outfitPieceController.removePieceOnOutfit(req, res));

export default router;