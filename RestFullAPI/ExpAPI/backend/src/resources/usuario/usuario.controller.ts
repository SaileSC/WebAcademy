import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { createUsuario } from "./usuario.service";
import { TipoUsuarioDto } from "./usuario.types";

const index = async(req:Request, res: Response) => {}

const create = async(req:Request, res: Response) => {
    const usuario = req.body;
    const tipoUsuario = req.query.tipoUsuario as TipoUsuarioDto;
    try {
        const novoUsuario = await createUsuario({nome: "Saile", email:"email@gmail.com", senha: "3943290u4023"}, "client")
        res.status(StatusCodes.OK).json(novoUsuario)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }

}
const read = async(req:Request, res: Response) => {}
const update = async(req:Request, res: Response) => {}
const remove = async(req:Request, res: Response) => {}

export default { index, create, read, update, remove}
