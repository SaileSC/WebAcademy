import { Product } from "./Products/Product";
import { IShoppingCart } from "../interfaces/IShoppingCart"

export class ShoppingCart implements IShoppingCart {
    constructor(
        private _productList: Product[] = []
    ){}
        
    public get productList(): Product[] {
        return [...this._productList];
    }

    insertProduct(product: Product): void {
        this._productList.push(product);
    }

    deleteProduct(productId: number): void {
        const indexProduct = this._productList.findIndex(product => product.id === productId);
        if (indexProduct !== -1) {
            this._productList.splice(indexProduct, 1);
        }
    }

    showCurrentPrice(): number {
        if(this._productList.length){
            let totalPrice = this._productList.reduce((sum, product) => sum + product.price, 0)
            return totalPrice
        }else{
            return 0;
        }
    }
}