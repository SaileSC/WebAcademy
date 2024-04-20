import express, {Request, Response} from "express";
import dotenv from "dotenv";
import router from "./router"

dotenv.config();

const app = express()
const PORT = process.env.PORT ?? 3333;

app.use(express.json())

app.get("/dono", (req:Request, res:Response) => {
    res.send("Saile Santos da Costa")
})

app.use(router)
app.listen(PORT, () => {
    console.log(`Express app iniciado na porta ${PORT}.`)
})