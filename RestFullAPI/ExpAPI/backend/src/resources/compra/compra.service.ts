import { Compra, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const validaProduto = async (id:string) : Promise<Boolean> => {
    return !!(await prisma.produto.findFirst({
        where: {id}
    }))
}

export const registraCompra = async(carrinho:string[], usuarioId:string):
Promise<Compra> => {
    const compra = await prisma.compra.create({
        data: {usuarioId}
    })

    const manyProdutos = carrinho.map((prodId) => ({
        compraId: compra.id,
        produtoId: prodId,
        quantidade: 1
    }))

    await prisma.produtoCompra.createMany({
        data: manyProdutos
    })
    //Eu pensei em retornar aqui uma lista com todos os itens adicionados, mas parece ser mais interessante
    //Adicionar uma rota para recuperar os itens de um determinado carrinho
    return compra
}
