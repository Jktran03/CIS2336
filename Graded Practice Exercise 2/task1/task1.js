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
    
    document.getElementById("cValue").onchange = function() {
        let cDegree = document.getElementById("cValue").value;
        document.getElementById("fValue").value = CelsiusToFahrenheit(parseFloat(cDegree)).toFixed(2);
    };
    
    document.getElementById("fValue").onchange = function() {
        let fDegree = document.getElementById("fValue").value;
        document.getElementById("cValue").value = FahrenheitToCelsius(parseFloat(fDegree)).toFixed(2);
    };