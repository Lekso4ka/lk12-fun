// Получить случайное число
export const getNumber = (n) => Math.floor(Math.random() * n); // [0,n) => [0, n-1]

// Получить случайный цвет
export const getColor = () => {
    // rgb(200, 176, 54)
    const red = getNumber(256), // 0 - 255
          green = getNumber(256),
          blue = getNumber(256);
    return `rgb(${red},${green},${blue})`;
}

// Инвертировать цвет
export const invert = (color) => {
    const result = color.match(/\d+/g);
    const red = 255 - result[0], // 255 - color.red
          green = 255 - result[1],
          blue = 255 - result[2];
    return `rgb(${red},${green},${blue})`;
}

// Получить цвет текста, который будет хорошо виден на цветом фоне (ч или б)
export const getTextColor = (color) => {
    const result = color.match(/\d+/g);
    const cnt = result.reduce((sum,n) => sum + +n, 0);
    // console.log(result, cnt);
    // cnt = 60 => темный фон => цвет текста дб белый
    // cnt = 600 => светлый фон => цвет текста будет черным
    return cnt < (255 * 3 / 2) ? "white" : "black";
}

// export {getNumber, getColor, invert, getTextColor};