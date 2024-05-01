import { Router } from "express";
import produtoController from "./produto.controller";
import validadeBody from "../../middlewares/validadeBody";
import { produtoScheme } from "./produto.schemas";
import { isAdmin } from "../../middlewares/isAdmin";

const router = Router()

router.get("/",produtoController.index)
router.post("/", isAdmin, validadeBody(produtoScheme), produtoController.create)
router.get("/:id", produtoController.read)
router.put("/:id", isAdmin, validadeBody(produtoScheme), produtoController.update)
router.delete("/:id", isAdmin, produtoController.remove)

export default router;