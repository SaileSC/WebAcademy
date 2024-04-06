//uso do commonJS
const http = require("http");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const createLink = require("./utils/links.js");


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT || 3000;

//Tratar quando for um diretorio
function listDirectory(req, res, directoryPath) {
    //uso do readdir para ler o conteudo do diretorio
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            res.writeHead(500);
            res.end("Erro ao ler arquivos.");
        }

        let listarItens = "";
        files.forEach((file) => {
            listarItens += createLink(file.name, file.isDirectory());
        });

        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.end(listarItens);
    });
}

//tratar quando for arquivo
function serveFile(req, res, filePath) {
    //uso do readFile para ler arquivo
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Erro ao ler o arquivo.");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
}

//criar servidor
const server = http.createServer((req, res) => {
    const urlPath = decodeURI(req.url);

    if (urlPath === "/favicon.ico") {
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        res.end();
        return;
    }

    //acesso a arquivos da pasta public
    const requestedPath = path.join("./public", urlPath);
    fs.stat(requestedPath, (err, stats) => {
        if (err) {
            res.writeHead(404);
            res.end("Arquivo ou diretório não encontrado.");
        }

        if (stats.isDirectory()) {
            listDirectory(req, res, requestedPath);
        } else {
            serveFile(req, res, requestedPath);
        }
    });
});

    server.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
});
