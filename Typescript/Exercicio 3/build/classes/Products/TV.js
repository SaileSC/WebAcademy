import { Product } from "./Product.js";
export class TV extends Product {
    constructor(model, manufacturer, price, _resolution = 0.0, _inches = 0.0) {
        super(model, manufacturer, price);
        this._resolution = _resolution;
        this._inches = _inches;
    }
    get inches() {
        return this._inches;
    }
    set inches(value) {
        this._inches = value;
    }
    get resolution() {
        return this._resolution;
    }
    set resolution(value) {
        this._resolution = value;
    }
}
