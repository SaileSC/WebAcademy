import express, { Request, Response } from "express";
import dotenv from "dotenv";
import envalidEnv from "./utils/envalidEnv";
import morgan from "morgan";
dotenv.config();
envalidEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(morgan("combined"));

app.use("/produto", (req : Request, res: Response, next) =>{
    console.log(`Requisição Metodo: ${req.method}, URL: ${req.url}`);
    next();
})

app.use("/produto", (req:Request, res:Response, next) => {
    const { login, senha} = req.body;
    if(login == "eduarda" && senha == "senha123"){
        next();
    }else{
        res.status(401).send({msg: "usuario não autorizado"});
    }
})

app.get("/produto", (req: Request, res: Response) => {
    res.send("Hello world!")
})

app.post("/produto", (req: Request, res: Response) => {
    res.send("Requisição post realizada...")
})


app.listen(PORT, () => {
    console.log(`Express app uniciada na porta ${PORT}.`)
})