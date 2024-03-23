import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import url from "url";
import { LoremIpsum } from "lorem-ipsum";

//Configura o ambiente como produção ou desenvolvimento;
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const PORT = process.env.PORT;


//Cria servidor
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname == "/") {
        let filePath = './src/static/html/index.html';
        try {
            //fornece html
            const data = await fs.promises.readFile(filePath, "utf8");
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            const qtdParagrafo = parsedUrl.query.qtdParagrafo || 0;

            if (qtdParagrafo) {
                let lorem = new LoremIpsum();
                let paragraps = "";
                for (let x = 1; x <= qtdParagrafo; x++) {
                    paragraps += `<p>${lorem.generateParagraphs(1)}</p>`
                }
                let newData = data.replace("...", paragraps);
                res.end(newData);
            } else {
                res.end(data);
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.message);
        }
    } else if (parsedUrl.pathname == "/css/styles.css") { 
        let filePath = './src/static/css/styles.css';
        try {
            //fornece css
            const data = await fs.promises.readFile(filePath, "utf8");
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        } catch (err) {
            res.writeHead(500);
            res.end('Erro interno do servidor');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

//Define porta de acordo com o .env.xxxx.PORT
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
