import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { createUsuario, listUsuarios } from "./usuario.service";
import { TipoUsuario } from "./usuario.types";

const index = async(req:Request, res: Response) => {
    try{
        const allUsuarios = listUsuarios();
        res.status(StatusCodes.OK).json(allUsuarios)
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const create = async(req:Request, res: Response) => {
    const usuario = req.body;
    const tipoUsuario = req.query.tipoUsuario as TipoUsuario;
    try {
        const novoUsuario = await createUsuario(usuario, tipoUsuario)
        res.status(StatusCodes.OK).json(novoUsuario)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const read = async(req:Request, res: Response) => {}
const update = async(req:Request, res: Response) => {}
const remove = async(req:Request, res: Response) => {}

export default { index, create, read, update, remove}
