import { Router } from "express"
import categoriaController from "../resources/categoria/categoria.controller"

const router = Router()

router.get("/categoria", categoriaController.index)
router.post("/categoria", categoriaController.create)
router.get("/categoria/:codigo", categoriaController.read)
router.put("/categoria", categoriaController.update)
router.delete("/categoria/:codigo", categoriaController.remove)



export default router