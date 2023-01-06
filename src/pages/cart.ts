import {CartProducts} from "../types/cartProducts";
import {getNum} from "../features/help-functions";
import { renderModalWindowPage } from "./modalWindow";

export const setResultFields = (data: CartProducts) => {
    const headerCart = document.querySelector('.header__cart-total') as HTMLElement;
    const summaryAmount = document.querySelector('.summary__amount') as HTMLElement;
    const summaryTotal = document.querySelector('.summary__total') as HTMLElement;

    if (headerCart) {
        headerCart.innerText = `Корзина: ${getNum(data.getTotalPrice())} грн. Количество товаров: ${data.getTotalQuantity()}`;
    }
    if (summaryAmount) {
        summaryAmount.innerHTML = `Товаров: ${data.getTotalQuantity()} шт.`;
    }
    if (summaryTotal) {
        if (!data.getPromocodes().length) {
            summaryTotal.innerHTML = `Всего: ${getNum(data.getTotalPrice())} грн.`;
        } else {
            summaryTotal.innerHTML = `Всего: <strike>${getNum(data.getTotalPrice())} грн. </strike> <br>
              Скидка:${getNum(data.getTotalPrice() * data.getDiscount() / 100)} грн. <br>
              Итого к оплате:${getNum(data.getTotalPrice() - data.getTotalPrice() * data.getDiscount() / 100)} грн.`;
        }
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
        cartItemAmountInput.onkeydown = () => false;
        cartItemAmountInput.setAttribute('max', String(item?.product.quantity));
        cartItemAmountInput.setAttribute('value', String(item?.getQuantity()));

        let oldValue = Number(cartItemAmountInput.value);
        console.log(`cartItemAmountInput.value = ${cartItemAmountInput.value}, oldValue = ${oldValue}`)
        cartItemAmount.innerHTML = 'Количество штук: ';
        cartItemAmount.append(cartItemAmountInput);
        cartItemAmountInput.addEventListener('input', () => {
            if (Number(cartItemAmountInput.value) > oldValue) {
                if (item) {
                    data.addProduct(item.product);
                }
                oldValue = Number(cartItemAmountInput.value);
            } else {
                data.decrementProduct(i);
                oldValue = Number(cartItemAmountInput.value);
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
    summaryAmount.textContent = `Товаров: 0 шт`

    const summaryDiscount = document.createElement('div');
    summaryDiscount.classList.add('summary__discount');
    summaryInfo.append(summaryDiscount);
    //summaryDiscount.textContent = 'Скидка: 0 грн'

    const summaryPromo = document.createElement('div');
    summaryPromo.classList.add('summary__promo');
    summaryInfo.append(summaryPromo);

    const summaryPromoInput = document.createElement('input');
    summaryPromoInput.classList.add('summary__promo-input');
    summaryPromo.append(summaryPromoInput);
    const summaryPromoAddField = document.createElement('div');
    summaryPromoAddField.innerHTML += 'Промокоды для тестов: RS10, RS20, SUPER';
    const summaryAdd10 = document.createElement('div');
    summaryAdd10.classList.add('discount__add10');
    summaryAdd10.innerHTML += 'Скидка 10%';
    const buttonAdd10 = document.createElement('button');
    buttonAdd10.innerText = 'Добавить';
    buttonAdd10.classList.add('summary__discount-add');
    summaryAdd10.append(buttonAdd10);
    buttonAdd10.onclick = () => {
        data.addPromoCode('RS10');
        summaryDel10.style.display = 'block';
        summaryPromoInput.value = '';
        summaryAdd10.style.display = 'none';
        setResultFields(data);
    }
    const summaryAdd20 = document.createElement('div');
    summaryAdd20.innerHTML += 'Скидка 20%';
    summaryAdd20.classList.add('discount__add20');
    const buttonAdd20 = document.createElement('button');
    buttonAdd20.innerText = 'Добавить';
    buttonAdd20.classList.add('summary__discount-add');
    summaryAdd20.append(buttonAdd20);
    buttonAdd20.onclick = () => {
        data.addPromoCode('RS20');
        summaryDel20.style.display = 'block';
        summaryPromoInput.value = '';
        summaryAdd20.style.display = 'none';
        setResultFields(data);
    }
    const summaryAdd30 = document.createElement('div');
    summaryAdd30.innerHTML += 'Скидка 30%';
    summaryAdd30.classList.add('discount__add30');
    const buttonAdd30 = document.createElement('button');
    buttonAdd30.innerText = 'Добавить';
    buttonAdd30.classList.add('summary__discount-add');
    summaryAdd30.append(buttonAdd30);
    buttonAdd30.onclick = () => {
        data.addPromoCode('SUPER');
        summaryDel30.style.display = 'block';
        summaryPromoInput.value = '';
        summaryAdd30.style.display = 'none';
        setResultFields(data);
    }
    const summaryDel10 = document.createElement('div');
    summaryDel10.classList.add('discount__del10');
    summaryDel10.innerHTML += 'Скидка 10%';
    const buttonDel10 = document.createElement('button');
    buttonDel10.innerText = 'Удалить';
    buttonDel10.classList.add('summary__discount-del');
    summaryDel10.append(buttonDel10);
    buttonDel10.onclick = () => {
        data.removePromoCode('RS10');
        summaryDel10.style.display = 'none';
        setResultFields(data);
    }
    const summaryDel20 = document.createElement('div');
    summaryDel20.innerHTML += 'Скидка 20%';
    summaryDel20.classList.add('discount__del20');
    const buttonDel20 = document.createElement('button');
    buttonDel20.innerText = 'Удалить';
    buttonDel20.classList.add('summary__discount-del');
    summaryDel20.append(buttonDel20);
    buttonDel20.onclick = () => {
        data.removePromoCode('RS20');
        summaryDel20.style.display = 'none';
        setResultFields(data);
    }
    const summaryDel30 = document.createElement('div');
    summaryDel30.innerHTML += 'Скидка 30%';
    summaryDel30.classList.add('discount__del30');
    const buttonDel30 = document.createElement('button');
    buttonDel30.innerText = 'Удалить';
    buttonDel30.classList.add('summary__discount-del');
    summaryDel30.append(buttonDel30);
    buttonDel30.onclick = () => {
        data.removePromoCode('SUPER');
        summaryDel30.style.display = 'none';
        setResultFields(data);
    }
    summaryAdd10.style.display = 'none';
    summaryAdd20.style.display = 'none';
    summaryAdd30.style.display = 'none';
    summaryPromoAddField.append(summaryAdd10);
    summaryPromoAddField.append(summaryAdd20);
    summaryPromoAddField.append(summaryAdd30);
    summaryPromoAddField.append(summaryDel10);
    summaryPromoAddField.append(summaryDel20);
    summaryPromoAddField.append(summaryDel30);
    summaryInfo.append(summaryPromoAddField);
    summaryPromoInput.setAttribute('placeholder', 'ввести промокод');
    summaryPromoInput.oninput = () => {
        summaryAdd10.style.display = 'none';
        summaryAdd20.style.display = 'none';
        summaryAdd30.style.display = 'none';
        summaryDel10.style.display = 'none';
        summaryDel20.style.display = 'none';
        summaryDel30.style.display = 'none';
        data.getPromocodes().forEach((el) => {
            switch (el.toUpperCase()) {
                case 'RS10':
                    summaryDel10.style.display = 'block';
                    break;
                case 'RS20':
                    summaryDel20.style.display = 'block';
                    break;
                case 'SUPER':
                    summaryDel30.style.display = 'block';
            }
        })
        switch (summaryPromoInput.value.toUpperCase()) {
            case 'RS10':
                summaryAdd10.style.display = 'block';
                break;
            case 'RS20':
                summaryAdd20.style.display = 'block';
                break;
            case 'SUPER':
                summaryAdd30.style.display = 'block';
                break;
        }
    }
    summaryDel10.style.display = 'none';
    summaryDel20.style.display = 'none';
    summaryDel30.style.display = 'none';
    data.getPromocodes().forEach((el) => {
        switch (el.toUpperCase()) {
            case 'RS10':
                summaryDel10.style.display = 'block';
                break;
            case 'RS20':
                summaryDel20.style.display = 'block';
                break;
            case 'SUPER':
                summaryDel30.style.display = 'block';
        }
    })

    const summaryTotal = document.createElement('div');
    summaryTotal.classList.add('summary__total');
    summaryInfo.append(summaryTotal);
    summaryTotal.textContent = 'Всего: 0 грн.';


    const summaryPay = document.createElement('button');
    summaryPay.classList.add('summary__pay');
    summaryWrapper.append(summaryPay);
    summaryPay.textContent = 'Оплата'
    summaryPay.addEventListener('click', () => {
        document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderModalWindowPage(data));
    })

    if (summaryAmount) {
        summaryAmount.innerHTML = `Товаров: ${data.getTotalQuantity()} шт.`;
    }
    if (summaryTotal) {
        summaryTotal.innerHTML = `Всего: ${getNum(data.getTotalPrice())} грн.`;
    }
    return cartPage;
}