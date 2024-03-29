export class Product {
    constructor(_model = "", _manufacturer = "", _price = 0) {
        this._model = _model;
        this._manufacturer = _manufacturer;
        this._price = _price;
        this._id = Product.productId;
        Product.productId += 1;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(value) {
        this._manufacturer = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
}
Product.productId = 1;
