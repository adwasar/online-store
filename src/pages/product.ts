import {createElementWithClass, getProductChain} from "../features/help-functions";
import {Product} from "../types/product";
import {setResultFields} from "./cart";
import {CartProducts} from "../types/cartProducts";

const onAddToCartClicked = (product: Product, cartItems: CartProducts) => {
    cartItems.addProduct(product);
    setResultFields(cartItems);
}

export function renderProductPage(product: Product, cartItems: CartProducts): HTMLElement {
    const {brand, name, images, description, price, quantity, category} = product;

    const productPage = createElementWithClass('product__container', 'div');
    productPage.style.display = 'block';
    const productCard = createElementWithClass('product');

    const productChain = createElementWithClass('chain', 'span');
    productChain.innerText = getProductChain(product);
    productPage.appendChild(productChain);

    const productTitle = createElementWithClass('product__title');
    const title = createElementWithClass('', 'h1');
    title.innerText = name;
    productTitle.appendChild(title);
    productCard.appendChild(productTitle)

    const productCardContainer = createElementWithClass('product__card-container');

    const productImages = createElementWithClass('product__images');
    const firstImage = document.createElement('div');
    const secondImage = document.createElement('div');
    const thirdImage = document.createElement('div');
    firstImage.style.backgroundImage = `url(${images[0]})`;
    secondImage.style.backgroundImage = `url(${images[1]})`;
    thirdImage.style.backgroundImage = `url(${images[2]})`;
    firstImage.onclick = () => {
        productMainImage.style.backgroundImage = `url(${images[0]})`;
    }
    secondImage.onclick = () => {
        productMainImage.style.backgroundImage = `url(${images[1]})`;
    }
    thirdImage.onclick = () => {
        productMainImage.style.backgroundImage = `url(${images[2]})`;
    }
    productImages.appendChild(firstImage);
    productImages.appendChild(secondImage);
    productImages.appendChild(thirdImage);
    productCardContainer.appendChild(productImages);

    const productMainImage = createElementWithClass('product__main-image');
    productMainImage.style.backgroundImage = `url(${images[0]})`;
    productCardContainer.appendChild(productMainImage);

    const productDetails = createElementWithClass('product__details')
    const productDescription = document.createElement('div');
    productDescription.innerHTML = `<p>ОПИСАНИЕ</p>${description}`;
    const productBrand = document.createElement('div');
    productBrand.innerHTML = `<p>БРЕНД</p>${brand}`;
    const productCategory = document.createElement('div');
    productCategory.innerHTML = `<p>КАТЕГОРИЯ</p>${category}`;
    const productQuantity = document.createElement('div');
    productQuantity.innerHTML = `<p>КОЛИЧЕСТВО НА СКЛАДЕ</p>${quantity}`;
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productBrand);
    productDetails.appendChild(productCategory);
    productDetails.appendChild(productQuantity);
    productCardContainer.appendChild(productDetails);

    const productBuyOptions = createElementWithClass('product__buy-options');
    productBuyOptions.innerHTML = `<p>${price}</p>`;
    const addToCartButton = document.createElement('button');
    const buyNowButton = document.createElement('button');
    addToCartButton.innerHTML = 'Добавить в корзину';
    buyNowButton.innerHTML = 'Купить сейчас';
    addToCartButton.onclick = () => onAddToCartClicked(product, cartItems);
    productBuyOptions.appendChild(addToCartButton);
    productBuyOptions.appendChild(buyNowButton);
    productCardContainer.appendChild(productBuyOptions);

    productCard.appendChild(productCardContainer);
    productPage.appendChild(productCard);
    return productPage;
}