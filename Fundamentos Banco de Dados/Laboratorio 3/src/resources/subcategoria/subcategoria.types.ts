import { SubCategoria } from "@prisma/client";

export type CreateSubCategoriaDto = Pick<SubCategoria, "nome" | "codigoCategoria">
export type UpdateSubCategoriaDto = Pick<SubCategoria, "codigo" | "nome" | "codigoCategoria">
