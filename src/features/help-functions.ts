import {Product} from "../types/product";


export const getProductChain = (product: Product): string => {
    const {brand, name, category} = product;

    return `МАГАЗИН >> ${category} >> ${brand} >> ${name}`;
}

export const createElementWithClass = (className: string = '', elementName: string = 'div'): HTMLElement => {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    return element;
}

export const getNum = (num: number) => (Math.round(num * 100) / 100).toFixed(2);