import { test } from './generate-similar-ads.js';
import { changeTypeHouse, changeTimeIn, changeTimeOut, controlPrice } from './user-dialog.js';




// Добавление тестового DOM-элеемента в канвас
const canvas = document.querySelector('#map-canvas');
canvas.appendChild(test[0]);

// Запуск события изменения типа жилья
changeTypeHouse();

// Запуск события контроля цены за ночь
controlPrice();

// Запуск событий изменения времени въезда/выезда
changeTimeIn();
changeTimeOut();
