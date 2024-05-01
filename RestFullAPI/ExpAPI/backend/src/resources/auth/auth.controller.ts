import { Request, Response } from "express"
import { createUsuario } from "../usuario/usuario.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCredentials } from "./auth.services";

const singup = async(req:Request, res:Response) => {
    const usuario = req.body;
    try {
        const novoUsuario = await createUsuario(usuario, "client");
        res.status(StatusCodes.OK).json(novoUsuario)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const login = async(req:Request, res:Response) => {
    const credentials = req.body;
    try{
        const usuario = await checkCredentials(credentials)
        if(!usuario) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)

        req.session.uid = usuario.id;
        req.session.tipoUsuarioid = usuario.tipoUsuarioid;
        res.status(StatusCodes.OK).json(usuario)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}


const logout = async(req:Request, res:Response) => {
    if(req.session.uid){
        req.session.destroy(() => {
            res.status(StatusCodes.OK).json(ReasonPhrases.OK)
        })
    }else{
        res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
    }
}

export default {singup, login, logout}