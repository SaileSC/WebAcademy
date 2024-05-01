import { CreateUsuarioDto, TipoUsuarioDto, UsuarioDto } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();

export const createUsuario = async(usuario: CreateUsuarioDto, tipoUsuario:TipoUsuarioDto): 
Promise<UsuarioDto> => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS!)
    const salt = await genSalt(10)
    const senha = await hash(usuario.senha, salt)
    
    const novoUsuario = await prisma.usuario.create({
        select: {id: true, nome:true, email:true, tipoUsuarioid: true, createdAt:true, updatedAt:true},
        data: {
            ...usuario,
            tipoUsuarioid: 
                tipoUsuario == "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT
        },
    })

    console.log(novoUsuario)

    return novoUsuario;
}