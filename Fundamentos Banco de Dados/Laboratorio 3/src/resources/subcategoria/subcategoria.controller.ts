import express, {Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkNomeIsAvaliable, checkSubCategoriaIsAvaliable, createSubCategoria, deleteSubCategoria, getSubCategoria, listSubCategorias, updateSubCategoria } from "./subcategoria.service";
import { CreateSubCategoriaDto, UpdateSubCategoriaDto } from "./subcategoria.types";

const index = async (req:Request, res:Response) => {
    try {
        const categorias = await listSubCategorias();
        res.status(StatusCodes.OK).json(categorias);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}


const create = async (req:Request, res:Response) => {
    const subcategoria = req.body as CreateSubCategoriaDto;

    try {
        if(await checkNomeIsAvaliable(subcategoria.nome)){
            const novasubCategoria = await createSubCategoria(subcategoria);
            res.status(StatusCodes.CREATED).json(novasubCategoria);
        }else{
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const read = async (req:Request, res:Response) => {
        const { codigo } = req.params;
        try{
            const subcategoria = await getSubCategoria(parseInt(codigo));
            if(!subcategoria) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
            res.status(StatusCodes.OK).json(subcategoria);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
}

const update = async (req:Request, res:Response) => {
    const subcategoria = req.body as UpdateSubCategoriaDto

    try{
        if(await checkSubCategoriaIsAvaliable(subcategoria.codigo)){
            const atualizarsubCategoria = await updateSubCategoria(subcategoria)
            res.status(StatusCodes.OK).json(atualizarsubCategoria)
        }else{
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
        
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}


const remove = async (req:Request, res:Response) => {
    const { codigo } = req.params;
    try{
        if(await checkSubCategoriaIsAvaliable(parseInt(codigo))){
            deleteSubCategoria(parseInt(codigo))
            res.status(StatusCodes.OK).json(ReasonPhrases.OK)
        }else{
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
}

export default {index, create, read, update, remove}