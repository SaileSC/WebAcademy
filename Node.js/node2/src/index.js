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
            if (req.url == "/") {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
                filesNames.forEach((element) => {
                    res.write(creaeLink(element));
                    //res.write(`${stringUtil.toUpper(element)} <br>`);
                });
                res.end();
            } else if (req.url.includes("favicon.ico")) {
                res.end();
            } else {
                    const filePath = `./public${req.url}`;
                    fs.readFile(filePath, (err, data) => {
                        if (err) {
                            res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
                            res.write("<h1>Arquivo não encontrado</h1>");
                            res.end();
                            return;
                        }else{
                            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
                            res.write(`<pre>${stringUtil.toUpper(data.toString())}</pre>`);
                            res.write('<button onclick="history.back()">Voltar</button>');
                            res.end();
                        }
                    });
                }
        });


        //Define porta de acordo com o .env.xxxx.PORT
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
});
