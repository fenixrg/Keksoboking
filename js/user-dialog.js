//Константы
const userDialogForm = document.querySelector('.ad-form');
const typeHouseSelect = userDialogForm.querySelector('#type');
const priceHouseInput = userDialogForm.querySelector('#price');
const timiInInput = userDialogForm.querySelector('#timein');
const timiOutInput = userDialogForm.querySelector('#timeout');

//Обработка событий в диалоговом окне
function changeTypeHouse() {
    typeHouseSelect.addEventListener('change', function(e) {
        switch (e.target.value) {
            case 'bungalow':
                priceHouseInput.setAttribute('min', 0);
                priceHouseInput.placeholder = '0';
                break;
            case 'flat':
                priceHouseInput.setAttribute('min', 1000);
                priceHouseInput.placeholder = '1000';
                break;
            case 'house':
                priceHouseInput.setAttribute('min', 5000);
                priceHouseInput.placeholder = '5000';
                break;
            case 'palace':
                priceHouseInput.setAttribute('min', 10000);
                priceHouseInput.placeholder = '10000';
                break;
        }
    });
};

function controlPrice() {
    priceHouseInput.addEventListener('change', function() {
        if (priceHouseInput.value < 0) {
            priceHouseInput.value = ' ';
            console.log(priceHouseInput.value);
        } else if (priceHouseInput.value < 1000 && priceHouseInput.getAttribute('min') == '1000') {
            priceHouseInput.value = 1000;
        } else if (priceHouseInput.value < 5000 && priceHouseInput.getAttribute('min') == '5000') {
            priceHouseInput.value = 5000;
        } else if (priceHouseInput.value < 10000 && priceHouseInput.getAttribute('min') == '10000') {
            priceHouseInput.value = 10000;
        }
    });
};

function changeTimeIn() {
    timiInInput.addEventListener('change', function(e) {
        timiOutInput.value = e.target.value;
    });
};

function changeTimeOut() {
    timiOutInput.addEventListener('change', function(e) {
        timiInInput.value = e.target.value;
    });
};

export { changeTypeHouse, changeTimeIn, changeTimeOut, controlPrice };
