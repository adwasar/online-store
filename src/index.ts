import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
import {renderProductPage} from './pages/product';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.png';
import {renderCartPage} from "./pages/cart";

const minPriceInput = document.querySelector('#from-slider-price') as HTMLInputElement;
const maxPriceInput = document.querySelector('#to-slider-price') as HTMLInputElement;
const minPriceDiv = document.querySelector('.filters__price-min-value') as HTMLElement;
const maxPriceDiv = document.querySelector('.filters__price-max-value') as HTMLElement;
const minStockInput = document.querySelector('#from-slider-stock') as HTMLInputElement;
const maxStockInput = document.querySelector('#to-slider-stock') as HTMLInputElement;
const minStockDiv = document.querySelector('.filters__stock-min-value') as HTMLElement;
const maxStockDiv = document.querySelector('.filters__stock-max-value') as HTMLElement;

minPriceInput.oninput = onFiltersValueChanged;
maxPriceInput.oninput = onFiltersValueChanged;
minStockInput.oninput = onFiltersValueChanged;
maxStockInput.oninput = onFiltersValueChanged;

function onFiltersValueChanged(event: Event) {
    const eventTarget = (event.target as HTMLInputElement);
    switch (eventTarget.id) {
        case 'from-slider-price':
            if (Number(eventTarget.value) >= Number(maxPriceInput.value)) {
                eventTarget.value = String(Number(maxPriceInput.value) - 1);
                break;
            }
            minPriceDiv.innerHTML = eventTarget.value;
            break;
        case 'to-slider-price':
            if (Number(eventTarget.value) <= Number(minPriceInput.value)) {
                eventTarget.value = String(Number(minPriceInput.value) + 1);
                break;
            }
            maxPriceDiv.innerHTML = eventTarget.value;
            break;
        case 'from-slider-stock':
            if (Number(eventTarget.value) >= Number(maxStockInput.value)) {
                eventTarget.value = String(Number(maxStockInput.value) - 1);
                break;
            }
            minStockDiv.innerHTML = eventTarget.value;
            break;
        case 'to-slider-stock':
            if (Number(eventTarget.value) <= Number( minStockInput.value)) {
                eventTarget.value = String(Number(minStockInput.value) + 1);
                break;
            }
            maxStockDiv.innerHTML = eventTarget.value;
            break;
    }
}

function initializeAllInputs() {
    const minPrice = detailsData.reduce((acc, el) => el.price < acc ? el.price : acc, Infinity);
    const maxPrice = detailsData.reduce((acc, el) => el.price > acc ? el.price : acc, -Infinity);
    const minStock = detailsData.reduce((acc, el) => el.quantity < acc ? el.quantity : acc, Infinity);
    const maxStock = detailsData.reduce((acc, el) => el.quantity > acc ? el.quantity : acc, -Infinity);
    minPriceDiv.innerHTML = String(minPrice);
    maxPriceDiv.innerHTML = String(maxPrice);
    minStockDiv.innerHTML = String(minStock);
    maxStockDiv.innerHTML = String(maxStock);
    minPriceInput.min = String(minPrice);
    maxPriceInput.min = String(minPrice);
    minStockInput.min = String(minStock);
    maxStockInput.min = String(minStock);

    minPriceInput.max = String(maxPrice);
    maxPriceInput.max = String(maxPrice);
    minStockInput.max = String(maxStock);
    maxStockInput.max = String(maxStock);

    minPriceInput.value = String(minPrice);
    maxPriceInput.value = String(maxPrice);
    minStockInput.value = String(minStock);
    maxStockInput.value = String(maxStock);
}

initializeAllInputs();

function hideAllElements() {
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
    document.querySelector('.products__items')?.remove();
    document.querySelector('.cart')?.remove();
    document.querySelector('main')?.querySelector('.wrapper')?.querySelector('.product__container')?.remove();
}

const logoElement = document.querySelector('#logo') as HTMLImageElement;
logoElement.src = logo;
logoElement.onclick = () => {
    hideAllElements();
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'flex';
    const productsPage = renderMainPage(detailsData);
    productsPage.classList.add('products__items');
    document.querySelector('.products')?.appendChild(productsPage);
    window.history.pushState({}, '', `/`);
}
const cartElement = document.querySelector('#cart') as HTMLImageElement;
cartElement.src = cart;
cartElement.onclick = () => {
    hideAllElements();
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage());
    window.history.pushState({}, '', `/cart/`);
}

const searchString = window.location.search;
const pathString = window.location.pathname;

console.log(`pathString  = ${pathString}, searchString = ${searchString}`);

if (!searchString && pathString === '/') {
    const productsPage = renderMainPage(detailsData);
    productsPage.classList.add('products__items');
    document.querySelector('.products')?.appendChild(productsPage);
} else {
    if (pathString !== '/') {
        if (RegExp(/\/cart\/?$/i).test(pathString)) {
            hideAllElements();
            document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage());
        } else {
            if (RegExp(/\/product\/\d*/i).test(pathString)) {
                const productMatch = pathString.match(/\/product\/(\d*)/i) || [0, 1];
                const productId = Number(productMatch[1]);
                console.log(`productId = ${productId}`);
                if (productId >= 1 && productId < detailsData.length + 1) {
                    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
                    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(detailsData[productId - 1]));
                } else {
                    document.body.innerHTML = '<h1>404</h1>';
                }
            } else {
                document.body.innerHTML = '<h1>404</h1>';
            }
        }
    }
}