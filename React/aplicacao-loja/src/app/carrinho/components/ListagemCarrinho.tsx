"use client"
import { ResumoCarrinho } from "@/app/components/ResumoCarrinho";
import React from "react";
import ItemCarrinhoRow from "./ItemCarrinhoRow";
import { ItemCarrinho } from "@/app/types/ItemCarrinho";

interface ListaItensProp {
  itens:ItemCarrinho[]
}

export const ListagemCarrinho = (
  {itens}:ListaItensProp
) => {
    return(
        <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Valor Unitário</th>
                      <th>Quantidade</th>
                      <th>Valor Total</th>
                      <th>Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itens.map((item) => (
                      <ItemCarrinhoRow key={item.id} item={item}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <ResumoCarrinho listaItens={itens}/>
        </div>
      </main>
    );
}

export default ListagemCarrinho;