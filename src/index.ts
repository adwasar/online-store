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