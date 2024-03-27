import { Router } from "express";
import mainControler from "../controllers/main";

const router = Router();

router.get("/", mainControler.index)

router.use("/produto", (req , res, next) =>{
    console.log(`Requisição Metodo: ${req.method}, URL: ${req.url}`);
    next();
})


router.get("/produto", (req, res) => {
    res.send("Hello world!")
})

router.post("/produto", (req, res) => {
    res.send("Requisição post realizada...")
})


router.get("/bemvindo/:nome", (req, res) =>{
    const nome = req.params.nome;
    res.send(`Seja bem-vindo(a) ${nome}`)
})

router.get("/hb1", mainControler.hb1);

router.get("/hb2", mainControler.hb2);

router.get("/hb3", mainControler.hb3)

router.get("/hb4", mainControler.hb4)


router.get("/lorem/:paragrafos", (req, res) => {
    res.send()
})


export default router;