export function renderErrorPage(): HTMLElement {
    const errorPage = document.createElement('div');
    errorPage.classList.add('error-page');

    const errorTitle = document.createElement('h1');
    errorTitle.classList.add('error__title');
    errorPage.append(errorTitle);
    errorTitle.textContent = 'Ошибка 404';

    const errorDesc = document.createElement('p');
    errorDesc.classList.add('error__description');
    errorPage.append(errorDesc);
    errorDesc.innerText = 'Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.';

    const errorBtn = document.createElement('button');
    errorBtn.classList.add('error__btn');
    errorPage.append(errorBtn);
    errorBtn.textContent = 'Перейти на главную'

    return errorPage;
}