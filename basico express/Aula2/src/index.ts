import express from "express";
import dotenv from "dotenv";
import envalidEnv from "./utils/envalidEnv";

import morgan from "morgan"

import logger from "./middlewares/logger";
import router from "./routes/router";
import { engine } from "express-handlebars";

dotenv.config();
envalidEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(logger("simples"));
app.use(morgan("combined"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`)

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", express.static(`${__dirname}/../public/js`));
app.use("/img", express.static(`${__dirname}/../public/img`));

app.use(router);

app.use((req, res) =>{
    res.send("Error 404");
})
app.listen(PORT, () => {
    console.log(`Express app uniciada na porta ${PORT}.`)
})