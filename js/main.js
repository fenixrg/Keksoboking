import { test } from './generate-similar-ads.js';
import { changeTypeHouse, changeTimeIn, changeTimeOut, controlPrice } from './user-dialog.js';


const infoAds = document.querySelector('.ad-form');
console.log(infoAds);
const interactiveElementsDialogForm = infoAds.children;
console.log(interactiveElementsDialogForm);
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.children;

// Добавление тестового DOM-элеемента в канвас
// const canvas = document.querySelector('#map-canvas');
// canvas.appendChild(test[0]);

// Запуск события изменения типа жилья
changeTypeHouse();

// Запуск события контроля цены за ночь
controlPrice();

// Запуск событий изменения времени въезда/выезда
changeTimeIn();
changeTimeOut();


// Отключение диалоговых окон
const disabledPage = () => {
    infoAds.classList.add('ad-form--disabled');
    for (let i = 0; i < interactiveElementsDialogForm.length; i++) {
        interactiveElementsDialogForm[i].setAttribute('disabled', true);
    }
    mapFilter.classList.add('.ad-form--disabled');
    for (let i = 0; i < mapFilterElements.length; i++) {
        mapFilterElements[i].setAttribute('disabled', true);
    }
};

// Включение диалоговых окон
const enabledPage = () => {
    infoAds.classList.remove('ad-form--disabled');
    for (let i = 0; i < interactiveElementsDialogForm.length; i++) {
        interactiveElementsDialogForm[i].removeAttribute('disabled');
    }
    mapFilter.classList.remove('.ad-form--disabled');
    for (let i = 0; i < mapFilterElements.length; i++) {
        mapFilterElements[i].removeAttribute('disabled');
    }
};



disabledPage();
// Интерактивная карта
const map = L.map('map-canvas').on('load', () => {
        console.log('Карта инициализирована');
        enabledPage();
    })
    .setView({
        lat: 35.6895,
        lng: 139.692,
    }, 10);

// Поставщик карт
const layerMap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
);

// Иконка маркера
const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
});

// Маркер
const marker = L.marker({
    lat: 35.6895,
    lng: 139.692,
}, {
    draggable: true,
    icon: mainPinIcon,
}, );

let endCoordintelat;
let endCoordintelng;
let addressForm = document.querySelector('#address');
console.log(addressForm);

// Получение конечных координат при отпуске маркера
marker.on('moveend', (evt) => {
    let endCoordinte = evt.target.getLatLng();
    endCoordintelat = endCoordinte.lat;
    endCoordintelng = endCoordinte.lng;
    addressForm.value = `x = ${endCoordintelat}, y =${endCoordintelng}`;
});

// Добавление карт от поставщика и маркеров на карту
layerMap.addTo(map);
marker.addTo(map);

// marker.remove();
