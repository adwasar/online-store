export function renderModalWindowPage(): HTMLElement {
    const modalWindowPage = document.createElement('div');
    modalWindowPage.classList.add('modal');
    modalWindowPage.addEventListener('click', (e) => {
        if (e.target === modalWindowPage) {
            modalWindowPage.remove();
        }
    })

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
    personalDetailsName.textContent = 'Имя Фамилия';
    const personalDetailsNameInput = document.createElement('input');
    personalDetailsName.append(personalDetailsNameInput);
    personalDetailsNameInput.setAttribute('placeholder', 'Имя Фамилия');
    personalDetailsNameInput.setAttribute('type', 'text');
    personalDetailsNameInput.addEventListener('change', () => {
        const nameValue = personalDetailsNameInput.value;
        const nameValueArr = nameValue.trim().split(` `);
        const nameValueLength = nameValueArr.length;
        if (nameValueLength !== 2) {
            personalDetailsNameInput.classList.add('incorrect');
        } else {
            personalDetailsNameInput.classList.remove('incorrect');
        }
        nameValueArr.forEach((item) => {
            if (item.length < 3) {
                personalDetailsNameInput.classList.add('incorrect');
            }
        })
    })

    const personalDetailNumberPhone = document.createElement('div');
    personalDetailNumberPhone.classList.add('modal__number-phone');
    personalDetails.append(personalDetailNumberPhone);
    personalDetailNumberPhone.textContent = 'Телефон';
    const personalDetailNumberPhoneInput = document.createElement('input');
    personalDetailNumberPhone.append(personalDetailNumberPhoneInput);
    personalDetailNumberPhoneInput.setAttribute('type', 'tel');
    personalDetailNumberPhoneInput.setAttribute('placeholder', '+38(095) 0000-000');
    personalDetailNumberPhoneInput.addEventListener('input', () => {
        function formatPhoneNumber(value: string | null) {
            if(!value) return '';
            const phoneNumber = value.replace(/[^\d]/g, '');
            const phoneNumberLength = phoneNumber.length;
            console.log(personalDetailNumberPhoneInput.value.length);
            if (phoneNumberLength < 6) return `+380${phoneNumber.slice(3)}`;
            if (phoneNumberLength < 10) {
                return `+38(0${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5)}`
            }
            return `+38(0${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 9)}-${phoneNumber.slice(9, 12)}`
        }
        const formatted = formatPhoneNumber(personalDetailNumberPhoneInput.value);
        personalDetailNumberPhoneInput.value = formatted as string;
    })
    personalDetailNumberPhoneInput.addEventListener('click', () => {
        if (personalDetailNumberPhoneInput.value === '') {
            personalDetailNumberPhoneInput.value = '+380';
        }
    })
    personalDetailNumberPhoneInput.addEventListener('focusout', () => {
        if (personalDetailNumberPhoneInput.value === '+380') {
            personalDetailNumberPhoneInput.value = '';
        }
    })
    personalDetailNumberPhoneInput.addEventListener('change', () => {
        if (personalDetailNumberPhoneInput.value.length < 17) {
            personalDetailNumberPhoneInput.classList.add('incorrect');
        } else {
            personalDetailNumberPhoneInput.classList.remove('incorrect');
        }
    })

    const personalDetailAddress = document.createElement('div');
    personalDetailAddress.classList.add('modal__address');
    personalDetails.append(personalDetailAddress);
    personalDetailAddress.textContent = 'Адрес';
    const personalDetailAddressInput = document.createElement('input');
    personalDetailAddress.append(personalDetailAddressInput);
    personalDetailAddressInput.setAttribute('type', 'text');
    personalDetailAddressInput.setAttribute('placeholder', 'г.Киев, обл.Киевская, ул.Центральная');
    personalDetailAddressInput.addEventListener('change', () => {
        const addressValue = personalDetailAddressInput.value;
        const addressValueArr = addressValue.trim().split(' ');
        const addressValueLength = addressValueArr.length;
        if (addressValueLength < 3) {
            personalDetailAddressInput.classList.add('incorrect');
        } else {
            personalDetailAddressInput.classList.remove('incorrect');
        }
        addressValueArr.forEach((item) => {
            if (item.length < 5) {
                personalDetailAddressInput.classList.add('incorrect');
            }
        })
    })

    const personalDetailEmail = document.createElement('div');
    personalDetailEmail.classList.add('modal__e-mail');
    personalDetails.append(personalDetailEmail);
    personalDetailEmail.textContent = 'E-mail';
    const personalDetailEmailInput = document.createElement('input');
    personalDetailEmail.append(personalDetailEmailInput);
    personalDetailEmailInput.setAttribute('type', 'email');
    personalDetailEmailInput.setAttribute('placeholder', 'email@gmail.com');
    personalDetailEmailInput.addEventListener('change', () => {
        const validateEmail = (email: string) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };
        if (!validateEmail(personalDetailEmailInput.value)) {
            personalDetailEmailInput.classList.add('incorrect');
        } else {
            personalDetailEmailInput.classList.remove('incorrect');
        }
    })

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
    creditCardNumInput.addEventListener('input', () => {
        function formatCardNum(value: string) {
            if (!value) return '1';
            const cardNum = value.replace(/[^\d]/g, '');
            const cardNumLength = cardNum.length;
            if (cardNumLength < 5) {
                return cardNum
            }
            if (cardNumLength < 9) {
                return `${cardNum.slice(0, 4)}-${cardNum.slice(4)}`
            }
            if (cardNumLength < 13) {
                return `${cardNum.slice(0, 4)}-${cardNum.slice(4, 8)}-${
                    cardNum.slice(8)}`
            }
            if (cardNumLength >= 13) {
                return `${cardNum.slice(0, 4)}-${cardNum.slice(4, 8)}-${
                    cardNum.slice(8, 12)}-${cardNum.slice(12, 16)}`
            }
        }
        const formatted = formatCardNum(creditCardNumInput.value);
        creditCardNumInput.value = formatted as string;
    });
    creditCardNumInput.addEventListener('change', () => {
        if (creditCardNumInput.value.length < 19) {
            creditCardNumInput.classList.add('incorrect');
        } else {
            creditCardNumInput.classList.remove('incorrect');
        }
    })

    const creditCardValid = document.createElement('div');
    creditCardValid.classList.add('modal__credit-card-valid');
    creditCard.append(creditCardValid);
    creditCardValid.textContent = 'Срок действия';
    const creditCardValidInput = document.createElement('input');
    creditCardValid.append(creditCardValidInput);
    creditCardValidInput.setAttribute('type', 'text');
    creditCardValidInput.setAttribute('placeholder', '01/23');
    creditCardValidInput.addEventListener('input', () => {
        function formatCardValid(value: string) {
            if (!value) return '';
            const validNum = value.replace(/[^\d]/g, '');
            const validNumLength = validNum.length;
            if (validNumLength < 3) {
                return validNum
            } else {
                return `${validNum.slice(0, 2)}/${validNum.slice(2, 4)}`;
            }
        }
        const formatted = formatCardValid(creditCardValidInput.value);
        creditCardValidInput.value = formatted as string;
    });
    creditCardValidInput.addEventListener('change', () => {
        if (creditCardValidInput.value.length < 5) {
            creditCardValidInput.classList.add('incorrect');
        } else {
            creditCardValidInput.classList.remove('incorrect');
        }
    })


    const creditCardCvv = document.createElement('div');
    creditCardCvv.classList.add('modal__credit-card-cvv');
    creditCard.append(creditCardCvv);
    creditCardCvv.textContent = 'CVV';
    const creditCardCvvInput = document.createElement('input');
    creditCardCvv.append(creditCardCvvInput);
    creditCardCvvInput.setAttribute('type', 'password');
    creditCardCvvInput.setAttribute('placeholder', '123');
    creditCardCvvInput.addEventListener('input', () => {
        function formatCvv(value: string) {
            const cvvNumb = value.replace(/[^\d]/g, '');
            return cvvNumb.slice(0, 3);
        }

        const formatted = formatCvv(creditCardCvvInput.value);
        creditCardCvvInput.value = formatted as string;
    })


    const modalSubmit = document.createElement('button');
    modalSubmit.classList.add('modal__submit');
    modalContent.append(modalSubmit);
    modalSubmit.textContent = 'Подтвердить';

    return modalWindowPage;
}