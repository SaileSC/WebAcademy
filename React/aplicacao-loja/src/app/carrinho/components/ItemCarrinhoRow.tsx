import { ItemCarrinho } from "@/app/types/ItemCarrinho";
import BotaoCancelar from "./BtnCancelar";

interface ItemCarrinhoProp{
    item:ItemCarrinho
}

const ItemCarrinhoRow = (
    {item}:ItemCarrinhoProp
    ) => {
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
      ): number => precoUnitario * quantidade;

    return (
        <tr>
            <td>{item.nome}</td>
            <td>R$ {(item.preco).toFixed(2)}</td>
            <td>{item.quantidade}</td>

            <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
            <td>
                <BotaoCancelar/>
            </td>
        </tr>
    );
}

export default ItemCarrinhoRow;