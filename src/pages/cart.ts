// import {Product} from "../types/product";
import detailsData from "../assets/data";

const selectedProducts = [detailsData[0], detailsData[1], detailsData[2], detailsData[4], detailsData[8]];

export function renderCartPage(): HTMLElement {
    const cartPage = document.createElement('div');
    cartPage.classList.add('cart')

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart__items');
    cartPage.append(cartItems);

    selectedProducts.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__item');
        cartItems.append(cartItem);

        const cartItemImg = document.createElement('img');
        cartItemImg.classList.add('cart__item-img');
        cartItemImg.setAttribute('alt', "item");
        cartItemImg.setAttribute('src', `${item.images[0]}`);
        cartItem.append(cartItemImg);

        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart__item-info');
        cartItem.append(cartItemInfo);

        const cartItemName = document.createElement('div');
        cartItemName.classList.add('cart__item-name');
        cartItemInfo.append(cartItemName);
        cartItemName.innerText = `${item.name}`;

        const cartItemAmount = document.createElement('div');
        cartItemAmount.classList.add('cart__item-amount');
        cartItemInfo.append(cartItemAmount);
        cartItemAmount.innerText = "Количество: 1шт";

        const cartItemSum = document.createElement('div');
        cartItemSum.classList.add('cart__item-sum');
        cartItemInfo.append(cartItemSum);
        cartItemSum.innerText = `${item.price} грн`
    })

    // const payment = document.createElement('div');
    // payment.classList.add('payment');
    // cartPage.append(payment);

    return cartPage;
}