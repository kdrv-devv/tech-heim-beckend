import { Router } from "express";
import { createSeller, deleteSeller, getAllSellers, getOneSeller, updateSeller } from "../../controllers/products.controller.js";

const router = Router()

router.get("/sellers", getAllSellers);
router.get("/sellers/:id", getOneSeller);
router.post("/sellers", createSeller);
router.patch("/sellers/:id", updateSeller);
router.delete("/sellers/:id", deleteSeller);


export {router}

