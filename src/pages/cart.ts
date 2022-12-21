// import {Product} from "../types/product";
import detailsData from "../assets/data";

const selectedProducts = [detailsData[0], detailsData[1], detailsData[2], detailsData[4], detailsData[8]];

export function renderCartPage(): HTMLElement {
    const cartPage = document.createElement('div');
    cartPage.classList.add('cart')

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cartPage.append(cartItems);

    selectedProducts.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-items__item');
        cartItems.append(cartItem);

        const cartItemImg = document.createElement('img');
        cartItemImg.classList.add('cart-items__item-img');
        cartItemImg.setAttribute('alt', "item");
        cartItemImg.setAttribute('src', `${item.images[0]}`);
        cartItem.append(cartItemImg);

        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-items__item-info');
        cartItem.append(cartItemInfo);

        const cartItemName = document.createElement('div');
        cartItemName.classList.add('cart-items__item-name');
        cartItemInfo.append(cartItemName);
        cartItemName.innerText = `${item.name}`;

        const cartItemAmount = document.createElement('div');
        const cartItemAmountInput = '<input type="number" value="1" min="0" max="99">';
        cartItemAmount.classList.add('cart-items__item-amount');
        cartItemInfo.append(cartItemAmount);
        cartItemAmount.innerHTML = `Количество: ${cartItemAmountInput} шт`;

        const cartItemSum = document.createElement('div');
        cartItemSum.classList.add('cart-items__item-sum');
        cartItemInfo.append(cartItemSum);
        cartItemSum.innerText = `${item.price} грн`
    })

    const summary = document.createElement('div');
    summary.classList.add('summary');
    cartPage.append(summary);


    const summaryTitle = document.createElement('div');
    summaryTitle.classList.add('summary__title');
    summary.append(summaryTitle);
    summaryTitle.textContent = 'Итого';

    const summaryInfo = document.createElement('div');
    summaryInfo.classList.add('summary__info');
    summary.append(summaryInfo);

    const summaryAmount = document.createElement('div');
    summaryAmount.classList.add('summary__amount');
    summaryInfo.append(summaryAmount);
    summaryAmount.textContent = `Товаров: 1 шт`

    const summaryDiscount = document.createElement('div');
    summaryDiscount.classList.add('summary__discount');
    summaryInfo.append(summaryDiscount);
    summaryDiscount.textContent = 'Скидка: 0 грн'

    const summaryPromo = document.createElement('div');
    summaryPromo.classList.add('summary__promo');
    summaryInfo.append(summaryPromo);

    const summaryPromoInput = document.createElement('input');
    summaryPromoInput.classList.add('summary__promo-input');
    summaryPromo.append(summaryPromoInput);
    summaryPromoInput.setAttribute('placeholder', 'ввести промокод');

    const summaryTotal = document.createElement('div');
    summaryTotal.classList.add('summary__total');
    summaryInfo.append(summaryTotal);
    summaryTotal.textContent = 'Всего: 999 грн';

    return cartPage;
}