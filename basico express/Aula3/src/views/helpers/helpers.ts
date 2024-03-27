import { prof } from "./helpersTypes";

const toUpper = (str:string):string =>{
    return str.toUpperCase();
}


const listProfs = (profs:prof[]) => {
 const list = profs.map((prof) => `<li>${prof.name} - ${prof.sala}</li>`)
 return `<ul>${list.join('')}</ul>`;
}

export {toUpper, listProfs};