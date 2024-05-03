"use client"
import { ResumoCarrinho } from "@/app/components/ResumoCarrinho";
import React from "react";
import ItemCarrinho from "./ItemCarrinho";

export const ListagemCarrinho = () => {
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
                    {ItemCarrinho("Notebock",1500,2)}
                    {ItemCarrinho("Notebock",1500,2)}
                    {ItemCarrinho("Notebock",1500,2)}
                    {ItemCarrinho("Notebock",1500,2)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <ResumoCarrinho/>
        </div>
      </main>
    );
}

export default ListagemCarrinho;