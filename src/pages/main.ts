import {Product} from "../types/product";

const productsAria = document.querySelector('.products__items') as HTMLElement;

export function renderMainPage(products: Product[]): void {
    for (let i = 0; i < products.length; i++) {
        productsAria.innerHTML += `
            <div class="products__item">
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
            </div>
        `
    }
}
