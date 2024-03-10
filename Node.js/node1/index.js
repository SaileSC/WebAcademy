const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

//Configura o ambiente como produção ou desenvolvimento;
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT;

let filesNames = [];


// Ler arquivos da pasta ./public
fs.readdir("public", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((fileName) => {
            //Adiciona nome de arquivos em filesNames {posicao : nome};
            filesNames.push(`${files.indexOf(fileName) + 1} : ${fileName}`);
        });

        //Cria servidor
        const server = http.createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
            filesNames.forEach((element) => {
                res.write(`${element} <br>`);
            });
            res.end();
        });


        //Define porta de acordo com o .env.
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
});
