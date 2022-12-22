import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
import {renderProductPage} from './pages/product';
import logo from './assets/img/logo.png';
import cart from './assets/img/cart.png';
import {renderCartPage} from "./pages/cart";

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
    window.history.pushState({},'',`/`);
}
const cartElement = document.querySelector('#cart') as HTMLImageElement;
cartElement.src = cart;
cartElement.onclick = () => {
    hideAllElements();
    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage());
    window.history.pushState({},'',`/cart/`);
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
                const productMatch = pathString.match(/\/product\/(\d*)/i) || [0,1];
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