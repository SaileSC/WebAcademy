import { Product } from "./Product.js";
export class Bicycle extends Product {
    constructor(model, manufacturer, price, _rimSize = 0 //Colocar os valores em polegadas.
    ) {
        super(model, manufacturer, price);
        this._rimSize = _rimSize;
    }
    get rimSize() {
        return this._rimSize;
    }
    set rimSize(value) {
        this._rimSize = value;
    }
}
