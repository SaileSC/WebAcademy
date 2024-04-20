import { Categoria, PrismaClient } from "@prisma/client";
import { CreateCategoriaDto, UpdateCategoriaDto } from "./categoria.types";

const prisma = new PrismaClient();

export const checkNomeIsAvaliable = async (nome:string):Promise<Boolean> => {
    return !(await prisma.categoria.findUnique({
        where:{nome}
    }))
}

export const createCategoria = async (categoria: CreateCategoriaDto):Promise<Categoria> => {
    return await prisma.categoria.create({data: categoria})
}


export const listCategorias = async():Promise<Categoria[]> => {
    return await prisma.categoria.findMany();
}

export const getCategoria = async(codigo:number):Promise<Categoria | null> =>{
    return await prisma.categoria.findUnique({where: {codigo}})
}

export const deleteCategoria = async(codigo:number):Promise<Categoria> => {
    return await prisma.categoria.delete({where: {codigo}})
}

export const updateCategoria = async(categoria:UpdateCategoriaDto): Promise<Categoria> => {
    return await prisma.categoria.update({
        where:{
            codigo:categoria.codigo
        },
        data:categoria
    })
}

export const checkCategoriaIsAvaliable = async (codigo:number): Promise<Boolean> => {
    return  !!(await prisma.categoria.findUnique({where: {codigo:codigo}}))
}