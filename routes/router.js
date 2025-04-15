import { Router } from "express";
import {router as newProducts} from './newproducts/newproduct.router.js'
import {router as sallers} from './sallers/sallers.router.js'

const router = Router()


router.use("/api" , newProducts)
router.use("/api" , sallers)



export {router}