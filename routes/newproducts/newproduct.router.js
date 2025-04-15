import { Router } from "express";
import { createNewProduct, deleteNewProduct, getAllNewProducts, getOneNewProduct,  updateNewProduct } from "../../controllers/products.controller.js";

const router = Router()

router.get("/products", getAllNewProducts);
router.get("/products/:id", getOneNewProduct);
router.post("/products", createNewProduct);
router.patch("/products/:id", updateNewProduct);
router.delete("/products/:id", deleteNewProduct);

export {router}