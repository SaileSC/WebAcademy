import { CreateUsuarioDto, TipoUsuario, UpdateUsuarioDto, UsuarioDto } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";
import { PrismaClient, Usuario } from "@prisma/client";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();


export const emailInDatabase = async(email:string)
:Promise<Boolean> => {
    return !!(await prisma.usuario.findFirst({where: {email}}))
}

export const createUsuario = async(usuario: CreateUsuarioDto, tipoUsuario:TipoUsuario): 
Promise<UsuarioDto> => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS!)
    const salt = await genSalt(rounds)
    const senha = await hash(usuario.senha, salt)
    
    return await prisma.usuario.create({
        select: {id: true, nome:true, email:true, tipoUsuarioid: true, createdAt:true, updatedAt:true},
        data: {
            ... usuario,
            senha,
            tipoUsuarioid: 
                tipoUsuario == "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT
        },
    })
}

export const listUsuarios = async():
Promise<UsuarioDto[]> => {
    return await prisma.usuario.findMany({
        select: {id: true, nome:true, email:true, tipoUsuarioid: true, createdAt:true, updatedAt:true}
    })
}

export const getUsuario = async(id : string):
Promise<UsuarioDto | null> => {
    return await prisma.usuario.findUnique({
        select: {id: true, nome:true, email:true, tipoUsuarioid: true, createdAt:true, updatedAt:true},
        where: {id}
    })
}

export const updateUsuario = async(usuario:UpdateUsuarioDto, id:string):
Promise<Usuario> => {
    return await prisma.usuario.update({
        data:usuario,
        where:{id}
    })
}

export const removeUsuario = async(id:string):
Promise<Usuario> => {
    return await prisma.usuario.delete({where:{id}})
}