import express, {Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkNumeroSerieCodigoIsAvaliable, checkNumeroSerieIsAvaliable, createNumeroSerie, deleteNumeroSerie, getNumeroSerie, listNumeroSerie, updateNumeroSerie } from "./numeroSerie.service";
import { CreateNumeroSerieDto, UpdateNumeroSerieDto } from "./numeroSerie.types";

const index = async (req:Request, res:Response) => {
    try {
        const numeroSerie = await listNumeroSerie();
        res.status(StatusCodes.OK).json(numeroSerie);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}


const create = async (req:Request, res:Response) => {
    const numeroSerie = req.body as CreateNumeroSerieDto;

    try {
        if(await checkNumeroSerieIsAvaliable(numeroSerie.numeroSerie)){
            const novoNumeroSerie = await createNumeroSerie(numeroSerie);
            res.status(StatusCodes.CREATED).json(novoNumeroSerie);
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
            const numeroSerie = await getNumeroSerie(parseInt(codigo));
            if(!numeroSerie) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
            res.status(StatusCodes.OK).json(numeroSerie);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
}

const update = async (req:Request, res:Response) => {
    const numeroSerie = req.body as UpdateNumeroSerieDto

    try{
        if(await checkNumeroSerieCodigoIsAvaliable(numeroSerie.codigo)){
            const atualizarNumeroSerie = await updateNumeroSerie(numeroSerie)
            res.status(StatusCodes.OK).json(atualizarNumeroSerie)
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
        if(await checkNumeroSerieCodigoIsAvaliable(parseInt(codigo))){
            deleteNumeroSerie(parseInt(codigo))
            res.status(StatusCodes.OK).json(ReasonPhrases.OK)
        }else{
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
}

export default {index, create, read, update, remove}