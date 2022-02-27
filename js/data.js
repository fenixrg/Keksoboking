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
    for (let i = 0; i < ADS; i++) {
        array.push({
            author: {
                avatar: 'img/avatars/user' + '0' + (i + 1) + '.png',
            },
            offer: {
                title: 'Новое объявление неподалёку от вас',
                address: '(array[i].location.x) (array[i].location.y)',
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
            location: {
                x: getRandomIntegerPoint(35.65000, 35.70000, 5),
                y: getRandomIntegerPoint(139.70000, 139.80000, 5),
            }
        })
    }
};

export { createAds, generateAds }
