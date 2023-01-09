import {Product} from './product';
import {CartItem} from "./cartItem";

export class CartProducts {
    private cartItems: CartItem[];
    private totalPrice: number;
    private totalQuantity: number;
    private promoCodes: string[];
    private discount: number;

    constructor() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.promoCodes = [];
        this.discount = 0;
    }

    public toJSON() {
        return {
            cartItems: this.cartItems.map((el) => {
                return {product: el.product.id, quantity: el.getQuantity()}
            }),
            promoCodes: this.getPromocodes(),
            totalPrice: this.totalPrice,
            discount: this.discount,
            totalQuantity: this.totalQuantity
        };
    }

    public fromJSON(object: {
                        cartItems: { product: number, quantity: number }[],
                        promoCodes: string[],
                        totalPrice: number,
                        discount: number,
                        totalQuantity: number
                    }, data: { id: number, name: string, brand: string, quantity: number, price: number, description: string, category: string, images: string[] }[]
    ) {
        for (let j = 0; j < object.cartItems.length; j++) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === object.cartItems[j].product) {
                    this.cartItems.push(new CartItem(data[i], object.cartItems[j].quantity));
                    break;
                }
            }
        }
        this.promoCodes = object.promoCodes;
        this.totalPrice = object.totalPrice;
        this.totalQuantity = object.totalQuantity;
        this.discount = object.discount;
    }

    public addPromoCode(promoCode: string) {
        let isAlreadyIn = false;
        for (let i = 0; i < this.promoCodes.length; i++) {
            if (promoCode.toUpperCase() === this.promoCodes[i].toUpperCase()) {
                isAlreadyIn = true;
                break;
            }
        }
        if (isAlreadyIn) {
            return this.discount;
        } else {
            this.promoCodes.push(promoCode.toUpperCase());
            switch (promoCode.toUpperCase()) {
                case 'RS10':
                    this.discount += 10;
                    break;
                case 'RS20':
                    this.discount += 20;
                    break;
                case 'SUPER':
                    this.discount += 30;
                    break;
                default:
                    this.discount += 0;
                    break;
            }
            localStorage.setItem('cart', JSON.stringify(this.toJSON()));
            return this.discount;
        }
    }

    public removePromoCode(promoCode: string) {
        for (let i = 0; i < this.promoCodes.length; i++) {
            if (promoCode.toUpperCase() === this.promoCodes[i].toUpperCase()) {
                this.promoCodes.splice(i, 1);
                switch (promoCode.toUpperCase()) {
                    case 'RS10':
                        this.discount -= 10;
                        break;
                    case 'RS20':
                        this.discount -= 20;
                        break;
                    case 'SUPER':
                        this.discount -= 30;
                        break;
                    default:
                        this.discount -= 0;
                        break;
                }
                return this.discount;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
        return this.discount;
    }

    public getPromocodes() {
        return this.promoCodes;
    }

    public getDiscount() {
        return this.discount;
    }

    public clearCart() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.promoCodes = [];
        this.discount = 0;
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
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
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
    }

    public decrementProduct(index: number) {
        if (this.cartItems[index].getQuantity() > 1) {
            this.cartItems[index].removeProduct();
        } else {
            this.cartItems.splice(index, 1);
        }
        this.totalQuantity--;
        this.totalPrice -= this.cartItems[index].product.price;
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
    }

    public removeProduct(index: number) {
        this.totalQuantity -= this.cartItems[index].getQuantity();
        this.totalPrice -= this.cartItems[index].product.price * this.cartItems[index].getQuantity();
        this.cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
    }

    public removeProductById(product: Product) {
        for (let i = 0; i < this.cartItems.length; i++) {
            const cartItem = this.cartItems[i];
            if (cartItem.product.id === product.id) {
                this.totalQuantity -= cartItem.getQuantity();
                this.totalPrice -= cartItem.product.price * cartItem.getQuantity();
                this.cartItems.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this.toJSON()));
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