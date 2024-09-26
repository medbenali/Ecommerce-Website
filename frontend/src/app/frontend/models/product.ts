import { ProductCategory } from "./product-category";

export class Product {
    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    discountPrice: number;
    imageUrl: string;
    productReview: number;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdate: Date;
    category: ProductCategory
    
    constructor(id: string, sku: string, name: string, description: string, unitPrice: number, discountPrice: number, imageUrl: string, productReview: number, active: boolean, unitsInStock: number, dateCreated: Date,lastUpdate: Date, category: ProductCategory)
    {
        this.id = id;
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.discountPrice = discountPrice;
        this.imageUrl = imageUrl;
        this.productReview = productReview;
        this.active = active;
        this.unitsInStock = unitsInStock;
        this.dateCreated = dateCreated;
        this.lastUpdate = lastUpdate;
        this.category = category
    }
}
