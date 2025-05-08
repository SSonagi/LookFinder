import { Router } from "express";
import OutfitController from '../controllers/outfitController';

const router = Router();
const outfitController = new OutfitController();

router.get("/outfits", (req, res) =>  outfitController.getOutfits(req, res));

export default router;