import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { createUsuario, emailInDatabase, getUsuario, listUsuarios, removeUsuario, updateUsuario } from "./usuario.service";
import { TipoUsuario, UpdateUsuarioDto } from "./usuario.types";

const index = async(req:Request, res: Response) => {
    try{
        const allUsuarios = await listUsuarios();
        res.status(StatusCodes.OK).json(allUsuarios)
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const create = async(req:Request, res: Response) => {
    const usuario = req.body;
    const tipoUsuario = req.query.tipoUsuario as TipoUsuario;
    try {
        if(!await emailInDatabase(usuario.email)){
            const novoUsuario = await createUsuario(usuario, tipoUsuario);
            res.status(StatusCodes.OK).json(novoUsuario);
            
        }else{
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        } 
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const read = async(req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await getUsuario(id);
        if(!usuario) res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        res.status(StatusCodes.OK).json(usuario);
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const update = async(req:Request, res: Response) => {
    const { id } = req.params;
    const usuario = req.body as UpdateUsuarioDto;
    try {
        const update = await updateUsuario(usuario, id);
        if(!update) res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        res.status(StatusCodes.OK).json(update)
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const remove = async(req:Request, res: Response) => {
    const { id } = req.params;

    try {
        const deleted = await removeUsuario(id);
        if(!deleted) res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        res.status(StatusCodes.OK).json(deleted);
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

export default { index, create, read, update, remove}
