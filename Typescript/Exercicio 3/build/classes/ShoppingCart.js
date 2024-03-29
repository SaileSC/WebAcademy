export class ShoppingCart {
    constructor(_productList = []) {
        this._productList = _productList;
    }
    get productList() {
        return [...this._productList];
    }
    insertProduct(product) {
        this._productList.push(product);
    }
    deleteProduct(productId) {
        const indexProduct = this._productList.findIndex(product => product.id === productId);
        if (indexProduct !== -1) {
            this._productList.splice(indexProduct, 1);
        }
    }
    showCurrentPrice() {
        if (this._productList.length) {
            let totalPrice = this._productList.reduce((sum, product) => sum + product.price, 0);
            return totalPrice;
        }
        else {
            return 0;
        }
    }
}
