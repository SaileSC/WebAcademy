import { Router } from "express";
import mainControler from "../controllers/main";
import produtoController from "../controllers/produto"

const router = Router();

router.get("/", mainControler.index)
router.get("/bemvindo/:nome", mainControler.bemVindo )
router.get("/hb1", mainControler.hb1);
router.get("/hb2", mainControler.hb2);
router.get("/hb3", mainControler.hb3)
router.get("/hb4", mainControler.hb4)
router.get("/lorem/:quantidade", mainControler.lorem)
router.get("/produto", produtoController.index);
router.get("/produto/create", produtoController.create);
router.post("/produto/create", produtoController.create);
router.get("/produto/:id", produtoController.read);
router.get("/produto/update/:id", produtoController.update);
router.post("/produto/update/:id", produtoController.update);
router.get("/produto/remove/:id", produtoController.remove);


export default router;