const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT;

const filesNames = [];

fs.readdir("public", (err, files) => {
    if(err){
        console.log(err);
    }else{
        files.forEach((fileName)=>{
            filesNames.push(`${files.indexOf(fileName) + 1} : ${fileName}`);
        })
    }
})


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    filesNames.forEach((element) => {
        res.write(`${element} <br>`);
    })
})



server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})