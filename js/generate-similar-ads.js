import { generateAds } from './data.js';
console.log(JSON.stringify(generateAds));

// Константы
const template = document.querySelector('#card').content;
const templateAds = template.querySelector('.popup');
const test = [];

// Добавление элементов в блок Фрагмент
const similarListFragment = document.createDocumentFragment();



const createElement = function(tagName, className1, className2) {
    var element = document.createElement(tagName);
    element.classList.add(className1);
    element.classList.add(className2);
    return element;
};





generateAds.forEach((ads) => {
    var newAds = templateAds.cloneNode(true);
    var titleNewAds = newAds.querySelector('.popup__title');
    var addressNewAds = newAds.querySelector('.popup__text--address');
    var pricewNewAds = newAds.querySelector('.popup__text--price');
    var typeNewAds = newAds.querySelector('.popup__type');
    var capacityNewAds = newAds.querySelector('.popup__text--capacity');
    var timeNewAds = newAds.querySelector('.popup__text--time');
    var featuresNewAds = newAds.querySelector('.popup__features');
    var descriptionNewAds = newAds.querySelector('.popup__description');
    var photoNewAds = newAds.querySelector('.popup__photo');
    var photosNewAds = newAds.querySelector('.popup__photos');
    var avatarNewAds = newAds.querySelector('.popup__avatar');
    titleNewAds.textContent = ads.offer.title;
    addressNewAds.textContent = ads.offer.address;
    pricewNewAds.textContent = `${ads.offer.price} ₽/ночь`;

    switch (ads.offer.type) {
        case "bungalow":
            typeNewAds.textContent = 'Бунгало';
            break;
        case "flat":
            typeNewAds.textContent = 'Квартира';
            break;
        case "house":
            typeNewAds.textContent = 'Дом';
            break;
        case "palace":
            typeNewAds.textContent = 'Дворец';
            break;
    }

    capacityNewAds.textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
    timeNewAds.textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;

    featuresNewAds.innerHTML = '';
    for (let i = 0; i < ads.offer.features.length; i++) {
        var feature = ads.offer.features[i];
        var elementFeatures = createElement('li', 'popup__feature', 'popup__feature--' + feature);
        featuresNewAds.appendChild(elementFeatures);
    }



    descriptionNewAds.textContent = ads.offer.description;
    avatarNewAds.src = ads.author.avatar;
    photosNewAds.removeChild(photoNewAds);
    for (let i = 0; i < ads.offer.photos.length; i++) {
        var clonePhoto = photoNewAds.cloneNode(true);
        clonePhoto.src = ads.offer.photos[i];
        photosNewAds.appendChild(clonePhoto);
    };
    test.push(newAds);
});

export { test };
