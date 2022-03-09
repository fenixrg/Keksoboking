const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const addingNewAds = document.querySelector('.notice');
const titleAddingNewAdsInput = addingNewAds.querySelector('#title');
const priceAddingNewAdsInput = document.querySelector('#price');
const roomNumberAddingNewAdsSelect = document.querySelector('#room_number');
const placeNumberAddingNewAdsSelect = document.querySelector('#capacity');



// Валидация заголовка объявления
const validationCheckTitleAds = () => {
    titleAddingNewAdsInput.addEventListener('invalid', function() {
        if (titleAddingNewAdsInput.validity.tooShort) {
            titleAddingNewAdsInput.setCustomValidity('Заголовок должен состоять минимум из 25 символов. Длина сейчас: ' + titleAddingNewAdsInput.value.length + ' симвл.');
        } else if (titleAddingNewAdsInput.validity.tooLong) {
            titleAddingNewAdsInput.setCustomValidity('Заголовок не должен превышать 100 символов');
        } else {
            titleAddingNewAdsInput.setCustomValidity('');
        }
    });

    titleAddingNewAdsInput.addEventListener('input', () => {
        const valueLength = titleAddingNewAdsInput.value.length;
        if (valueLength < MIN_TITLE_LENGTH) {
            titleAddingNewAdsInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
        } else if (valueLength > MAX_TITLE_LENGTH) {
            titleAddingNewAdsInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
        } else {
            titleAddingNewAdsInput.setCustomValidity('');
        }
        titleAddingNewAdsInput.reportValidity();
    });
};



// Валидация цены жилья
const validationCheckPricewAds = () => {
    priceAddingNewAdsInput.addEventListener('input', function() {
        let valuePrice = priceAddingNewAdsInput.value;
        console.log(valuePrice);
        if (valuePrice > MAX_PRICE) {
            console.log("Превышение");
            priceAddingNewAdsInput.setCustomValidity('Максимальное значение цены составляет: ' + MAX_PRICE);
        } else {
            priceAddingNewAdsInput.setCustomValidity('');
        }
        priceAddingNewAdsInput.reportValidity();
    });
};


function checkPlaceAds(check) {
    let arrayOptions = [];
    switch (check) {
        case 1:
            arrayOptions.push(0);
            break;
        case 2:
            arrayOptions.push(0, 1);
            break;
        case 3:
            arrayOptions.push(0, 1, 2);
            break;
        case 100:
            arrayOptions.push(3);
            break;
    }
    for (let i = 0; i < placeNumberAddingNewAdsSelect.length; i++) {
        if (arrayOptions.indexOf(i) != -1) {
            placeNumberAddingNewAdsSelect.options[i].disabled = false;
        } else {
            placeNumberAddingNewAdsSelect.options[i].disabled = true;
        }
    }
};


// Валидация количества комнат/количества гостей
const validationCheckCountRoomsGuestsAds = () => {
    roomNumberAddingNewAdsSelect.addEventListener('change', function(evt) {

        if (evt.target.value == 1) {
            checkPlaceAds(1);
        } else if (evt.target.value == 2) {
            checkPlaceAds(2);
        } else if (evt.target.value == 3) {
            checkPlaceAds(3);
        } else if (evt.target.value == 100) {
            checkPlaceAds(100);
        }
    });
};

export { validationCheckTitleAds, validationCheckPricewAds, validationCheckCountRoomsGuestsAds };
