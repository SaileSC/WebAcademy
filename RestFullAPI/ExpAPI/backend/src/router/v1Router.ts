import {Router} from "express";
import produtoRouter from "../resources/produto/produto.router"
import languageRouter from "../resources/language/language.router"
import usuarioRuter from "../resources/usuario/usuario.router"
import authRouter from "../resources/auth/auth.routers"
const router = Router()



router.use("/produto"
//#swagger.tags = ["Produto"]
, produtoRouter)

router.use("/language",
//#swagger.tags = ["Language"]
languageRouter)

router.use("/usuario", usuarioRuter)

router.use("/auth",
//#swagger.tags = ["Auth"]
authRouter)

export default router;