import { prof } from "./helpersTypes";

const toUpper = (str:string):string =>{
    return str.toUpperCase();
}


const listProfs = (profs:prof[]) => {
 const list = profs.map((prof) => `<li>${prof.nome} - ${prof.sala}</li>`)
 return `<ul>${list.join('')}</ul>`;
}

export {toUpper, listProfs};