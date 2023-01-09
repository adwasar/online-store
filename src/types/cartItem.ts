import { Product } from './product';

export class CartItem {
    public readonly product: Product;
    private quantity: number;
    constructor (product: Product, quantity: number = 1) {
        this.product = product;
        this.quantity = quantity;
    }
    public addProduct() {
        this.quantity++;
    }
    public removeProduct() {
        this.quantity--;
    }
    public getQuantity() {
        return this.quantity;
    }
}