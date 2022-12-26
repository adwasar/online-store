import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
import {renderProductPage} from './pages/product';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.png';
import {renderCartPage} from "./pages/cart";
import { renderErrorPage } from './pages/errorPage';
import {CartItem} from "./types/cartItem";

const minPriceInput = document.querySelector('#from-slider-price') as HTMLInputElement;
const maxPriceInput = document.querySelector('#to-slider-price') as HTMLInputElement;
const minPriceDiv = document.querySelector('.filters__price-min-value') as HTMLElement;
const maxPriceDiv = document.querySelector('.filters__price-max-value') as HTMLElement;
const minStockInput = document.querySelector('#from-slider-stock') as HTMLInputElement;
const maxStockInput = document.querySelector('#to-slider-stock') as HTMLInputElement;
const minStockDiv = document.querySelector('.filters__stock-min-value') as HTMLElement;
const maxStockDiv = document.querySelector('.filters__stock-max-value') as HTMLElement;
const releFilter = document.querySelector('#rele') as HTMLInputElement;
const starterFilter = document.querySelector('#starter') as HTMLInputElement;
const generatorFilter = document.querySelector('#generator') as HTMLInputElement;
const bendiksFilter = document.querySelector('#bendiks') as HTMLInputElement;
const lsaFilter = document.querySelector('#lsa') as HTMLInputElement;
const vtnFilter = document.querySelector('#vtn') as HTMLInputElement;
const vanssiFilter = document.querySelector('#vanssi') as HTMLInputElement;
const autoFilter = document.querySelector('#auto') as HTMLInputElement;
const sortInput = document.querySelector('.products__sort-bar') as HTMLSelectElement;
const filterTitle = document.querySelector('.products__search-bar') as HTMLInputElement;

const cartItems = [new CartItem(detailsData[0]), new CartItem(detailsData[1]), new CartItem(detailsData[3]), new CartItem(detailsData[5]), new CartItem(detailsData[7]), new CartItem(detailsData[12])];

minPriceInput.oninput = onFiltersValueChanged;
maxPriceInput.oninput = onFiltersValueChanged;
minStockInput.oninput = onFiltersValueChanged;
maxStockInput.oninput = onFiltersValueChanged;
releFilter.onchange = onFiltersValueChanged;
starterFilter.onchange = onFiltersValueChanged;
generatorFilter.onchange = onFiltersValueChanged;
bendiksFilter.onchange = onFiltersValueChanged;
lsaFilter.onchange = onFiltersValueChanged;
vtnFilter.onchange = onFiltersValueChanged;
vanssiFilter.onchange = onFiltersValueChanged;
autoFilter.onchange = onFiltersValueChanged;
sortInput.onchange = onFiltersValueChanged;
filterTitle.onchange = onFiltersValueChanged;

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
            if (Number(eventTarget.value) <= Number(minStockInput.value)) {
                eventTarget.value = String(Number(minStockInput.value) + 1);
                break;
            }
            maxStockDiv.innerHTML = eventTarget.value;
            break;
    }
    const isBrandChecked = lsaFilter.checked || vtnFilter.checked ||
        vanssiFilter.checked || autoFilter.checked;
    const isCategoryChecked = bendiksFilter.checked || releFilter.checked ||
        starterFilter.checked || generatorFilter.checked;
    const isPriceChanged = (minPriceInput.value !== minPriceInput.min) ||
        (maxPriceInput.value !== maxPriceInput.max);
    const isStockChanged = (minStockInput.value !== minStockInput.min) ||
        (maxStockInput.value !== maxStockInput.max);

    let filteredDetails = detailsData.map((el) => el);
    let searchString = '/';

    if (isBrandChecked || isCategoryChecked || isPriceChanged || isStockChanged ||
        sortInput.selectedOptions.item(0)?.value !== String(-1) || filterTitle.value !== '') {

        searchString += '?';

        //filter by brand
        if (isBrandChecked) {
            filteredDetails = filteredDetails.filter((detail) =>
                ((lsaFilter.checked && detail.brand === 'LSA') ||
                    (autoFilter.checked && detail.brand === 'Авто-Электрика') ||
                    (vtnFilter.checked && detail.brand === 'ВТН') ||
                    (vanssiFilter.checked && detail.brand === 'Vanssi'))
            );
            const brandFilters: string[] = [];
            lsaFilter.checked ? brandFilters.push('lsa') : '';
            vtnFilter.checked ? brandFilters.push('vtn') : '';
            autoFilter.checked ? brandFilters.push('auto') : '';
            vanssiFilter.checked ? brandFilters.push('vanssi') : '';
            searchString += 'brand=' + brandFilters.join('|');
        }

        //finish filter by brand

        // filter by category
        if(isCategoryChecked) {
            filteredDetails = filteredDetails.filter((detail) =>
                ((bendiksFilter.checked && detail.category === 'Бендикс') ||
                    (releFilter.checked && detail.category === 'Щетки генератора, регуляторы') ||
                    (starterFilter.checked && detail.category === 'Стартера') ||
                    (generatorFilter.checked && detail.category === 'Генераторы')
                )
            );
            const categoryFilters: string[] = [];
            bendiksFilter.checked ? categoryFilters.push('bendiks') : '';
            releFilter.checked ? categoryFilters.push('rele') : '';
            starterFilter.checked ? categoryFilters.push('starter') : '';
            generatorFilter.checked ? categoryFilters.push('generator') : '';
            searchString += 'category=' + categoryFilters.join('|');
        }
        // finish filter by category

        //filter by price
        if (isPriceChanged) {
            filteredDetails = filteredDetails.filter((el) => (
                    el.price >= Number(minPriceInput.value) &&
                    el.price <= Number(maxPriceInput.value)
                )
            )
            searchString += (searchString.length === 2 ? '' : '&')
                + `price=${minPriceInput.value}|${maxPriceInput.value}`;
        }
        //finish filter by price


        // filter by stock
        if (isStockChanged) {
            filteredDetails = filteredDetails.filter((el) => (
                    el.quantity >= Number(minStockInput.value) &&
                    el.quantity <= Number(minStockInput.value)
            )
        )
        searchString += (searchString.length === 2 ? '' : '&')
                + `stock=${minStockInput.value}|${maxStockInput.value}`;
        }
    }

    document.querySelector('.products__items')?.remove();
    const productsPage = renderMainPage(filteredDetails);
    productsPage.classList.add('products__items');
    document.querySelector('.products')?.appendChild(productsPage);
    window.history.pushState({}, '', searchString);
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

    lsaFilter.checked = false;
    vanssiFilter.checked = false;
    autoFilter.checked = false;
    vtnFilter.checked = false;

    bendiksFilter.checked = false;
    releFilter.checked = false;
    starterFilter.checked = false;
    generatorFilter.checked = false;
}

initializeAllInputs();

function hideAllElements() {
    initializeAllInputs();
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
    document.querySelector('.products__items')?.remove();
    document.querySelector('.cart')?.remove();
    document.querySelector('main')?.querySelector('.wrapper')?.querySelector('.product__container')?.remove();
    document.querySelector('.error-page')?.remove();
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
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(cartItems));
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
            document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(cartItems));
        } else {
            if (RegExp(/\/product\/\d*/i).test(pathString)) {
                const productMatch = pathString.match(/\/product\/(\d*)/i) || [0, 1];
                const productId = Number(productMatch[1]);
                console.log(`productId = ${productId}`);
                if (productId >= 1 && productId < detailsData.length + 1) {
                    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
                    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(detailsData[productId - 1]));
                } else {
                    hideAllElements();
                    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderErrorPage());
                }
            } else {
                hideAllElements();
                document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderErrorPage());
            }
        }
    }
}