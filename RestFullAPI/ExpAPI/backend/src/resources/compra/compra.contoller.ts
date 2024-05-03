import { Request,Response } from "express";
import { registraCompra, validaProduto } from "./compra.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const addProdutoCarrinho = async (req:Request, res:Response) => {
    const { id } = req.params;
    if(!req.session.carrinhoCompras) req.session.carrinhoCompras = [];

    //Antes de adicionar ao carrinho verifico se existem esse produto no banco
    if(!await validaProduto(id)) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    req.session.carrinhoCompras.push(id);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK)
}


const registraCarrinho = async(req:Request, res:Response) => {
    const carrinho = req.session.carrinhoCompras as string[];
    const userId = req.session.uid!;
    try{
        if(!carrinho) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        const carrinhocreat = await registraCompra(carrinho, userId);
        res.status(StatusCodes.OK).json(carrinhocreat);
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)

    }
}


export default { addProdutoCarrinho , registraCarrinho}