import { Product } from "./Products/Product";
import { Phone } from "./Products/Phone";
import { TV } from "./Products/TV";
import { Bicycle } from "./Products/Bicycle";

export class ProductsShop {
    constructor(
        private _productList: Product[] = []
    ){

        const phone1 = new Phone("iPhone 13", "Apple", 999.99, 128);
        const phone2 = new Phone("Galaxy S21", "Samsung", 799.99, 256);
        const phone3 = new Phone("Pixel 6", "Google", 899.99, 128);

        this._productList.push(phone1)
        this._productList.push(phone2)
        this._productList.push(phone3)

        const tv1 = new TV("Sony Bravia X90J", "Sony", 1299.99, 3840, 55);
        const tv2 = new TV("Samsung QN90A", "Samsung", 1499.99, 3840, 65);
        const tv3 = new TV("LG C1 OLED", "LG", 1999.99, 3840, 55);

        this._productList.push(tv1)
        this._productList.push(tv2)
        this._productList.push(tv3)

        const bike1 = new Bicycle("Trek Marlin 7", "Trek", 849.99, 29);
        const bike2 = new Bicycle("Giant Defy Advanced 1", "Giant", 2899.99, 700);
        const bike3 = new Bicycle("Cannondale SuperSix Evo", "Cannondale", 3499.99, 650);

        this._productList.push(bike1)
        this._productList.push(bike2)
        this._productList.push(bike3)
    }

    public get productList(): Product[] {
        return [...this._productList];
    }

    public getProduct = (productId:number):Product =>{
        const indexProduct = this._productList.findIndex(product => product.id == productId);
        if(indexProduct != -1){
            return this._productList[indexProduct]
        }else{
            return new Product();
        }
    }
}