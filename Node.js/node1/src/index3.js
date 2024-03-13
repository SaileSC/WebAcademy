import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import stringUtil from "./utils/strings.js";
import creaeLink from "./utils/links.js";

//Configura o ambiente como produção ou desenvolvimento;
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT;

let filesNames = [];


// Ler arquivos da pasta ./public
fs.readdir("./public", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((fileName) => {
            //Adiciona nome de arquivos em filesNames {posicao : nome};
            filesNames.push(fileName);
        });

        //Cria servidor
        const server = http.createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

            if (req.url == "/") {
                filesNames.forEach((element) => {
                    //res.write(creaeLink(element));
                    res.write(`${stringUtil.toUpper(element)} <br>`);
                });
            } else if (req.url.includes("favicon.ico")) {
                res.end();
            } else {
                fs.readFile("./public", (err, data) => {
                    if (err) throw Error(err)
                    res.end(data.toString());
                })
            }


            res.end();
        });


        //Define porta de acordo com o .env.
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
});
