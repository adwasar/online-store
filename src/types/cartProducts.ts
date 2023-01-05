import {Product} from './product';
import {CartItem} from "./cartItem";

export class CartProducts {
    private readonly cartItems: CartItem[];
    private totalPrice: number;
    private totalQuantity: number;

    constructor() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
    }

    public isInCart(product: Product) {
        let isAlreadyInCart = false;
        for (const cartItem of this.cartItems) {
            if (cartItem.product.id === product.id) {
                isAlreadyInCart = true;
                break;
            }
        }
        return isAlreadyInCart;
    }

    public addProduct(product: Product) {
        let isAlreadyInCart = false;
        for (const cartItem of this.cartItems) {
            if (cartItem.product.id === product.id) {
                cartItem.addProduct();
                this.totalPrice += product.price;
                this.totalQuantity++;
                isAlreadyInCart = true;
                break;
            }
        }
        if (!isAlreadyInCart) {
            this.cartItems.push(new CartItem(product));
            this.totalPrice += product.price;
            this.totalQuantity++;
        }
    }

    public decrementProduct(index: number) {
        if (this.cartItems[index].getQuantity() > 1) {
            this.cartItems[index].removeProduct();
        } else {
            this.cartItems.splice(index, 1);
        }
        this.totalQuantity--;
        this.totalPrice -= this.cartItems[index].product.price;
    }

    public removeProduct(index: number) {
        this.totalQuantity -= this.cartItems[index].getQuantity();
        this.totalPrice -= this.cartItems[index].product.price * this.cartItems[index].getQuantity();
        this.cartItems.splice(index, 1);
    }

    public removeProductById(product: Product) {
        for (let i = 0;i < this.cartItems.length;i++) {
            const cartItem = this.cartItems[i];
            if (cartItem.product.id === product.id) {
                this.totalQuantity -= cartItem.getQuantity();
                this.totalPrice -= cartItem.product.price * cartItem.getQuantity();
                this.cartItems.splice(i, 1);
                break;
            }
        }
    }

    public getTotalQuantity() {
        return this.totalQuantity;
    }

    public getTotalPrice() {
        return this.totalPrice;
    }

    public getItemsLength() {
        return this.cartItems.length;
    }

    public getCartItem(index: number) {
        return index < this.getItemsLength() ? this.cartItems[index] : undefined;
    }
}