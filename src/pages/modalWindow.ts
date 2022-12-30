export function renderModalWindowPage(): HTMLElement {
    const modalWindowPage = document.createElement('div');
    modalWindowPage.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container');
    modalWindowPage.append(modalContainer);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalContainer.append(modalContent);

    const personalDetails = document.createElement('div');
    personalDetails.classList.add('modal__personal-details');
    modalContent.append(personalDetails);

    const personalDetailsTitle = document.createElement('h2');
    personalDetailsTitle.classList.add('modal__personal-details-title');
    personalDetails.append(personalDetailsTitle);
    personalDetailsTitle.textContent = 'Персональные данные';

    const personalDetailsName = document.createElement('div');
    personalDetailsName.classList.add('modal__name');
    personalDetails.append(personalDetailsName);
    personalDetailsName.textContent = 'Имя';
    const personalDetailsNameInput = document.createElement('input');
    personalDetailsName.append(personalDetailsNameInput);
    personalDetailsNameInput.setAttribute('placeholder', 'Name');
    personalDetailsNameInput.setAttribute('type', 'text');

    const personalDetailNumberPhone = document.createElement('div');
    personalDetailNumberPhone.classList.add('modal__number-phone');
    personalDetails.append(personalDetailNumberPhone);
    personalDetailNumberPhone.textContent = 'Телефон';
    const personalDetailNumberPhoneInput = document.createElement('input');
    personalDetailNumberPhone.append(personalDetailNumberPhoneInput);
    personalDetailNumberPhoneInput.setAttribute('type', 'text');
    personalDetailNumberPhoneInput.setAttribute('placeholder', '0950000000');

    const personalDetailAddress = document.createElement('div');
    personalDetailAddress.classList.add('modal__address');
    personalDetails.append(personalDetailAddress);
    personalDetailAddress.textContent = 'Адрес';
    const personalDetailAddressInput = document.createElement('input');
    personalDetailAddress.append(personalDetailAddressInput);
    personalDetailAddressInput.setAttribute('type', 'text');
    personalDetailAddressInput.setAttribute('placeholder', 'г.Киев, ул.Центральная, д.1');

    const personalDetailEmail = document.createElement('div');
    personalDetailEmail.classList.add('modal__e-mail');
    personalDetails.append(personalDetailEmail);
    personalDetailEmail.textContent = 'E-mail';
    const personalDetailEmailInput = document.createElement('input');
    personalDetailEmail.append(personalDetailEmailInput);
    personalDetailEmailInput.setAttribute('type', 'text');
    personalDetailEmailInput.setAttribute('placeholder', 'email@gmail.com');

    const creditCard = document.createElement('div');
    creditCard.classList.add('modal__credit-card');
    modalContent.append(creditCard);

    const creditCardTitle = document.createElement('h2');
    creditCardTitle.classList.add('modal__credit-card-title');
    creditCard.append(creditCardTitle);
    creditCardTitle.textContent = 'Кредитная карта';

    const creditCardNum = document.createElement('div');
    creditCardNum.classList.add('modal__credit-card-num');
    creditCard.append(creditCardNum);
    creditCardNum.textContent = 'Номер карты';
    const creditCardNumInput = document.createElement('input');
    creditCardNum.append(creditCardNumInput);
    creditCardNumInput.setAttribute('type', 'text');
    creditCardNumInput.setAttribute('placeholder', '0000-0000-0000-0000');

    const creditCardValid = document.createElement('div');
    creditCardValid.classList.add('modal__credit-card-valid');
    creditCard.append(creditCardValid);
    creditCardValid.textContent = 'Срок действия';
    const creditCardValidInput = document.createElement('input');
    creditCardValid.append(creditCardValidInput);
    creditCardValidInput.setAttribute('type', 'text');
    creditCardValidInput.setAttribute('placeholder', '01/23');

    const creditCardCvv = document.createElement('div');
    creditCardCvv.classList.add('modal__credit-card-cvv');
    creditCard.append(creditCardCvv);
    creditCardCvv.textContent = 'CVV';
    const creditCardCvvInput = document.createElement('input');
    creditCardCvv.append(creditCardCvvInput);
    creditCardCvvInput.setAttribute('type', 'password');
    creditCardCvvInput.setAttribute('placeholder', '123');


    const modalSubmit = document.createElement('button');
    modalSubmit.classList.add('modal__submit');
    modalContent.append(modalSubmit);
    modalSubmit.textContent = 'Подтвердить';

    return modalWindowPage;
}