//Функция №1 - Получение рандомного числа
const getRandomInteger = (min, max) => {
    if (min < 0 || max < 0) {
        alert('Введите положительное число')
        return -1;
    } else if (min >= max) {;
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция №2 - Получение рандомного числа с плавающей точкой
const getRandomIntegerPoint = (min, max, number) => {
    if (min < 0 || max < 0) {
        alert('Введите положительное число')
        return -1;
    } else if (min >= max) {
        [min, max] = [max, min];
    }
    return ((Math.random() * (max - min)) + min).toFixed(number);
}

//Функция №3 - Получение рандомного элемента массива
const getRandomElementArr = (array) => {
    let randomElement = getRandomInteger(0, array.length - 1);
    return array[randomElement];
}

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

export { getRandomInteger, getRandomIntegerPoint, getRandomElementArr, getRandomStrongArray };
