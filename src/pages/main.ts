import {Product} from "../types/product";

export function renderMainPage(products: Product[]): HTMLElement {
    const mainPage = document.createElement('div');
    for (let i = 0; i < products.length; i++) {
        //create product card and add to mainPageDiv
        //use this code
        // const productCard = document.createElement('div');
        // productCard.dataset.index = String(products[i].id);
        // /////work with dom and css classes of product card
        // mainPage.appendChild(productCard);
    }
    return mainPage;
}