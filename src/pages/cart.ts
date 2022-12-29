import {CartProducts} from "../types/cartProducts";
export const setResultFields = (data: CartProducts) => {
    const headerCart = document.querySelector('.header__cart-total') as HTMLElement;
    const summaryAmount = document.createElement('div');
    const summaryTotal = document.createElement('div');

    const getNum = (num: number) => (Math.round(num * 100) / 100).toFixed(2);
    if (headerCart) {
        headerCart.innerText = `Корзина: ${getNum(data.getTotalPrice())} грн. Количество товаров: ${data.getTotalQuantity()}`;
    }
    if (summaryAmount) {
        summaryAmount.innerText = `Товаров: ${data.getTotalQuantity()} шт.`;
    }
    if (summaryTotal) {
        summaryTotal.innerText = `Всего: ${getNum(data.getTotalPrice())} грн.`;
    }
}

export function renderCartPage(data: CartProducts): HTMLElement {
    // const summaryDiscount = document.querySelector('.summary__discount') as HTMLElement;
    //todo work with discount

    const cartPage = document.createElement('div');
    cartPage.classList.add('cart')

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cartPage.append(cartItems);

    for (let i = 0; i < data.getItemsLength(); i++) {
        const item = data.getCartItem(i);
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-items__item');
        cartItems.append(cartItem);

        const cartItemImg = document.createElement('img');
        cartItemImg.classList.add('cart-items__item-img');
        cartItemImg.setAttribute('alt', "item");
        cartItemImg.setAttribute('src', `${item?.product.images[0]}`);
        cartItem.append(cartItemImg);

        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-items__item-info');
        cartItem.append(cartItemInfo);

        const cartItemName = document.createElement('div');
        cartItemName.classList.add('cart-items__item-name');
        cartItemInfo.append(cartItemName);
        cartItemName.innerText = `${item?.product.name}`;

        const cartItemAmount = document.createElement('div');
        cartItemAmount.classList.add('cart-items__item-amount');
        cartItemInfo.append(cartItemAmount);
        const cartItemAmountInput = document.createElement('input') as HTMLInputElement;
        cartItemAmountInput.classList.add('cart-items__item-amount-input');
        cartItemAmountInput.setAttribute('type', 'number');
        cartItemAmountInput.setAttribute('min', '1');
        cartItemAmountInput.setAttribute('max', String(item?.product.quantity));
        cartItemAmountInput.setAttribute('value', String(item?.getQuantity()));

        let oldValue = cartItemAmountInput.value;
        console.log(`cartItemAmountInput.value = ${cartItemAmountInput.value}, oldValue = ${oldValue}`)
        cartItemAmount.innerHTML = 'Количество штук: ';
        cartItemAmount.append(cartItemAmountInput);
        cartItemAmountInput.addEventListener('input', () => {
            if (cartItemAmountInput.value > oldValue) {
                if (item) {
                    data.addProduct(item.product);
                }
                oldValue = cartItemAmountInput.value;
            } else {
                data.decrementProduct(i);
                oldValue = cartItemAmountInput.value;
            }
            setResultFields(data);
        });

        const cartItemSum = document.createElement('div');
        cartItemSum.classList.add('cart-items__item-sum');
        cartItemInfo.append(cartItemSum);
        cartItemSum.innerText = `${item?.product.price} грн`

        const cartItemTrash = document.createElement('div');
        cartItemTrash.classList.add('cart-items__trash');
        cartItem.append(cartItemTrash);
        cartItemTrash.onclick = function (): void {
            data.removeProduct(i);
            cartPage.remove();
            document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(data));
            setResultFields(data);
        }
    }

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
    summaryPay.textContent = 'Оплата';

    setResultFields(data);
    return cartPage;
}