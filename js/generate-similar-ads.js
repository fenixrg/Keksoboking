// import { generateAds } from "./data.js";
import { fetchFetch } from "./api.js";

// Константы
const template = document.querySelector("#card").content;
const templateAds = template.querySelector(".popup");
const adsList = [];

// Добавление элементов в блок Фрагмент
const similarListFragment = document.createDocumentFragment();

const createElement = function(tagName, className1, className2) {
    var element = document.createElement(tagName);
    element.classList.add(className1);
    element.classList.add(className2);
    return element;
};

let responseFetch = await fetchFetch();
responseFetch = responseFetch.slice(0, 10);

responseFetch.forEach((ads) => {
    let newAds = templateAds.cloneNode(true);
    let titleNewAds = newAds.querySelector(".popup__title");
    let addressNewAds = newAds.querySelector(".popup__text--address");
    let pricewNewAds = newAds.querySelector(".popup__text--price");
    let typeNewAds = newAds.querySelector(".popup__type");
    let capacityNewAds = newAds.querySelector(".popup__text--capacity");
    let timeNewAds = newAds.querySelector(".popup__text--time");
    let featuresNewAds = newAds.querySelector(".popup__features");
    let descriptionNewAds = newAds.querySelector(".popup__description");
    let photoNewAds = newAds.querySelector(".popup__photo");
    let photosNewAds = newAds.querySelector(".popup__photos");
    let avatarNewAds = newAds.querySelector(".popup__avatar");
    titleNewAds.textContent = ads.offer.title;
    addressNewAds.textContent = ads.offer.address;
    pricewNewAds.textContent = `${ads.offer.price} ₽/ночь`;

    switch (ads.offer.type) {
        case "bungalow":
            typeNewAds.textContent = "Бунгало";
            break;
        case "flat":
            typeNewAds.textContent = "Квартира";
            break;
        case "house":
            typeNewAds.textContent = "Дом";
            break;
        case "palace":
            typeNewAds.textContent = "Дворец";
            break;
    }

    capacityNewAds.textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
    timeNewAds.textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;

    featuresNewAds.innerHTML = "";
    if (ads.offer.features != undefined) {
        for (let i = 0; i < ads.offer.features.length; i++) {
            var feature = ads.offer.features[i];
            var elementFeatures = createElement(
                "li",
                "popup__feature",
                "popup__feature--" + feature
            );
            featuresNewAds.appendChild(elementFeatures);
        }
    }

    descriptionNewAds.textContent = ads.offer.description;
    try {
        avatarNewAds.src = ads.author.avatar;
    } catch (error) {
        avatarNewAds.src = "img/avatars/default.png";
        console.log("Error", error.name, error.stack);
    }

    photosNewAds.removeChild(photoNewAds);
    if (ads.offer.photos != undefined) {
        for (let i = 0; i < ads.offer.photos.length; i++) {
            let clonePhoto = photoNewAds.cloneNode(true);
            clonePhoto.src = ads.offer.photos[i];
            photosNewAds.appendChild(clonePhoto);
        }
    }
    adsList.push(newAds);

    // similarListFragment.appendChild(newAds);
});

export { adsList, responseFetch, similarListFragment };
