const success = document.createElement('div');
success.classList.add('success');
success.innerHTML = 'Заказ оформлен';

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

    const modalForm = document.createElement('form');
    modalContent.append(modalForm);

    const personalDetails = document.createElement('div');
    personalDetails.classList.add('modal__personal-details');
    modalForm.append(personalDetails);

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
    personalDetailNumberPhoneInput.setAttribute('placeholder', '+38(0__) ____-___');
    personalDetailNumberPhoneInput.addEventListener('input', () => {
        function formatPhoneNumber(value: string | null) {
            if(!value) return '';
            const phoneNumber = value.replace(/[^\d]/g, '');
            const phoneNumberLength = phoneNumber.length;
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
    modalForm.append(creditCard);

    const creditCardTitle = document.createElement('h2');
    creditCardTitle.classList.add('modal__credit-card-title');
    creditCard.append(creditCardTitle);
    creditCardTitle.textContent = 'Кредитная карта';

    const mastercardLogo = document.createElement('div');
    mastercardLogo.classList.add('card-logo');
    mastercardLogo.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDuyzA3gM3mt4ZIkq8fZFd0RHaubpXqiqsQ&usqp=CAU)';
    mastercardLogo.style.width = '160px';
    creditCard.append(mastercardLogo);

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
            if (!value) return '';
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
        if (creditCardNumInput.value.slice(0, 1) === '5') {
            mastercardLogo.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png)';
            mastercardLogo.style.width = '50px';
        } else if (creditCardNumInput.value.slice(0, 1) === '4') {
            mastercardLogo.style.backgroundImage = 'url(https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg)';
            mastercardLogo.style.width = '50px';
        } else if (creditCardNumInput.value.slice(0, 1) === '3') {
            mastercardLogo.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAgVBMVEX///8Ab88Aa84AZ80Abc/5/P4/hdUAZMzd6/eyyux+pN9hj9jT4vUAYMssdtE+h9bF1vAAWsoAXcrr8/uow+mBquGTteVNhNXl7vnJ2/IYc9A/fdNund3A0e4AV8nz9/xZktkARMUAUsifu+cAScZPjNcygNRkmNyNruM6c9BcitcMvjbjAAAKxUlEQVR4nO1aW2OqvBKFBARbYKOo5aLirhXd/f8/8JCZSUhCrNqX7zxk9aE45DIrl7kkBIGHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4fH/yuaJaKMJ1m1VKjmJZfLTPxMl3NsRPF6Ywob1UZ8mKpLpM1BFuxJJH+XWrFKNqrU7LHH9Ed2dcEiAVZonWZtRODnSdoyEuY78XPDoxlWzfiizA1ZWHSnhnT8EE0k26n33UfXhlSQkQbpmn7/0/TM1rZCdScaWy9/pHfOQ0R+09oqIpKyU6+EK5KFCdJj4QxrweOQW9KIrfY90hPtckmv2h+TKFLFJL2rbJhvdHrUVtgoeqJq/jM91XwUKSIjvUk1Nal7/lt6osppTi8bEqMM0dPG9l1TaS05X16gp6mST2Ol0cvlYqg6Nc6/oBfCgjbo1ZHVANE780ky7T5FT2n0BL34G7oAxaPCOXstyTQ2T9GLWlIxwWGJKpNeXDBZgJADvaqYliu/OuiFPHuWXokd4MQwVZLogXSFjcVv06Dq9JJlqeFQTfQ2JDrTOC1NejRJjJ/OhpVe4tzj4OTKLmr0yB48poc6R20DddleGl2kF7WgzBuI0nYaVJ3eup+1SvQy8zffGfTqBVRnQ2Y1AJMXfZ+hO+rcpBcm5+fopTCCyS04wYNa6kgv2cHWL3BQ1zBup+gJeolJL4Df/GbQw0KssCuXCRHAFRXVDnrhqn6K3hZNV0mdJXKskN66gZHENQuDzc5gtF+kF7tm74w9Hqy6MXqFdRzg2Co3h/Tkfv6On6AXw5xFY9nqYuhK9DLogr+NbVVHaLaa0Ys6HRdt70l6MXoUa+9BQ+xSWSo1QIDvx6AE3KwqgfS6HfITrB/Sw90NBfBRxhOSXgZ6teP+3nHoNX636YV6gMI6jd7lBLgwZNcaljOG1TBtLYkbzpkYGrRlydKYvWyHjY/O/RG9Hr1CLp5TVLXoDXo9sBlbiEGvFQnuOoZoAHq45BkHUKlcjJxGD3TjN1sliDLYVahRoj34Y9Br4g4a5IuH9A44PKArxSTsbNALdrCEBnQg0dA/R8/h1vnQm/QGIzyTwLnB3d7TNswMekGJFjw/Vz/Ti9Fc8kMmgO6GvVcGvRp6OFawCUdzVs3pcQ1J4abH8iu0O1+csakShohdCSpt0XWcTHq4T8bH5ceP9DLSogBQyMVLgx4aTL4FyzO2PafH9jq2/USPyXUZ5sUGF71uWoSStmnZUOjQoU74o81Mej2GNdEA7+/Su6owJII/1Oli0jussQDMbBzMF+fatn3KtOy3J+Q3RUMaPbT7iZ7SUeuirqYRbdCJnpwXWqR36KVTkKXjmBr0etULGGMHvZ+ilhs+ddJHaPTIcAx69dIRxYrqtUkvuGmq36O3c9MDWz3Ri7cqacmrl+nF3xibDNWMXv2BFvBdy7b3bpUgldHpYTM/0qsHXMGtKtji2ImsfaInDRVt8fneSw6NhtJy69UFzdcQ2/Tk8DJ+2UAT41uKu5RKLaUyrUWPIref6G3Qf+413TByEcGTRq/6Jn5rsU0cjiFfa/gqTXpBiiaLn2bZet/JhCgfm/jaST8ebSeNDjhN64NFL9DWlJMeGuYwaTRZiWHQotLpBVsKTsDmP/B7Rr5H/gqPMDBzM9LZjE8NiNYrnKtCPxvaoXV+t+lVnbLKTnrNCjvVd04/MKqg00txoJCSw+89oDfaC9A639v0gqxTe02cquBqFeHmhIqWTmnRm/aMmx4uRGa+28gkRadHmUkIJvzR7OVAz8wYyJnxXWwfJdVvLMfd1aUyql+ZB3tobUZ7Z9Gj4PQOvea4GnHkptPKIhD/bbLkCP9Bev4SRTvaPJ/jjy/wRGfxaOEv7L0vaFwlRFsoePy8BfU/0e6nmqA4Ow/5KPoczfUSSn1aCWCGba3S7K/4nys/Geeg6+prE8xRpYD6jjjG/xQxaUXjGn5UWmETokpv1JYNpGlmVDc6FekbFrL9DNXtY/t1n7oreHh4ePxHiB2YpM6is0r3m3vQUfy44v0Gn0G6fZtjE+/kk16UZNsq3Zvlb2fp+TL7zUZlSDdHRzvZ9GZn6LFfKrm7wrPIjCMGxBhVZUmCz1OkUF1QNCYt5dGu0lIyvpy9KfBwIqi7ZN7RAl7F14JZb+BQtN/a8s+f78Ac9Ao72sJEMMP4MTzK2Kh/x9hIpGTN/ASJ4TGe42yJ44m4nrmpSnBg0DA7+WMQlWet3RhbvMjuLr1gGdFlEkWGW+wLzkdLxwFZxO7diLEQDtId9OACr+5mES0cXPTdLOVNXp08dUPENOAJ/ZnOMBewuOiWJ4EDL6InK6HebJjo0Ru6MOWniZ7ZkTjZfEtsDTjcxFESrMs/7NDySXrRx7uGb9zAO8qPRP69oWe8hSN631Sehl/kEAfjzTdd7EWppBd1RkfjOMbH0Nbg+xBMRxi63BVTP0NPnE7PzS+Na/4WNHgxyT96jV7RYOE+pVxmK+m1Gb3JKBvbSHpjgmV1RDdyb/UkhE4a7HFfG6V/Tc+BmA4Q2Z4uPTvah5KeKonZ45XoRa3KkPBQZboySmaWfYOHyrNlh33wxpb/ip59O0X88Pgr5MhOfTAyowfJvzhIsOkFSO+mzZ6b3owG9vG6MXHRS3bGIZhKrGrNekVcJZgzeuze7KELEfcZlL6/ZdZpW4mnx4sNyTJKERu8dCts+W/omZdb60x7raw2m2bYohejkWPT3itrQHrGe+yo0RyD1pFYNGRamPxQKPz3AZ8jkWmJGFYIw3/d+fXN5/J7Gr2gkRft+mEN0mtPV0RLJihTljOnEwvyLV3gduuw5feJJWWrQezEm+32orzLghfxiJ76cCjSFkcpb04Q5PfE2YnzQxf4Psvl1oGetkAk+KUWn4XM3DovXl2hj+gtZR/6d0POqAXuWR30Ivq64R49cUrIrHdQpXLIjbPD5+mpD2oEPid6B+0bEPWxiIseb2FrzuixfMBVTYvT6OiIr+Lbe8GlDGvBfUt/1uTTF0Gv00tujf5FjpqntNUWzvR5nxWUjdHV6oJDovZeTupc5WeKZDn3RkfS21WZFNGXP3lNcll8Q0bKuEZ7lt4dv1eFaL1k7CidFtEbFgNgcTpLPYleWR1QHab83D2/ZwOPgtczI1LSB1C/ouf0ntWCfM9yQbeTG72rwmHHJr9HQ6C+VrkXtcxawKuUWRRT47XIi27+p9nDG/nwWAZpQuE+rg1yDI6AiWZPEN+hv5YK0eyd53VM7PHCZ7bH8KYoejFIo4yh+6NhwCG+UpYgNGrQhkV4nfCAHkUtmHHIYKeijEHvaCEM4XbQRbgd+KUPzoacjMC/Fz27K9/LRb4X080F30KL5CAwqn40e0gvxowjwujmbr63T3QR7fKNuDmZy3P785En6RmAbF3e9pxovHZ0ezc8TU/m2wyc8d1s3XEPDYnXLGoZW4pezWfv0cPvJDAFR5Aa/BJToPyQnowbmfgKy0WPOelFGJzMgzL+i6CsZTOMi7PkmP5303D1V5SN7r1ciYfQRW8NKykzW08WtUg+Zh3B4rwai5DzvNiCXTEXJ+N59Pbzl/5OepfFDMOuugzw9EdnUFHRYZN18NIxliW8WUwJEbYz7IPq6ugITYsuurwticTZlO+X2S+ydQ8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8Pj/v4H2K/3XOQAXCtAAAAAElFTkSuQmCC)';
            mastercardLogo.style.width = '50px';
        } else {
            mastercardLogo.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDuyzA3gM3mt4ZIkq8fZFd0RHaubpXqiqsQ&usqp=CAU)';
            mastercardLogo.style.width = '160px';
        }
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
    creditCardCvvInput.addEventListener('change', () => {
        if (creditCardCvvInput.value.length < 3) {
            creditCardCvvInput.classList.add('incorrect');
        } else  {
            creditCardCvvInput.classList.remove('incorrect');
        }
    })


    const modalSubmit = document.createElement('button');
    modalSubmit.classList.add('modal__submit');
    modalForm.append(modalSubmit);
    modalSubmit.textContent = 'Подтвердить';
    modalSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        const invalidsStart = document.querySelectorAll('.invalid');
        invalidsStart.forEach((elem) => {
            elem.remove();
        })

        if (personalDetailsNameInput.classList.contains('incorrect')
                || personalDetailsNameInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>Имя Фамилия</b> должен содержать не менее 2 слов, длина каждого не менее 3 символов';
            personalDetailsName.after(err);
        }
        if (personalDetailNumberPhoneInput.classList.contains('incorrect')
                || personalDetailNumberPhoneInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>Телефон</b> должен содержать не менее 12 цифр';
            personalDetailNumberPhone.after(err);
        }
        if (personalDetailAddressInput.classList.contains('incorrect')
                || personalDetailAddressInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>Адрес</b> должен содержать не менее трех слов, длина каждого не менее 5 символов';
            personalDetailAddress.after(err);
        }
        if (personalDetailEmailInput.classList.contains('incorrect')
                || personalDetailEmailInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>E-mail</b> должен иметь вид электронной почты';
            personalDetailEmail.after(err);
        }
        if (creditCardNumInput.classList.contains('incorrect')
                || creditCardNumInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>Номер карты</b> должен должен иметь не менее 16 цифр';
            creditCardNum.after(err);
        }
        if (creditCardValidInput.classList.contains('incorrect')
                || creditCardValidInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>Срок действия</b> должен содержать не менее 4 цифр';
            creditCardValid.after(err);
        }
        if (creditCardCvvInput.classList.contains('incorrect')
                || creditCardCvvInput.value === '') {
            const err = document.createElement('div');
            err.classList.add('invalid');
            err.innerHTML = '<b>CVV</b> должен содержать не менее 3 цифр';
            creditCardCvv.after(err);
        }

        const invalidsEnd = document.querySelectorAll('.invalid');

        if (invalidsEnd.length === 0) {
            modalSubmit.after(success);
        } else {
            success.remove();
        }
    })

    return modalWindowPage;
}