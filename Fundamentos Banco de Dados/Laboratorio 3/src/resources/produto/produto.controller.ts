import express, {Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkProdutoIsAvaliable, createProduto, deleteProduto, getProduto, listProdutos, updateProduto } from "./produto.service";
import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";

const index = async (req:Request, res:Response) => {
    try {
        const categorias = await listProdutos();
        res.status(StatusCodes.OK).json(categorias);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const create = async (req:Request, res:Response) => {
    const produto = req.body as CreateProdutoDto;
    try {
        const novasubCategoria = await createProduto(produto);
        res.status(StatusCodes.CREATED).json(novasubCategoria);
        
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const read = async (req:Request, res:Response) => {
        const { codigo } = req.params;
        try{
            const produto = await getProduto(parseInt(codigo));
            if(!produto) return res.status(StatusCodes.NOT_FOUND)
                .json(ReasonPhrases.NOT_FOUND);
            res.status(StatusCodes.OK).json(produto);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
}

const update = async (req:Request, res:Response) => {
    const produto = req.body as UpdateProdutoDto
    try{
        if(await checkProdutoIsAvaliable(produto.codigo)){
            const atulizaProduto = await updateProduto(produto)
            res.status(StatusCodes.OK).json(atulizaProduto)
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
        if(await checkProdutoIsAvaliable(parseInt(codigo))){
            deleteProduto(parseInt(codigo))
            res.status(StatusCodes.OK).json(ReasonPhrases.OK)
        }else{
            res.status(StatusCodes.NOT_FOUND)
            .json(ReasonPhrases.NOT_FOUND)
        }
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
}
export default {index, create, read, update, remove}

