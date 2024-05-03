import { Router } from "express";
import usuarioController from "./usuario.controller";
import validadeBody from "../../middlewares/validadeBody";
import { createUsuarioScreema } from "./usuario.schemas";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validadeBody(createUsuarioScreema), usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id", validadeBody(createUsuarioScreema), usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;