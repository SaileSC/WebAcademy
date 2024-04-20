import { NumerosSerie } from "@prisma/client";

export type CreateNumeroSerieDto = Pick<NumerosSerie, "numeroSerie">
export type UpdateNumeroSerieDto = Pick<NumerosSerie, "codigo" | "numeroSerie">

