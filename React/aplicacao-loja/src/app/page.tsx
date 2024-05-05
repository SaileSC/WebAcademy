"use client";
import React from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { mockProdutos } from "./mock/mockProdutos";
import { mockItensCarrinho } from "./mock/mockItensCarrinho";

export default function Produtos() {
  const listaProdutos = mockProdutos;
  const itensCarrinho = mockItensCarrinho;

  return (
    <main>
        <div className="container p-5">
        <ResumoCarrinho listaItens={itensCarrinho}/>
        <ListagemProdutos produtos={listaProdutos}/>
        </div>
    </main>
  );
}