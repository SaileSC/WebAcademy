import { Request, Response } from "express";

const index = (req:Request, res: Response) => {
    res.send("Bem-Vindo");
}

const hb1 = (req:Request, res:Response) => {
    res.render("main/hb1", {
        mensagem: "Universidade Federal do Amazonas",
        layout:"main2"
    });
}

const hb2 = (req:Request, res:Response) => {
    res.render("main/hb2",{
        poweredByExpress: true,
        nome: "Express",
        type:"framework",
        layout:"main2"
    })
}

const hb3 = (req:Request, res:Response) => {
    res.render("main/hb3", {
        mensagem: "Alguns professores do IComp/UFAM",
        profes:[
            { nome: 'David Fernandes', sala: 1238 },
            { nome: 'Horácio Fernandes', sala: 1233 },
            { nome: 'Edleno Moura', sala: 1236 },
            { nome: 'Elaine Harada', sala: 1231 },
        ],
        layout:"main2"
    })
}


const hb4 = (req:Request, res:Response) => {
    const techs = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
        ];
        
    res.render("main/hb4", {
        techs,
        layout:"main2"
    });
}


const bemVindo = (req:Request, res:Response) => {
    const nome = req.params.nome;
    res.send(`Seja bem-vindo(a) ${nome}`)
}


const lorem = (req:Request, res:Response) => {
    const quantidade:number = parseInt(req.params.quantidade);

    res.render("main/lorem", {
        quantidade,
        layout:"layoutLorem" //Adição de layout para evitar os navs das outras atividades e deixar ele um pouco mais bonito.
    })
}


export default {index,lorem,  hb1, hb2, hb3, hb4, bemVindo}