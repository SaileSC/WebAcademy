import { Request, Response, NextFunction } from "express";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const isAdmin = (req:Request, res:Response, next:NextFunction) => {
    if (req.session.tipoUsuarioid == TiposUsuarios.ADMIN) next();
    else res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
}