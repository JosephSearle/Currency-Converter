const CURRENCY_TYPES = new Map([
    ['Argentine Peso', 1025.12],
    ['Australian Dollar', 1.88],
    ['Bahraini Dinar', 0.47],
    ['Botswana Pula', 17.02],
    ['Brazilian Real', 6.21],
    ['Bruneian Dollar', 1.68],
    ['Bulgarian Lev', 2.26],
    ['Canadian Dollar', 1.68],
    ['Chilean Peso', 1114.12],
    ['Chinese Yuan Renminbi', 9.00],
    ['Colombian Peso', 4942.05],
    ['Czech Koruna', 28.57],
    ['Danish Krone', 8.63],
    ['Emirati Dirham', 4.64],
    ['Euro', 1.15],
    ['Hong Kong Dollar', 9.86],
    ['Hungarian Forint', 440.63],
    ['Icelandic Krona', 174.56],
    ['Indian Rupee', 105.28],
    ['Indonesian Rupiah', 19639.44],
    ['Iranian Rial', 53095.58],
    ['Israeli Shekel', 4.61],
    ['Japanese Yen', 181.43],
    ['Kazakhstani Tenge', 577,71],
    ['Kuwaiti Dinar', 0.38],
    ['Libyan Dinar', 6.04],
    ['Malaysian Ringgit', 5.85],
    ['Mauritian Rupee', 55.72],
    ['Mexican Peso', 21.53],
    ['Nepalese Rupee', 168.54],
    ['New Zealand Dollar', 2.02],
    ['Norwegian Krone', 13.10],
    ['Omani Rial', 0.48],
    ['Pakistani Rupee', 356.11],
    ['Philippine Peso', 70.35],
    ['Polish Zloty', 5.03],
    ['Qatari Riyal', 4.60],
    ['Romanian New Leu', 5.75],
    ['Russian Ruble', 115.60],
    ['Saudi Arabian Riyal', 4.73],
    ['Singapore Dollar', 1.68],
    ['South African Rand', 23.76],
    ['South Korean Won', 1657.00],
    ['Sri Lankan Rupee', 407.87],
    ['Swedish Krona', 12.99],
    ['Swiss Franc', 1.07],
    ['Taiwan New Dollar', 39.24],
    ['Thai Baht', 43.63],
    ['Trinidadian Dollar', 8.55],
    ['Turkish Lira', 37.63],
    ['US Dollar', 1.26],
    ['Venezuelan Bolivar', 4526968.94]
]);


const equalsField = document.getElementById("equals");
const resultField = document.getElementById("result");
const dateAndTimeField = document.getElementById("date");
const currencyInputs = document.getElementsByClassName("currency-input");
const currencySelections = document.getElementsByClassName("currency-selection");

let d = new Date();
let date;
let time;

const formatDate = () => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[d.getMonth()];
    let day = d.getDay();
    date = month + " " + day;
}

const formatTime = () => {
    let hour = d.getHours();
    let mins = d.getMinutes();
    if (mins < 10) mins = "0" + mins;
    time = hour + ":" + mins;
}

const convertCurrency = () => {
    formatDate();
    formatTime();

    const valToConvert = currencyInputs[0].value;
    const currency = currencySelections[1].value;

    // get the valToConvert currency type
    const conversionRate = CURRENCY_TYPES.get(currency);
    // perform the conversion;
    let res = valToConvert * conversionRate;
    
    equalsField.innerHTML = valToConvert + " " + currencySelections[0].value + " equals";
    resultField.innerHTML = res.toFixed(2) + " " + currencySelections[1].value;
    dateAndTimeField.innerHTML = date + ", " + time;
    currencyInputs[1].value = res.toFixed(2);
}

CURRENCY_TYPES.forEach((value, key) => {
    const option = document.createElement('option');
    option.innerHTML = key
    currencySelections[1].appendChild(option);
})

equ
