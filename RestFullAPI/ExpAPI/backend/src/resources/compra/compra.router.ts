import { Router } from "express"
import compraContoller from "./compra.contoller";

const router = Router();

router.post("/:id", compraContoller.addProdutoCarrinho)

export default router