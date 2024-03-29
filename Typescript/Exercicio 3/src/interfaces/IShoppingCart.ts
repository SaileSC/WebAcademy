import { Product } from "../classes/Products/Product";

export interface IShoppingCart{
    insertProduct(product:Product):void
    deleteProduct(productId:number):void
    showCurrentPrice():number
}