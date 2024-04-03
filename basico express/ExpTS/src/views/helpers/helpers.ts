import { prof, technologies } from "./helpersTypes";

const toUpper = (str:string):string =>{
    return str.toUpperCase();
}


const listProfs = (profs:prof[]) => {
 const list = profs.map((prof) => `<li>${prof.nome} - ${prof.sala}</li>`)
 return `<ul>${list.join('')}</ul>`;
}

const listTechs = (technologies:technologies[]) => {
    const listNodeJs = technologies.filter(tec => tec.poweredByNodejs == true);
    const list = listNodeJs.map((tec) => `<li>${tec.name} - ${tec.type}</li>`)

    return `<ul>${list.join('')}</ul>`;
   }

export {toUpper, listProfs, listTechs};