export class Product {
    productID : number;
    name : string;
    image : string;
    unitPrice : number
    price : number;
    quantity: number;

    /**
     *
     */
    constructor( id, name, image, uPrice, quantity = 1) {
        this.productID = id;
        this.name = name;
        this.image = image;
        this.unitPrice = uPrice;
        this.quantity = quantity;
        this.price = this.unitPrice * this.quantity;        
    }
}
