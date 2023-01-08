import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
import {renderProductPage} from './pages/product';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.png';
import favicon from './assets/img/icons/favicon.png';
import {renderCartPage, setResultFields} from "./pages/cart";
import {renderErrorPage} from './pages/errorPage';
import {SearchQuery} from "./types/searchQuery";
import {CartProducts} from "./types/cartProducts";
//todo add handle browser buttons
//todo add little/big button
let link: HTMLLinkElement = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = favicon;

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
const gumexFilter = document.querySelector('#gumex') as HTMLInputElement;
const sortInput = document.querySelector('.products__sort-bar') as HTMLSelectElement;
const filterName = document.querySelector('.products__search-bar') as HTMLInputElement;
const resetButton = document.querySelector('.filters__reset-filters') as HTMLElement;
const copyButton = document.querySelector('.filters__copy-link') as HTMLElement;
const filterQuantity = document.querySelector('.products__stat') as HTMLElement;
const bigButton = document.querySelector('.products__big') as HTMLElement;
const smallButton = document.querySelector('.products__small') as HTMLElement;
const logoElement = document.querySelector('#logo') as HTMLImageElement;
const cartElement = document.querySelector('#cart') as HTMLImageElement;

const cartLocalStorage = localStorage.getItem('cart');
const localStorageObject = cartLocalStorage ? JSON.parse(cartLocalStorage) : {};
const cartItems = new CartProducts();
if (cartLocalStorage) {
    cartItems.fromJSON(localStorageObject, detailsData);
}
console.log(cartItems);
console.log(localStorageObject);


export const onLogoClicked = () => {
    hideAllElements();
    (document.querySelector('.app-store-page') as HTMLElement).style.display = 'flex';
    const productsPage = renderMainPage(detailsData, cartItems);
    productsPage.classList.add('products__items');
    document.querySelector('.products')?.appendChild(productsPage);
    window.history.pushState({}, '', `/`);
}

export const onCartClicked = () => {
    hideAllElements();
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(cartItems));
    setResultFields(cartItems);
}

const onCopyButtonClicked = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        copyButton.innerText = 'Скопировано';
        copyButton.style.color = 'darkgreen';
        setTimeout(() => {
            copyButton.innerText = 'Копировать';
            copyButton.style.color = 'black';
        }, 500);
    });
}

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
gumexFilter.onchange = onFiltersValueChanged;
sortInput.onchange = onFiltersValueChanged;
filterName.oninput = onFiltersValueChanged;
resetButton.onclick = onLogoClicked;
copyButton.onclick = onCopyButtonClicked;
smallButton.onclick = onFiltersValueChanged;
bigButton.onclick = onFiltersValueChanged;

logoElement.src = logo;
logoElement.onclick = onLogoClicked;

cartElement.src = cart;
cartElement.onclick = onCartClicked;

function onFiltersValueChanged(event: Event) {
    const eventTarget = (event.target as HTMLInputElement);

    switch (eventTarget?.id) {
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
        vanssiFilter.checked || autoFilter.checked || gumexFilter.checked;
    const isCategoryChecked = bendiksFilter.checked || releFilter.checked ||
        starterFilter.checked || generatorFilter.checked;
    const isPriceChanged = (minPriceInput.value !== minPriceInput.min) ||
        (maxPriceInput.value !== maxPriceInput.max);
    const isStockChanged = (minStockInput.value !== minStockInput.min) ||
        (maxStockInput.value !== maxStockInput.max);
    const isNameFiltered = filterName.value !== '';
    const isSortingPicked = sortInput.selectedOptions.item(0)?.value !== String(-1);
    const isBigClicked = eventTarget ? eventTarget.classList.contains('products__big') : false;
    const isSmallClicked = eventTarget ? eventTarget.classList.contains('products__small') : false;

    let filteredDetails = detailsData.map((el) => el);
    let searchString = '/';

    if (isBrandChecked || isCategoryChecked || isPriceChanged ||
        isStockChanged || isSortingPicked || isNameFiltered || isSmallClicked || isBigClicked) {

        searchString += '?';

        //filter by brand
        if (isBrandChecked) {
            filteredDetails = filteredDetails.filter((detail) =>
                ((lsaFilter.checked && detail.brand === 'LSA') ||
                    (autoFilter.checked && detail.brand === 'Авто-Электрика') ||
                    (vtnFilter.checked && detail.brand === 'ВТН') ||
                    (vanssiFilter.checked && detail.brand === 'Vanssi') ||
                    (gumexFilter.checked && detail.brand === 'Gumex'))
            );
            const brandFilters: string[] = [];
            lsaFilter.checked ? brandFilters.push('lsa') : '';
            vtnFilter.checked ? brandFilters.push('vtn') : '';
            autoFilter.checked ? brandFilters.push('auto') : '';
            vanssiFilter.checked ? brandFilters.push('vanssi') : '';
            gumexFilter.checked ? brandFilters.push('gumex') : '';
            searchString += 'brand=' + brandFilters.join('|');
        }

        //finish filter by brand

        // filter by category
        if (isCategoryChecked) {
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
            searchString += (searchString.length === 2 ? '' : '&') + 'category=' + categoryFilters.join('|');
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

                    el.quantity <= Number(maxStockInput.value)
                )
            )
            searchString += (searchString.length === 2 ? '' : '&')
                + `stock=${minStockInput.value}|${maxStockInput.value}`;
        }

        if (isBigClicked) {
            if (!bigButton.classList.contains('active')) {
                bigButton.classList.add('active');
            }
            smallButton.classList.remove('active');
            searchString += (searchString.length === 2 ? '' : '&')
                + `size=big`;
        } else {
            if (isSmallClicked) {
                if (!smallButton.classList.contains('active')) {
                    smallButton.classList.add('active');
                }
                bigButton.classList.remove('active');
                searchString += (searchString.length === 2 ? '' : '&')
                    + `size=small`;
            } else {
                if (!bigButton.classList.contains('active')) {
                    searchString += (searchString.length === 2 ? '' : '&')
                        + `size=small`;
                } else {
                    searchString += (searchString.length === 2 ? '' : '&')
                        + `size=big`;
                }
            }
        }

    }

    //filter by name
    if (isNameFiltered) {
        const searchValue = filterName.value.toUpperCase();
        filteredDetails = filteredDetails.filter((el) => {
            const {name, quantity, price, brand, category, description} = el;
            return name.toUpperCase().includes(searchValue) ||
                String(quantity).toUpperCase().includes(searchValue) ||
                String(price).toUpperCase().includes(searchValue) ||
                category.toUpperCase().includes(searchValue) ||
                brand.toUpperCase().includes(searchValue) ||
                description.toUpperCase().includes(searchValue);
        });
        searchString += (searchString.length === 2 ? '' : '&')
            + `search=${filterName.value}`;
    }
    //finish filter by name

    if (isSortingPicked) {
        switch (Number(sortInput.selectedOptions.item(0)?.value)) {
            case 0:
                filteredDetails = filteredDetails.sort((el1, el2) => el1.price - el2.price);
                searchString += (searchString.length === 2 ? '' : '&')
                    + `sort=PRICE-ASC`;
                break;
            case 1:
                filteredDetails = filteredDetails.sort((el1, el2) => el2.price - el1.price);
                searchString += (searchString.length === 2 ? '' : '&')
                    + `sort=PRICE-DESC`;
                break;
            case 2:
                filteredDetails = filteredDetails.sort((el1, el2) => el1.quantity - el2.quantity);
                searchString += (searchString.length === 2 ? '' : '&')
                    + `sort=STOCK-ASC`;
                break;
            case 3:
                filteredDetails = filteredDetails.sort((el1, el2) => el2.quantity - el1.quantity);
                searchString += (searchString.length === 2 ? '' : '&')
                    + `sort=STOCK-DESC`;
                break;
        }
    }

    document.querySelector('.products__items')?.remove();
    const productsPage = renderMainPage(filteredDetails, cartItems);
    productsPage.classList.add('products__items');
    document.querySelector('.products')?.appendChild(productsPage);
    window.history.pushState({}, '', searchString);
    filterQuantity.innerText = `Найдено: ${filteredDetails.length}.`;
    if (filteredDetails.length === 0) {
        productsPage.innerHTML = 'ПРОДУКТОВ С ЗАДАННЫМИ ПАРАМЕТРОМИ НЕ НАЙДЕНО. ПОВТОРИТЕ ПОИСК.'
    }
    if (smallButton.classList.contains('active')) {
        document.querySelectorAll('.products__item').forEach((item) => {
            (item as HTMLElement).style.width = '200px';
        })
        document.querySelectorAll('.products__item .products__item-wrapper .products__item-text .products__item-info').forEach((item) => {
            (item as HTMLElement).style.height = '12rem';
        })
    } else {
        document.querySelectorAll('.products__item').forEach((item) => {
            (item as HTMLElement).style.width = '291px';
        })
    }
}

function initializeAllInputs() {
    filterQuantity.innerText = `Найдено: 67.`;
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
    gumexFilter.checked = false;

    bendiksFilter.checked = false;
    releFilter.checked = false;
    starterFilter.checked = false;
    generatorFilter.checked = false;

    sortInput.selectedIndex = 0;
    filterName.value = '';
    if (!bigButton.classList.contains('active')) {
        bigButton.classList.add('active');
    }
    smallButton.classList.remove('active');
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

const searchString = window.location.search;
const pathString = window.location.pathname;

console.log(`pathString  = ${pathString}, searchString = ${searchString}`);

if (!searchString && pathString === '/') {
    const productsPage = renderMainPage(detailsData, cartItems);
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
                    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(detailsData[productId - 1], cartItems));
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
    if (searchString && pathString === '/') {
        const {price, name, quantity, sorting, categories, brands, pageSize} = new SearchQuery(searchString);
        if (name) {
            filterName.value = name;
        }
        if (price[0] && price[0] >= Number(minPriceInput.min)) {
            minPriceInput.value = String(price[0]);
        }
        if (price[1] && price[1] <= Number(maxPriceInput.max) && price[1] > Number(minPriceInput.value)) {
            maxPriceInput.value = String(price[1]);
        }
        if (quantity[0] && quantity[0] >= Number(minStockInput.min)) {
            minStockInput.value = String(quantity[0]);
        }
        if (quantity[1] && quantity[1] <= Number(maxStockInput.max) && quantity[1] > Number(minStockInput.value)) {
            maxStockInput.value = String(quantity[1]);
        }
        if (sorting) {
            switch (sorting.toUpperCase()) {
                case 'PRICE-ASC':
                    sortInput.selectedIndex = 1;
                    break;
                case 'PRICE-DESC':
                    sortInput.selectedIndex = 2;
                    break;
                case 'STOCK-ASC':
                    sortInput.selectedIndex = 3;
                    break;
                case 'STOCK-DESC':
                    sortInput.selectedIndex = 4;
                    break;
            }
        }
        if (categories.length) {
            for (let i = 0; i < categories.length; i++) {
                switch (categories[i].toLowerCase()) {
                    case 'bendiks':
                        bendiksFilter.checked = true;
                        break;
                    case 'rele':
                        releFilter.checked = true;
                        break;
                    case 'starter':
                        starterFilter.checked = true;
                        break;
                    case 'generator':
                        generatorFilter.checked = true;
                        break;
                }
            }
        }
        if (brands.length) {
            for (let i = 0; i < brands.length; i++) {
                switch (brands[i].toLowerCase()) {
                    case 'lsa':
                        lsaFilter.checked = true;
                        break;
                    case 'vtn':
                        vtnFilter.checked = true;
                        break;
                    case 'auto':
                        autoFilter.checked = true;
                        break;
                    case 'vanssi':
                        vanssiFilter.checked = true;
                        break;
                    case 'gumex':
                        gumexFilter.checked = true;
                        break;
                }
            }
        }

        if (pageSize) {
            if (pageSize.toUpperCase() === 'BIG') {
                if (!bigButton.classList.contains('active')) {
                    bigButton.classList.add('active');
                }
                smallButton.classList.remove('active');
            } else {
                if (pageSize.toUpperCase() === 'SMALL') {
                    if (!smallButton.classList.contains('active')) {
                        smallButton.classList.add('active');
                    }
                    bigButton.classList.remove('active');
                }
            }
        }
        onFiltersValueChanged(new Event(''));
    }
}

setResultFields(cartItems);

window.onpopstate = function() {
    window.location.reload();
}