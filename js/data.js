import { getRandomInteger, getRandomIntegerPoint, getRandomElementArr, getRandomStrongArray } from './util.js';

// Константы
const ADS = 10;
const generateAds = [];

const TYPE = [
    'palace',
    'flat',
    'house',
    'bungalow',
];

const CHECKIN = [
    '12:00',
    '13:00',
    '14:00',
];

const CHECKOUT = [
    '12:00',
    '13:00',
    '14:00',
];

const FEATURES = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner",
];

const DESCRIPTION = [
    'Ничего так, пойдет',
    'Всё норм, жить можно',
    'Райское жилище!',
    'Дом богов!',
    'Главное, что вид из помещения открываается на парк',
    'Уютная маленькая квартирка',
    'Огромные царские апартаменты',
];

const PHOTOS = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
];

//Основная Функция - Генерация массива из 10 объектов - объявлений
const createAds = (array) => {
    for (let i = 1; i <= ADS; i++) {
        let x = getRandomIntegerPoint(35.65000, 35.70000, 5);
        let y = getRandomIntegerPoint(139.70000, 139.80000, 5);
        array.push({
            author: {
                avatar: i > 9 ? 'img/avatars/user' + i +
                    '.png' : 'img/avatars/user' + '0' + i + '.png',
            },
            location: {
                x: x,
                y: y,
            },
            offer: {
                title: 'Новое объявление неподалёку от вас',
                address: 'x=' + x + ' y=' + y,
                price: getRandomInteger(5000, 37000),
                type: getRandomElementArr(TYPE),
                rooms: getRandomInteger(1, 7),
                guests: getRandomInteger(1, 12),
                checkin: getRandomElementArr(CHECKIN),
                checkout: getRandomElementArr(CHECKOUT),
                features: getRandomStrongArray(FEATURES),
                description: getRandomElementArr(DESCRIPTION),
                photos: getRandomStrongArray(PHOTOS),
            },
        })
    }
};

export { createAds, generateAds }
