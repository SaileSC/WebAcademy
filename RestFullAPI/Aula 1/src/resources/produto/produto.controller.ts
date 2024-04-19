import express, {Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateProdutoDto } from "./produto.types";
import { checkNomeIsAvaliable, createProduto, listProdutos, readProduto } from "./produto.service";

const index = async (req:Request, res:Response) => {
    try {
        const produtos = await listProdutos();
        res.status(StatusCodes.OK).json(produtos);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const create = async (req:Request, res:Response) => {
    const produto = req.body as CreateProdutoDto;

    try {
        if(await checkNomeIsAvaliable(produto.nome)){
            const novoProduto = await createProduto(produto);
            res.status(StatusCodes.CREATED).json(novoProduto);
        }else{
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const read = async (req:Request, res:Response) => {
        const { id } = req.params;
        try{
            const produto = await readProduto(id);
            if(!produto) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
            res.status(StatusCodes.OK).json(produto);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
}

const update = async (req:Request, res:Response) => {
    res.send("update produto")
}

const remove = async (req:Request, res:Response) => {
    res.send("remove produto")
}

export default {index, create, read, update, remove}