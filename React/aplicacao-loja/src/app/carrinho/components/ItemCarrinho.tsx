const ItemCarrinho = (
    nome:string,
    precoUnitario:number, 
    quantidade:number
    ) => {
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
      ): number => precoUnitario * quantidade;

    return (
        <tr key="1">
            <td>{nome}</td>
            <td>R$ {(1500).toFixed(2)}</td>
            <td>{quantidade}</td>

            <td>R$ {valorTotalProduto(precoUnitario, quantidade).toFixed(2)}</td>
            <td>
            <button className="btn btn-danger btn-sm">
                Remover
            </button>
            </td>
        </tr>
    );
}

export default ItemCarrinho;