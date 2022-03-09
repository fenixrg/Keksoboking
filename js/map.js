import { adsList, responseFetch } from "./generate-similar-ads.js";
import { disabledPage, enabledPage } from "./util.js";

// Интерактивная карта

const createInteractivMap = () => {
    const map = L.map("map-canvas")
        .on("load", () => {
            console.log("Карта инициализирована");
            enabledPage();
        })
        .setView({
                lat: 35.6817,
                lng: 139.7513,
            },
            13
        );
    // Поставщик карт
    const layerMap = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
    );

    // Иконка маркера
    const mainPinIcon = L.icon({
        iconUrl: "img/main-pin.svg",
        iconSize: [52, 52],
        iconAnchor: [26, 52],
    });

    const secondaryPinIcon = L.icon({
        iconUrl: "img/pin.svg",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    // Маркер
    const marker = L.marker({
        lat: 35.6817,
        lng: 139.7513,
    }, {
        draggable: true,
        icon: mainPinIcon,
    });

    let endCoordintelat;
    let endCoordintelng;
    let addressForm = document.querySelector("#address");

    // Получение конечных координат при отпуске маркера
    marker.on("moveend", (evt) => {
        let endCoordinte = evt.target.getLatLng();
        endCoordintelat = endCoordinte.lat;
        endCoordintelng = endCoordinte.lng;
        addressForm.value = `x = ${endCoordintelat}, y =${endCoordintelng}`;
    });

    let i = 0;

    responseFetch.forEach((ads) => {
        const marker = L.marker({
            lat: ads.location.lat,

            lng: ads.location.lng,
        }, {
            icon: secondaryPinIcon,
        });
        marker.addTo(map);
        marker.bindPopup(adsList[i]);
        i++;
    });

    // Добавление карт от поставщика и маркеров на карту
    layerMap.addTo(map);
    marker.addTo(map);

    // marker.remove();
};

export { createInteractivMap, disabledPage, enabledPage };
