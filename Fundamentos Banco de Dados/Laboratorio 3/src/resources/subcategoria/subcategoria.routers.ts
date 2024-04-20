import { Router } from "express"
import subcategoriaController from "./subcategoria.controller"

const router = Router()

router.get("/subcategoria", subcategoriaController.index)
router.post("/subcategoria", subcategoriaController.create)
router.get("/subcategoria/:codigo", subcategoriaController.read)
router.put("/subcategoria", subcategoriaController.update)
router.delete("/subcategoria/:codigo", subcategoriaController.remove)


export default router