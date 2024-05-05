"use client";
import React from "react";
import { Produto } from "../types/Produtos";
import CardProduto from "./CardProduto";

interface ListaProdutosProps {
    produtos:Produto[];
}

const ListagemProdutos = (
    { produtos }:ListaProdutosProps
) => {
    return  (
    <>
    <h5 className="mb-3">Produtos disponíveis:</h5>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto}/>
        ))}
    </div>
    </>    
    );
}

export default ListagemProdutos;