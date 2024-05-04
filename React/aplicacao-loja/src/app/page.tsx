"use client";
import React from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {
  return (
    <main>
        <div className="container p-5">
        <ResumoCarrinho/>
        
        <ListagemProdutos/>
        </div>
    </main>
  );
}