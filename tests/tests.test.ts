import {afterAll, beforeAll, beforeEach, describe, expect, jest, test} from '@jest/globals';
import {Product} from "../src/types/product";
import {CartItem} from "../src/types/cartItem";
import {CartProducts} from "../src/types/cartProducts";

const product1: Product = {
    id: 1,
    category: 'starter',
    images: [],
    name: 'Bendiks 2108',
    price: 202.55,
    brand: 'LSA',
    quantity: 5,
    description: 'Best ever part'
};
const product2: Product = {
    id: 2,
    category: 'bendiks',
    images: [],
    name: 'Bendiks 2101',
    price: 253.46,
    brand: 'Gumex',
    quantity: 10,
    description: 'Best ever part'
};

let cart = new CartProducts();

var localStorageMock = (function() {
    var store:{[index: string]:any} = {};

    return {
        getItem: function(key: string) {
            return store[key] || null;
        },
        setItem: function(key:string, value:string) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

Object.defineProperty(global, 'localStorage', {
    value: localStorageMock
});


describe('cartProducts module methods', () => {

    beforeAll(() => {
        cart = new CartProducts();
    });

    test('defined get methods', () => {
        expect(cart.getItemsLength).toBeDefined();
        expect(cart.getTotalQuantity).toBeDefined();
        expect(cart.getTotalPrice).toBeDefined();
    });

    test('items zero values after creation', () => {
        expect(cart.getItemsLength()).toBe(0);
        expect(cart.getTotalQuantity()).toBe(0);
        expect(cart.getTotalPrice()).toBe(0);
    });

    test('items length after add 1 product', () => {
        cart.addProduct(product1);
        expect(cart.getItemsLength()).toBe(1);
    });

    test('total price after add 1 product', () => {
        expect(cart.getTotalPrice()).toBe(product1.price);
    });

    test('items length after add other product', () => {
        cart.addProduct(product2);
        expect(cart.getItemsLength()).toBe(2);
    });

    test('total price of 2 unique items', () => {
        expect(cart.getTotalPrice()).toBe(product1.price + product2.price);
    });

    test('items length after add first product again', () => {
        cart.addProduct(product1);
        expect(cart.getItemsLength()).toBe(2);
    });


    test('total quantity of all items', () => {
        expect(cart.getTotalQuantity()).toBe(3);
    });

    test('total price of all items', () => {
        expect(cart.getTotalPrice()).toBe(Number((product1.price + product1.price + product2.price).toFixed(2)));
    });

    test('add promo codes', () => {
        expect(cart.addPromoCode('RS10')).toBe(10);
        expect(cart.addPromoCode('RS20')).toBe(30);
    });

    test('add promo codes', () => {
        expect(cart.removePromoCode('RS10')).toBe(20);
    });


    test('add promo codes', () => {
        expect(cart.getPromocodes()).toStrictEqual(['RS20']);
    });

});