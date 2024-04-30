import express, {Request, Response} from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router"
import setCookieLang from "./middlewares/setLangCookie";
import cookieParser from "cookie-parser";
import {v4 as uuidv4} from "uuid";
import session from "express-session";


dotenv.config();
validateEnv();

const app = express()
const PORT = process.env.PORT ?? 3333;

app.use(cookieParser());

app.use(session({
    genid: () => uuidv4(),
    secret: 'Hi9Cf#mK98',
    resave: true,
    saveUninitialized: true
}))

app.use(setCookieLang);
app.use(express.json());

app.get("/createby", (req:Request, res:Response) => {
    res.send("Saile Santos da Costa")
})

app.use(router);
app.listen(PORT, () => {
    console.log(`Express app iniciado na porta ${PORT}.`)
})