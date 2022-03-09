const infoAds = document.querySelector(".ad-form");
const interactiveElementsDialogForm = infoAds.children;
const mapFilter = document.querySelector(".map__filters");
const mapFilterElements = mapFilter.children;

//Функция №1 - Получение рандомного числа
const getRandomInteger = (min, max) => {
    if (min < 0 || max < 0) {
        alert("Введите положительное число");
        return -1;
    } else if (min >= max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Функция №2 - Получение рандомного числа с плавающей точкой
const getRandomIntegerPoint = (min, max, number) => {
    if (min < 0 || max < 0) {
        alert("Введите положительное число");
        return -1;
    } else if (min >= max) {
        [min, max] = [max, min];
    }
    return (Math.random() * (max - min) + min).toFixed(number);
};

//Функция №3 - Получение рандомного элемента массива
const getRandomElementArr = (array) => {
    let randomElement = getRandomInteger(0, array.length - 1);
    return array[randomElement];
};

//Функция №4 - Получение массива с рандомным количеством строк
function getRandomStrongArray(arr) {
    const maxLength = arr.length;
    const lengthOfArray = getRandomInteger(1, maxLength);
    const array = [];

    while (array.length < lengthOfArray) {
        const indexOfEl = getRandomInteger(0, maxLength - 1);
        const el = arr[indexOfEl];

        if (!array.includes(el)) {
            array.push(el);
        }
    }
    return array;
}

//Функция №5 - Вывод ошибки в случае неуспешного FETCH-запроса
const ALERT_SHOW_TIME = 5000;
const showAlert = (message, backColor) => {
    const alertContainer = document.createElement("div");
    alertContainer.style.zIndex = 100;
    alertContainer.style.position = "absolute";
    alertContainer.style.left = 0;
    alertContainer.style.top = 0;
    alertContainer.style.right = 0;
    alertContainer.style.padding = "10px 3px";
    alertContainer.style.fontSize = "30px";
    alertContainer.style.textAlign = "center";
    alertContainer.style.backgroundColor = backColor;

    alertContainer.textContent = message;

    document.body.append(alertContainer);

    setTimeout(() => {
        alertContainer.remove();
    }, ALERT_SHOW_TIME);
};

// Отключение диалоговых окон
const disabledPage = () => {
    infoAds.classList.add("ad-form--disabled");
    for (let i = 0; i < interactiveElementsDialogForm.length; i++) {
        interactiveElementsDialogForm[i].setAttribute("disabled", true);
    }
    mapFilter.classList.add(".ad-form--disabled");
    for (let i = 0; i < mapFilterElements.length; i++) {
        mapFilterElements[i].setAttribute("disabled", true);
    }
};

// Включение диалоговых окон
const enabledPage = () => {
    infoAds.classList.remove("ad-form--disabled");
    for (let i = 0; i < interactiveElementsDialogForm.length; i++) {
        interactiveElementsDialogForm[i].removeAttribute("disabled");
    }
    mapFilter.classList.remove(".ad-form--disabled");
    for (let i = 0; i < mapFilterElements.length; i++) {
        mapFilterElements[i].removeAttribute("disabled");
    }
};

export {
    getRandomInteger,
    getRandomIntegerPoint,
    getRandomElementArr,
    getRandomStrongArray,
    showAlert,
    enabledPage,
    disabledPage,
};
