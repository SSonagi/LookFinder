import { Router } from "express";
import OutfitController from '../controllers/outfitController';

const router = Router();
const outfitController = new OutfitController();

router.get("/user/:id", (req, res) => outfitController.getUserOutfits(req, res));
router.get("/title/:id", (req, res) => outfitController.getOutfitTitle(req, res));
router.put("/title", (req, res) => outfitController.updateOutfitTitle(req, res));
router.post("/", (req, res) => outfitController.addNewOutfit(req, res));

export default router;