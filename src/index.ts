import './index.html';
import './scss/main.scss';
import detailsData from './assets/data';
import {renderMainPage} from './pages/main';
import {renderCartPage} from './pages/cart';

const appStorePage = document.querySelector('.app-store-page') as HTMLElement;
document.querySelector('main')?.querySelector('.wrapper')?.appendChild(renderCartPage());

appStorePage.style.display = 'none';

renderMainPage(detailsData);
renderCartPage();

