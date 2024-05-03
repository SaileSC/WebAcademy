"use client";
import React from "react";
import CardProdutos from "./CardProdutos";

const ListagemProdutos = () => {
    return  (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {CardProdutos("Notebook 1", 1500)}
        {CardProdutos("Notebook 1", 1500)}
        {CardProdutos("Notebook 1", 1500)}
        {CardProdutos("Notebook 1", 1500)}
    </div>
    );
}

export default ListagemProdutos;