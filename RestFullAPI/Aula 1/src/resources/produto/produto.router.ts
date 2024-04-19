import { Router } from "express";
import produtoController from "./produto.controller";
import validadeBody from "../../middlewares/validadeBody";
import { produtoScheme } from "./produto.schemas";

const router = Router()

router.get("/",produtoController.index)
router.post("/", validadeBody(produtoScheme), produtoController.create)
router.get("/:id", produtoController.read)
router.put("/:id", validadeBody(produtoScheme), produtoController.update)
router.delete("/:id", produtoController.remove)

export default router;