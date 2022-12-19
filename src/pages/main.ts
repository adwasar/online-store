import {Product} from "../types/product";

const productsArea = document.querySelector('.products__items') as HTMLElement;

export function renderMainPage(products: Product[]): void {
    for (let i = 0; i < products.length; i++) {
        // const productsItem = document.createElement('div');
        // productsItem.classList.add('products__item');
        productsArea.innerHTML += `
            <div class="products__item">
              <div class="products__item-wrapper">
                <div class="products__item-text">
                  <div class="products__item-title">Название</div>
                  <div class="products__item-img">img</div>
                  <div class="products__item-info">
                    <p>Категория: some cat</p>
                    <p>Производитель: some brand</p>
                    <p>Цена: €174</p>
                    <p>В наличии: 8шт</p>
                  </div>
                </div>
                <div class="products__item-buttons">
                  <div class="products__buttons-in-cart">В корзину</div>
                  <div class="products__buttons-details">Подробнее</div>
                </div>
              </div>
            </div>
        `
        //create product card and add to mainPageDiv
        //use this code
        // const productCard = document.createElement('div');
        // productCard.dataset.index = String(products[i].id);
        // /////work with dom and css classes of product card
        // mainPage.appendChild(productCard);
    }
}
