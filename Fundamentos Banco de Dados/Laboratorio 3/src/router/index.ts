import { Router } from "express"
import RouterCategorias from "../resources/categoria/categoria.routers"
import RouterSubCategorias from "../resources/subcategoria/subcategoria.routers"
import routerProdutos from "../resources/produto/produto.routers"
import routerNumeroSerie from "../resources/numeroSerie/numeroSerie.routers"

const router = Router()

router.use("/loja", RouterCategorias)
router.use("/loja", RouterSubCategorias)
router.use("/loja", routerProdutos)
router.use("/loja", routerNumeroSerie)




export default router