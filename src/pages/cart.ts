import { CartItem } from "../types/cartItem";
// import detailsData from "../assets/data";

export function renderCartPage(data: CartItem[]): HTMLElement {
    const cartPage = document.createElement('div');
    cartPage.classList.add('cart')

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cartPage.append(cartItems);

    data.forEach((item, i) => {
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
        cartItemAmount.classList.add('cart-items__item-amount');
        cartItemInfo.append(cartItemAmount);
        const cartItemAmountInput = document.createElement('input');
        cartItemAmountInput.classList.add('cart-items__item-amount-input');
        cartItemAmountInput.setAttribute('type', 'number');
        cartItemAmountInput.setAttribute('value', '1');
        cartItemAmountInput.setAttribute('min', '0');
        cartItemAmountInput.setAttribute('max', '99');
        cartItemAmount.innerHTML = 'Количество: ';
        cartItemAmount.append(cartItemAmountInput);
        cartItemAmount.innerHTML+= ' шт';

        const cartItemSum = document.createElement('div');
        cartItemSum.classList.add('cart-items__item-sum');
        cartItemInfo.append(cartItemSum);
        cartItemSum.innerText = `${item.price} грн`

        const cartItemTrash = document.createElement('div');
        cartItemTrash.classList.add('cart-items__trash');
        cartItem.append(cartItemTrash);
        cartItemTrash.onclick = function():void {
            data.splice(i, 1);
            cartPage.remove();
            document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(data));
            // console.log(data);
        }
    })

    const summaryWrapper = document.createElement('div');
    summaryWrapper.classList.add('summary-wrapper');
    cartPage.append(summaryWrapper);

    const summary = document.createElement('div');
    summary.classList.add('summary');
    summaryWrapper.append(summary);


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


    const summaryPay = document.createElement('button');
    summaryPay.classList.add('summary__pay');
    summaryWrapper.append(summaryPay);
    summaryPay.textContent = 'Оплата'

    return cartPage;
}