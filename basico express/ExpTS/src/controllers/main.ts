import { Request, Response } from "express";

const index = (req:Request, res: Response) => {
    res.send("Bem-Vindo");
}

const hb1 = (req:Request, res:Response) => {
    res.render("main/hb1", {
        mensagem: "Universidade Federal do Amazonas",
    });
}

const hb2 = (req:Request, res:Response) => {
    res.render("main/hb2",{
        poweredByExpress: true,
        nome: "Express",
        type:"framework",
    })
}

const hb3 = (req:Request, res:Response) => {
    res.render("main/hb3", {
        ufs: "UFAM",
        profes:[
            {nome : "David", sala:1238},
            {nome : "Julio", sala:234},
            {nome : "Ana", sala:4332},
        ]
    })
}


const hb4 = (req:Request, res:Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
        ];

    res.render("main/hb4", {
        profes,
    });
}


export default {index, hb1, hb2, hb3, hb4}