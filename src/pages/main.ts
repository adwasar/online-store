import {Product} from "../types/product";
import {renderProductPage} from "./product";


const clickOnProductCard = (product: Product) => {
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
    document.querySelector('main')?.querySelector('.wrapper')?.querySelector('.product__container')?.remove();
    document.querySelector('.products__items')?.remove();
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(product));
    window.history.pushState({},'',`/product/${product.id}`);
}

export function renderMainPage(products: Product[]): HTMLElement {
    const mainPage = document.createElement('div');
    for (let i = 0; i < products.length; i++) {
        const productCard = document.createElement('div');
        productCard.classList.add('products__item');
        productCard.onclick = () => {clickOnProductCard(products[i])};
        productCard.innerHTML += `
              <div class="products__item-wrapper">
                <div class="products__item-text">
                  <div class="products__item-title">${products[i].name}</div>
                  <img src=${products[i].images[0]} class="products__item-img"></img>
                  <div class="products__item-info">
                    <p><b>Категория:</b> ${products[i].category}</p>
                    <p><b>Производитель:</b> ${products[i].brand}</p>
                    <p><b>Цена:</b> ${products[i].price} грн</p>
                    <p><b>В наличии:</b> 8шт</p>
                  </div>
                </div>
                <div class="products__item-buttons">
                  <div class="products__buttons-in-cart">В корзину</div>
                  <div class="products__buttons-details">Подробнее</div>
                </div>
              </div>
        `;
        mainPage.appendChild(productCard);
    }
    return mainPage;
}
