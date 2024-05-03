"use client";
import React from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {
  return (
    <main>
        <div className="container p-5">
        <ResumoCarrinho/>
        <h5 className="mb-3">Produtos disponíveis:</h5>
        <ListagemProdutos/>

        </div>
    </main>
  );
}