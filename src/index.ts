import './index.html';
import './scss/main.scss';
import {renderProductPage} from "./pages/product";
import detailsData from "./assets/data";

Array.from(document.getElementsByClassName('app-store-page') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'none';
document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderProductPage(3, detailsData));
