"use client"

import { ItemCarrinho } from "../types/ItemCarrinho";

interface ResumoCarrinhoProps{
    listaItens:ItemCarrinho[]
}
export const ResumoCarrinho = (
    {listaItens}:ResumoCarrinhoProps
) => {

    return  (
        <div className="card mb-4">
            <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
            <p className="card-text fw-medium">
                Quantidade total: {listaItens.reduce((sum, item) => sum + item.quantidade, 0)}</p>
            <p className="card-text fw-medium">
                Valor total: R$ {listaItens.reduce((sum, item) => 
                    sum + (item.preco * item.quantidade), 0).toFixed(2)}
            </p>
            </div>
        </div>
    
    );
}