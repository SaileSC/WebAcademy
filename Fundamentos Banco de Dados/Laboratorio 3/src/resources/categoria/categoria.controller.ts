import express, {Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCategoriaIsAvaliable, checkNomeIsAvaliable, createCategoria, deleteCategoria, getCategoria, listCategorias, updateCategoria } from "./categoria.service";
import { CreateCategoriaDto, UpdateCategoriaDto } from "./categoria.types";

const index = async (req:Request, res:Response) => {
    try {
        const categorias = await listCategorias();
        res.status(StatusCodes.OK).json(categorias);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}


const create = async (req:Request, res:Response) => {
    const categoria = req.body as CreateCategoriaDto;

    try {
        if(await checkNomeIsAvaliable(categoria.nome)){
            const novaCategoria = await createCategoria(categoria);
            res.status(StatusCodes.CREATED).json(novaCategoria);
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
            const categoria = await getCategoria(parseInt(codigo));
            if(!categoria) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
            res.status(StatusCodes.OK).json(categoria);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
}

const update = async (req:Request, res:Response) => {
    const categoria = req.body as UpdateCategoriaDto

    try{
        if(await checkCategoriaIsAvaliable(categoria.codigo)){
            const atualizarCategoria = await updateCategoria(categoria)
            res.status(StatusCodes.OK).json(atualizarCategoria)
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
        if(await checkCategoriaIsAvaliable(parseInt(codigo))){
            deleteCategoria(parseInt(codigo))
            res.status(StatusCodes.OK).json(ReasonPhrases.OK)
        }else{
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
}

export default {index, create, read, update, remove}