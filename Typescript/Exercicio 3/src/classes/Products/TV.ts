import { Product } from "./Product";

export class TV extends Product{
    constructor(
        model?:string,
        manufacturer?:string,
        price?:number,
        private _resolution: number = 0.0,
        private _inches: number = 0.0
    ){
        super(model, manufacturer, price)
    }

    public get inches(): number {
        return this._inches;
    }
    public set inches(value: number) {
        this._inches = value;
    }
    public get resolution(): number {
        return this._resolution;
    }
    public set resolution(value: number) {
        this._resolution = value;
    }
}