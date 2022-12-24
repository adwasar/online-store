import { Product } from './product';

export class CartItem {
    data: Product;
    images: string[];
    name: string;
    price: number;

    constructor (data: Product) {
        this.data = data;
        this.images = data.images;
        this.name = data.name;
        this.price = data.price;
    }
}