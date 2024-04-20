import { Router } from "express"
import produtoController from "./produto.controller"

const router = Router()

router.get("/produto", produtoController.index)
router.post("/produto", produtoController.create)
router.get("/produto/:codigo", produtoController.read)
router.put("/produto", produtoController.update)
router.delete("/produto/:codigo", produtoController.remove)


export default router
