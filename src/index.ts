import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
// import {renderProductPage} from "./pages/product";
// import {SearchQuery} from "./types/searchQuery";


// const onSearchParameterChanged = () => {
//
// }
//const search = window.location.search;
console.log(window.location.href);
// const searchObject = new SearchQuery(search);

const productsPage = renderMainPage(detailsData);
productsPage.classList.add('products__items');
document.querySelector('.products')?.appendChild(productsPage);
// switch (search.length) {
//     case 0:
//         break;
//     default:
//         if (!isNaN(Number(searchObject['product']))) {
//             (document.querySelector('.app-store-page') as HTMLElement).style.display = 'none';
//             document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(detailsData[Number(searchObject['product']) - 1]));
//         } else {
//             document.body.innerHTML = `<h1>404</h1>`;
//         }
//         break;
// }

// import { CartItem } from './types/cartItem';
// import { renderCartPage } from './pages/cart';
import { renderErrorPage } from './pages/errorPage';

const appStorePage = document.querySelector('.app-store-page') as HTMLElement;
appStorePage.style.display = 'none';

// const cartItems = [new CartItem(detailsData[0]), new CartItem(detailsData[1]), new CartItem(detailsData[3]), new CartItem(detailsData[5]), new CartItem(detailsData[7]), new CartItem(detailsData[12])];

// document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage(cartItems));

    document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderErrorPage());
    const errorPage = document.querySelector('error-page') as HTMLElement;
    errorPage.style.display = 'none';