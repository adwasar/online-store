import {CartProducts} from "../types/cartProducts";
import {getNum} from "../features/help-functions";
import { renderModalWindowPage } from "./modalWindow";

export const setResultFields = (data: CartProducts) => {
    const headerCart = document.querySelector('.header__cart-total') as HTMLElement;
    const summaryAmount = document.querySelector('.summary__amount') as HTMLElement;
    const summaryTotal = document.querySelector('.summary__total') as HTMLElement;
    const cartCounter = document.querySelector('#cart-counter') as HTMLImageElement;

    if (headerCart) {
        headerCart.innerText = `Корзина: ${getNum(data.getTotalPrice())} грн`;
        cartCounter.innerText = `${data.getTotalQuantity()}`
    }
    if (summaryAmount) {
        summaryAmount.innerHTML = `Товаров: ${data.getTotalQuantity()} шт.`;
    }
    if (summaryTotal) {
        if (!data.getPromocodes().length) {
            summaryTotal.innerHTML = `Всего: ${getNum(data.getTotalPrice())} грн.`;
        } else {
            summaryTotal.innerHTML = `Всего: <del>${getNum(data.getTotalPrice())} грн. </del> <br>
              Скидка:${getNum(data.getTotalPrice() * data.getDiscount() / 100)} грн. <br>
              Итого к оплате:${getNum(data.getTotalPrice() - data.getTotalPrice() * data.getDiscount() / 100)} грн.`;
        }
    }
}

function renderCartProducts(pagePagination: HTMLInputElement, limitPagination: HTMLInputElement, data: CartProducts, cartItems: HTMLDivElement, cartPage: HTMLDivElement, start: number, end: number) {
    if (!data.getItemsLength()) return document.createElement('div');
    for (let i = start;i < end; i++) {
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
        cartItemInfo.style.fontSize = '1.4rem';
        cartItem.append(cartItemInfo);

        const cartItemName = document.createElement('div');
        cartItemName.classList.add('cart-items__item-name');
        cartItemName.style.fontSize = '1.6rem';
        cartItemInfo.append(cartItemName);
        cartItemName.innerText = `${i+1}. ${item?.product.name}`;

        const cartItemCategory = document.createElement('p');
        cartItemCategory.innerHTML = `<b>Категория:</b> ${item?.product.category}`;
        cartItemInfo.append(cartItemCategory);

        const cartItemBrand = document.createElement('p');
        cartItemBrand.innerHTML = `<b>Производитель:</b> ${item?.product.brand}`;
        cartItemInfo.append(cartItemBrand);

        const cartItemQuantity = document.createElement('p');
        cartItemQuantity.innerHTML = `<b>В наличии:</b> ${item?.product.quantity} шт`;
        cartItemInfo.append(cartItemQuantity);

        const cartItemAmount = document.createElement('div');
        cartItemAmount.classList.add('cart-items__item-amount');
        cartItemInfo.append(cartItemAmount);
        const cartItemAmountInput = document.createElement('input') as HTMLInputElement;
        cartItemAmountInput.classList.add('cart-items__item-amount-input');
        cartItemAmountInput.setAttribute('type', 'number');
        cartItemAmountInput.setAttribute('min', '0');
        cartItemAmountInput.onkeydown = () => false;
        cartItemAmountInput.setAttribute('max', String(item?.product.quantity));
        cartItemAmountInput.setAttribute('value', String(item?.getQuantity()));

        let oldValue = Number(cartItemAmountInput.value);
        cartItemAmount.innerHTML = 'Количество штук: ';
        cartItemAmount.append(cartItemAmountInput);
        cartItemAmountInput.addEventListener('input', () => {
            if (Number(cartItemAmountInput.value) > oldValue) {
                if (item) {
                    data.addProduct(item.product);
                }
                oldValue = Number(cartItemAmountInput.value);
            } else {
                if (Number(cartItemAmountInput.value) === 0) {
                    data.removeProduct(i);
                    cartPage.remove();
                    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(data));
                    setResultFields(data);
                }else {
                    data.decrementProduct(i);
                    oldValue = Number(cartItemAmountInput.value);
                }
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
}

export function renderCartPage(data: CartProducts): HTMLElement {
    const cartPage = document.createElement('div');
    cartPage.classList.add('cart');

    if(data.getItemsLength() === 0) {
        cartPage.innerHTML = 'Корзина пуста. Добавьте товары для отображения.';
        cartPage.style.fontSize = '6rem';
        cartPage.style.textAlign = 'center';
        return cartPage;
    }

    let limitQuery = localStorage.getItem('limit') || String(data.getItemsLength());
    let pageQuery = localStorage.getItem('page') || '1';

    const searchString = window.location.search;
    if (searchString) {
        let page = NaN;
        let limit = NaN;
        searchString.substring(1).split('&').forEach((el) => {
            switch (el.split('=')[0].toUpperCase()) {
                case 'LIMIT':
                    limit = Number(el.split('=')[1]);
                    break;
                case 'PAGE':
                    page = Number(el.split('=')[1]);
                    break;
            }
        });
        if (page && limit && limit <= data.getItemsLength() && page <= Math.ceil(data.getItemsLength() / limit)) {
            pageQuery = String(page);
            limitQuery = String(limit);
        }
    }

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    const paginationControl = document.createElement('div');
    paginationControl.style.fontSize = '3rem';
    const limitPagination = document.createElement('input') as HTMLInputElement;
    limitPagination.setAttribute('type', 'number');
    limitPagination.setAttribute('min', '1');
    limitPagination.onkeydown = () => false;
    limitPagination.setAttribute('max', String(data.getItemsLength()));
    limitPagination.setAttribute('value', limitQuery);
    limitPagination.style.fontSize = '3rem';
    limitPagination.style.width = '100px';
    limitPagination.oninput = () => {
        pagePagination.setAttribute('max', String(Math.ceil(data.getItemsLength() / Number(limitPagination.value))));
        pagePagination.setAttribute('value', '1');
        cartItems.innerHTML = '';
        renderCartProducts(pagePagination, limitPagination, data, cartItems,
            cartPage, 0, Math.min(data.getItemsLength(), Number(limitPagination.value)));
        window.history.pushState({}, '', `/cart/?limit=${limitPagination.value}&page=${pagePagination.value}`);
        pagePagination.value = '1';
        localStorage.setItem('limit', limitPagination.value);
        localStorage.setItem('page', pagePagination.value);
    }

    const pagePagination = document.createElement('input') as HTMLInputElement;
    pagePagination.setAttribute('type', 'number');
    pagePagination.setAttribute('min', '1');
    pagePagination.onkeydown = () => false;
    pagePagination.style.width = '100px';
    pagePagination.setAttribute('max', '1');
    pagePagination.setAttribute('value', pageQuery);
    pagePagination.style.fontSize = '3rem';
    pagePagination.oninput = () => {
        const limit = Number(limitPagination.value);
        const page = Number(pagePagination.value);
        cartItems.innerHTML = '';
        renderCartProducts(pagePagination, limitPagination, data, cartItems,
            cartPage, limit * page - limit , Math.min(limit * page, data.getItemsLength()));
        window.history.pushState({}, '', `/cart/?limit=${limitPagination.value}&page=${pagePagination.value}`);
        localStorage.setItem('limit', limitPagination.value);
        localStorage.setItem('page', pagePagination.value);
    }
    localStorage.setItem('limit', limitPagination.value);
    localStorage.setItem('page', pagePagination.value);

    paginationControl.style.width = '100%';
    paginationControl.style.display = 'flex';
    paginationControl.style.justifyContent = 'space-between';
    paginationControl.style.alignItems = 'center';
    paginationControl.append(`Лимит на странице: `);
    paginationControl.appendChild(limitPagination);
    paginationControl.append(`Страница: `);
    paginationControl.appendChild(pagePagination);

    cartPage.append(paginationControl);

    const limit = Number(limitPagination.value);
    const page = Number(pagePagination.value);
    renderCartProducts(pagePagination, limitPagination, data, cartItems,
        cartPage, limit * page - limit , Math.min(limit * page, data.getItemsLength()));
    window.history.pushState({}, '', `/cart/?limit=${limitPagination.value}&page=${pagePagination.value}`);
    pagePagination.setAttribute('max', String(Math.ceil(data.getItemsLength() / Number(limitPagination.value))));

    const summaryWrapper = document.createElement('div');
    summaryWrapper.classList.add('summary-wrapper');
    const wrapper = document.createElement('div');
    wrapper.classList.add('cart__wrap');
    wrapper.append(cartItems);
    wrapper.append(summaryWrapper);
    cartPage.append(wrapper);

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