import { PrismaClient, Produto } from "@prisma/client";
import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";

const prisma = new PrismaClient();

export const checkProdutoIsAvaliable = async (codigo:number):Promise<Boolean> => {
    return !!(await prisma.produto.findUnique({
        where:{codigo}
    }))
}


export const createProduto = async (produto: CreateProdutoDto):Promise<Produto> => {
    return await prisma.produto.create({data: produto})
}





export const listProdutos = async():Promise<Produto[]> => {
    return await prisma.produto.findMany();
}

export const getProduto = async(codigo:number):Promise<Produto | null> =>{
    return await prisma.produto.findUnique({where: {codigo}})
}



export const deleteProduto = async(codigo:number):Promise<Produto> => {
    return await prisma.produto.delete({where: {codigo}})
}




export const updateProduto = async(produto:UpdateProdutoDto): Promise<Produto> => {
    return await prisma.produto.update({
        where:{
            codigo:produto.codigo
        },
        data:produto
    })
}

