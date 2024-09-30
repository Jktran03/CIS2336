/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jason Tran
      Date:   9/30/2024

      Filename: task1_JS.JavaScript
 */
function FahrenheitToCelsius(degree) {
    return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
    return (degree * 1.8) + 32;
}

document.getElementById("cValue").oninput = convertCelsiusToFahrenheit;
document.getElementById("cValue").onblur = convertCelsiusToFahrenheit;

document.getElementById("fValue").oninput = convertFahrenheitToCelsius;
document.getElementById("fValue").onblur = convertFahrenheitToCelsius;

function convertCelsiusToFahrenheit() {
    let cDegree = document.getElementById("cValue").value;

    if (cDegree !== '') {
        let fValue = CelsiusToFahrenheit(parseFloat(cDegree)).toFixed(2);
        document.getElementById("fValue").value = fValue;
    } else {
        document.getElementById("fValue").value = '';
    }
}

function convertFahrenheitToCelsius() {
    let fDegree = document.getElementById("fValue").value;

    if (fDegree !== '') {
        let cValue = FahrenheitToCelsius(parseFloat(fDegree)).toFixed(2);
        document.getElementById("cValue").value = cValue;
    } else {
        document.getElementById("cValue").value = '';
    }
}