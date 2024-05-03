import { Request,Response } from "express";
import { validaProduto } from "./compra.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const addProdutoCarrinho = async (req:Request, res:Response) => {
    const { id } = req.params;
    if(!req.session.carrinhoCompras) req.session.carrinhoCompras = [];

    //Antes de adicionar ao carrinho verifico se existem esse produto no banco
    if(!await validaProduto(id)){
        res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        return;
    }
    req.session.carrinhoCompras.push(id);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK)
}


export default { addProdutoCarrinho }