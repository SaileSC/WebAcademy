import { Product } from "./Product";

export class Phone extends Product{
    constructor(
        model?:string,
        manufacturer?:string,
        price?:number,
        private _memory: number = 0//Restringir a GB
        
    ){
        super(model, manufacturer, price)
    }

    public get memory(): number {
        return this._memory;
    }
    public set memory(value: number) {
        this._memory = value;
    }
}