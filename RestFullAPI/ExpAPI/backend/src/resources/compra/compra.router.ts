import { Router } from "express"
import compraContoller from "./compra.contoller";
import { isAuth } from "../../middlewares/isAuth";

const router = Router();

router.post("/:id", compraContoller.addProdutoCarrinho)
router.post("/", isAuth, compraContoller.registraCarrinho)

export default router