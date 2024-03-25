import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({"nome" : "Seu nome"});
})

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

router.get("/hb1", (req, res) => {
    res.render("hb1", {
        mensagem: "Olá, você está aprendendo Express + HBS!",
        layout: false,
    });
})

router.get("/hb2", (req, res) =>{
    res.render("hb2",{
        poweredByExpress: true,
        nome: "Express",
        type:"framework",
        layout:false
    })
})

router.get("/hb3", (req,res) =>{
    res.render("hb3", {
        ufs: "UFAM",
        profes:[
            {nome : "David", sala:1238},
            {nome : "Julio", sala:234},
            {nome : "Ana", sala:4332},
        
        ],
        layout:false
    })
})


router.get("/lorem/:paragrafos", (req, res) => {
    res.send()
})


export default router;