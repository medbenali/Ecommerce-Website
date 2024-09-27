import { Product } from "./product";

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    category: string;

    quantity: number;

    constructor(id: string, name: string, imageUrl: string, unitPrice:number, category: string)
    {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.unitPrice = unitPrice;
        this.category = category;
        
        this.quantity = 1;
    }
}
