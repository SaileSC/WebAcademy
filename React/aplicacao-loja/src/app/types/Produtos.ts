import { Fotos } from "./Fotos";

export interface Produto {
    id:string,
    fotos:Fotos[],
    nome:string,
    preco:string,
    descricao:string,
    vendido:string,
    usuario_id:string
}