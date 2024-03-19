import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import url from "url";
import lorem from "./utils/lorem.js"

//Configura o ambiente como produção ou desenvolvimento;
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT;

//Cria servidor
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const filePath = './src/html/index.html';
    if (parsedUrl.pathname == "/") {
        fs.readFile(filePath,"utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err.message);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

                const qtdParagrafo = parsedUrl.query.qtdParagrafo || 0;

                if(qtdParagrafo){
                    let newData = data;
                    res.write(qtdParagrafo);
                    newData = newData.replace("{}}", "novo texto");
                    res.end(newData);
                }else{
                    res.end(data);
                }
            }
        }); 




    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
});


//Define porta de acordo com o .env.xxxx.PORT
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
