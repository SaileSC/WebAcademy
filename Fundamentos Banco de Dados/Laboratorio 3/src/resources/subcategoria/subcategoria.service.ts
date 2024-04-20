import { PrismaClient, SubCategoria } from "@prisma/client";
import { CreateSubCategoriaDto, UpdateSubCategoriaDto } from "./subcategoria.types";

const prisma = new PrismaClient();

export const checkNomeIsAvaliable = async (nome:string):Promise<Boolean> => {
    return !(await prisma.subCategoria.findUnique({
        where:{nome}
    }))
}

export const createSubCategoria = async (subcategoria: CreateSubCategoriaDto):Promise<SubCategoria> => {
    return await prisma.subCategoria.create({data: subcategoria})
}

export const listSubCategorias = async():Promise<SubCategoria[]> => {
    return await prisma.subCategoria.findMany();
}

export const getSubCategoria = async(codigo:number):Promise<SubCategoria | null> =>{
    return await prisma.subCategoria.findUnique({where: {codigo}})
}

export const deleteSubCategoria = async(codigo:number):Promise<SubCategoria> => {
    return await prisma.subCategoria.delete({where: {codigo}})
}

export const updateSubCategoria = async(subcategoria:UpdateSubCategoriaDto): Promise<SubCategoria> => {
    return await prisma.subCategoria.update({
        where:{
            codigo:subcategoria.codigo
        },
        data:subcategoria
    })
}

export const checkSubCategoriaIsAvaliable = async (codigo:number): Promise<Boolean> => {
    return   !(await prisma.categoria.findUnique({where: {codigo:codigo}}))
}