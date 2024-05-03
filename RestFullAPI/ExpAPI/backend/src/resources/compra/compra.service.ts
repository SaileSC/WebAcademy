import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const validaProduto = async (id:string) : Promise<Boolean> => {
    return !!(await prisma.produto.findFirst({
        where: {id}
    }))
}