import { Product } from "./Product";

export class Bicycle extends Product{
    constructor(
        model?:string,
        manufacturer?:string,
        price?:number,
        private _rimSize: number = 0 //Colocar os valores em polegadas.
    ){
        super(model, manufacturer, price)
    }


    public get rimSize(): number {
        return this._rimSize;
    }
    
    public set rimSize(value: number) {
        this._rimSize = value;
    }
}