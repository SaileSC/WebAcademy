"use client";
import React from "react";
import ListagemCarrinho from "./components/ListagemCarrinho";
import { mockItensCarrinho } from "../mock/mockItensCarrinho";

export default function Carrinho() {
  const listaProdutos = mockItensCarrinho;

  return (
    <ListagemCarrinho itens={listaProdutos}/>
  );
}