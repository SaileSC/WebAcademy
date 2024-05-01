import { compare } from "bcryptjs";
import { UsuarioDto } from "../usuario/usuario.types";
import { loginDto } from "./auth.types";
import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient()

export const checkCredentials = async (credentials : loginDto): Promise<UsuarioDto | null> => {
        const usuario = await prisma.usuario.findUnique({
            where:{email:credentials.email}
        });

        if (!usuario) return null;
        const ok = await compare(credentials.senha, usuario.senha)
        if (!ok) return null;
        

        return {
            id: usuario.id,
            nome: usuario.email,
            email: usuario.email,
            tipoUsuarioid:usuario.tipoUsuarioid,
            createdAt: usuario.createdAt,
            updatedAt: usuario.updatedAt
       }
}