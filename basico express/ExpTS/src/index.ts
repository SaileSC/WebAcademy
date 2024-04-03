import express from "express";
import dotenv from "dotenv";
import envalidEnv from "./utils/envalidEnv";
//import morgan from "morgan"
import logger from "./middlewares/logger";
import router from "./routes/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";

dotenv.config();
envalidEnv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(logger("simples"));
//app.use(morgan("combined"));


//handlebarns config
app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    layoutsDir:`${__dirname}/views/layouts`,
    defaultLayout: "main",
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views/layouts`)

//config sass
app.use(
    sass({
    src:`${__dirname}/../public/scss`,
    dest:`${__dirname}/../public/css`,
    outputStyle:"compressed",
    prefix:"/css",
    }),
);

//config express urlencoded
app.use(express.urlencoded({extended:false}))

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
app.use("/img", express.static(`${__dirname}/../public/img`));

app.use(router);

app.use((req, res) =>{
    res.send("Error 404");
})

app.listen(PORT, () => {
    console.log(`Express app iniciado na porta ${PORT}.`)
})