import { createInteractivMap, disabledPage } from "./map.js";
import {
    changeTypeHouse,
    changeTimeIn,
    changeTimeOut,
    controlPrice,
} from "./user-dialog.js";
import {
    validationCheckTitleAds,
    validationCheckPricewAds,
    validationCheckCountRoomsGuestsAds,
} from "./validation-form.js";

// Отключение диалоговых окон
// disabledPage();

// Генерация карты

function testMode() {
    document.querySelector("#title").value =
        "Заполните все обязательные поля, назначьте цену, загрузите аватар и фото жилья. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.";
    document.querySelector("#price").value = 10000;
}

testMode();

try {
    createInteractivMap();
} catch (error) {
    disabledPage();
    console.log("Error:", error.message, error.stack);
}

const userDialogForm = document.querySelector(".ad-form");
const messageSuccessTemplate = document.querySelector("#success").content;
const messageSuccess = messageSuccessTemplate.querySelector(".success");
const messageErrorTemplate = document.querySelector("#error").content;
const messageError = messageErrorTemplate.querySelector(".error");

console.log(messageError);

userDialogForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch("https://23.javascript.pages.academy/keksobookin", {
        method: "POST",
        body: formData,
    }).then((response) => {
        if (response.ok) {
            evt.target.reset();
            document.querySelector(".map__filters").reset();

            document.body.insertAdjacentElement("beforeend", messageSuccess);
            const successButton = document.querySelector(".success__button");
            successButton.addEventListener("click", () => {
                document.body.removeChild(messageSuccess);
            });
            document.addEventListener("click", () => {
                document.body.removeChild(messageSuccess);
            });
            document.addEventListener("keydown", (evt) => {
                if (evt.keyCode == 27) {
                    document.body.removeChild(messageSuccess);
                }
            });
        } else {
            document.body.insertAdjacentElement("beforeend", messageError);

            const errorButton = document.querySelector(".error__button");
            errorButton.addEventListener("click", () => {
                document.body.removeChild(messageError);
            });
            document.addEventListener("click", () => {
                document.body.removeChild(messageError);
            });
            document.addEventListener("keydown", (evt) => {
                if (evt.keyCode == 27) {
                    document.body.removeChild(messageError);
                }
            });
        }
    });
});

// Включение диалоговых окон
// enabledPage();

// Запуск события изменения типа жилья
changeTypeHouse();

// Запуск события контроля цены за ночь
controlPrice();

// Запуск событий изменения времени въезда/выезда
changeTimeIn();
changeTimeOut();

// В А Л И Д А Ц И Я

// Валидация заголовка объявления
validationCheckTitleAds();

// Валидация цены жилья
validationCheckPricewAds();

// Валидация количества комнат/количества гостей
validationCheckCountRoomsGuestsAds();
