import { Router } from "express"
import numeroSerieController from "./numeroSerie.controller"

const router = Router()

router.get("/numeroserie", numeroSerieController.index)
router.post("/numeroserie", numeroSerieController.create)
router.get("/numeroserie/:codigo", numeroSerieController.read)
router.put("/numeroserie", numeroSerieController.update)
router.delete("/numeroserie/:codigo", numeroSerieController.remove)


export default router