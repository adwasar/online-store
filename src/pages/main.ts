import {Product} from "../types/product";
import {renderProductPage} from "./product";
import {CartProducts} from "../types/cartProducts";
import {setResultFields} from "./cart";


const clickOnDetailsButton = (product: Product, cartItems: CartProducts) => {
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
    document.querySelector('main')?.querySelector('.wrapper')?.querySelector('.product__container')?.remove();
    document.querySelector('.products__items')?.remove();
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(product, cartItems));
    window.history.pushState({}, '', `/product/${product.id}`);
}

export const clickOnAddToCardButton = (product: Product, cartItems: CartProducts, button: HTMLElement) => {
    if (cartItems.isInCart(product)) {
        cartItems.removeProductById(product);
        button.innerHTML = 'В корзину';
        button.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    } else {
        cartItems.addProduct(product);
        button.innerHTML = 'Удалить';
        button.style.backgroundColor = 'red';
    }
    setResultFields(cartItems);
    //todo add control on stock limit products
}

export function renderMainPage(products: Product[], cartItems: CartProducts): HTMLElement {
    const mainPage = document.createElement('div');
    for (let i = 0; i < products.length; i++) {
        const productCard = document.createElement('div');
        productCard.classList.add('products__item');
        productCard.innerHTML += `
              <div class="products__item-wrapper">
                <div class="products__item-text">
                  <div class="products__item-title">${products[i].name}</div>
                  <img src=${products[i].images[0]} class="products__item-img" alt=${products[i].name}>
                  <div class="products__item-info">
                    <p><b>Категория:</b> ${products[i].category}</p>
                    <p><b>Производитель:</b> ${products[i].brand}</p>
                    <p><b>В наличии:</b> ${products[i].quantity} шт.</p>
                    <h2><p><b>Цена:</b> ${products[i].price} грн.</p></h2>
                  </div>
                </div>
                <div class="products__item-buttons">
                </div>
              </div>
        `;
        const toCartButton = document.createElement('div');
        toCartButton.classList.add('products__buttons-in-cart');
        if (cartItems.isInCart(products[i])) {
            toCartButton.innerHTML = 'Удалить';
            toCartButton.style.backgroundColor = 'red';
        } else {
            toCartButton.innerHTML = 'В корзину';
            toCartButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        }

        const detailsButton = document.createElement('div');
        detailsButton.classList.add('products__buttons-details');
        detailsButton.innerHTML = 'Подробнее';

        productCard.querySelector('.products__item-buttons')?.appendChild(toCartButton);
        productCard.querySelector('.products__item-buttons')?.appendChild(detailsButton);

        detailsButton.onclick = () => clickOnDetailsButton(products[i], cartItems);
        toCartButton.onclick = () => clickOnAddToCardButton(products[i], cartItems, toCartButton);
        mainPage.appendChild(productCard);
    }
    return mainPage;
}
