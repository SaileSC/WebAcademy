import { Router } from "express";
import usuarioController from "./usuario.controller";
import validadeBody from "../../middlewares/validadeBody";
import { createUsuarioScreema } from "./usuario.schemas";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validadeBody(createUsuarioScreema), usuarioController.create);
router.get("/", usuarioController.index);
router.get("/", usuarioController.index);
router.get("/", usuarioController.index);
router.get("/", usuarioController.index);

export default router;