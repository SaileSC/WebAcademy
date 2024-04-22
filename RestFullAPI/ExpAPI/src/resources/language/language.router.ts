import { Router } from "express";
import languageControllers from "./language.controllers";
import validadeBody from "../../middlewares/validadeBody";
import { languageSchemas } from "./language.schemas";

const router = Router();

router.post("/", validadeBody(languageSchemas), languageControllers.changeLanguage)


export default router