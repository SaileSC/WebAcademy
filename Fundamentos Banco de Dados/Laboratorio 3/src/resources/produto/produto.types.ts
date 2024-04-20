import { Produto } from "@prisma/client";

export type CreateProdutoDto = Pick<Produto, "modelo" | "precoBase" | "qtdDisponivel" | "codigoSubcategoria"> 
& { codigoNumerosSerie?: number | null};

export type UpdateProdutoDto = Pick<Produto, "codigo" | "modelo" | "precoBase" | "qtdDisponivel" | "codigoSubcategoria"> 
& { codigoNumerosSerie?: number | null};

