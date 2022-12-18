import detailsData from '../assets/data';


export const getProductChain = (productIndex: number): string => {
    const {brand, name, category} = detailsData[productIndex];

    return `МАГАЗИН >> ${category} >> ${brand} >> ${name}`;
}

export const createElementWithClass = (className: string = '', elementName: string = 'div'): HTMLElement => {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    return element;
}