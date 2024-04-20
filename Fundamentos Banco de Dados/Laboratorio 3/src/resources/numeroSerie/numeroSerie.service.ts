import { PrismaClient, NumerosSerie } from "@prisma/client";
import { CreateNumeroSerieDto, UpdateNumeroSerieDto } from "./numeroSerie.types";

const prisma = new PrismaClient();

export const checkNumeroSerieIsAvaliable = async (numeroSerie:string):Promise<Boolean> => {
    return !(await prisma.numerosSerie.findUnique({
        where:{numeroSerie}
    }))
}

export const createNumeroSerie = async (numeroSerie: CreateNumeroSerieDto):Promise<NumerosSerie> => {
    return await prisma.numerosSerie.create({data: numeroSerie})
}

export const listNumeroSerie = async():Promise<NumerosSerie[]> => {
    return await prisma.numerosSerie.findMany();
}

export const getNumeroSerie = async(codigo:number):Promise<NumerosSerie | null> =>{
    return await prisma.numerosSerie.findUnique({where: {codigo}})
}

export const deleteNumeroSerie = async(codigo:number):Promise<NumerosSerie> => {
    return await prisma.numerosSerie.delete({where: {codigo}})
}

export const updateNumeroSerie = async(numeroSerie:UpdateNumeroSerieDto): Promise<NumerosSerie> => {
    return await prisma.numerosSerie.update({
        where:{
            codigo:numeroSerie.codigo
        },
        data:numeroSerie
    })
}


export const checkNumeroSerieCodigoIsAvaliable = async (codigo:number):Promise<Boolean> => {
    return !!(await prisma.numerosSerie.findUnique({
        where:{codigo}
    }))
}