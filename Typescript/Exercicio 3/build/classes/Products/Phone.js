import { Product } from "./Product.js";
export class Phone extends Product {
    constructor(model, manufacturer, price, _memory = 0 //Restringir a GB
    ) {
        super(model, manufacturer, price);
        this._memory = _memory;
    }
    get memory() {
        return this._memory;
    }
    set memory(value) {
        this._memory = value;
    }
}
