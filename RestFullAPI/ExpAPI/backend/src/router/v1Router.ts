import {Router} from "express";

import produtoRouter from "../resources/produto/produto.router";
import languageRouter from "../resources/language/language.router";
import usuarioRuter from "../resources/usuario/usuario.router";
import authRouter from "../resources/auth/auth.routers";
import compraRouter from "../resources/compra/compra.router"

const router = Router();

router.use("/produto"
//#swagger.tags = ["Produto"]
, produtoRouter);

router.use("/language"
//#swagger.tags = ["Language"]
, languageRouter);

router.use("/usuario"
//#swagger.tags = ["Usuario"]
, usuarioRuter);

router.use("/auth"
//#swagger.tags = ["Auth"]
, authRouter);

router.use("/compra"
//#swagger.tags = ["Auth"]
, compraRouter);

export default router;