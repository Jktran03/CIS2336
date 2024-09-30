/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jason Tran
      Date:   9/30/2024

      Filename: task1_JS.JavaScript
 */
alert("JavaScript is working!"); // This should pop up when the page loads
function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
  }
  
  // Function to convert Celsius to Fahrenheit
  function CelsiusToFahrenheit(degree) {
      return (degree * 1.8) + 32;
  }
  
  // Event handler for Celsius input (convert when the user changes value)
  document.getElementById("cValue").oninput = function() {
      let cDegree = document.getElementById("cValue").value;
      
      if (cDegree !== '') {
          // Convert Celsius to Fahrenheit and update the Fahrenheit input
          let fValue = CelsiusToFahrenheit(parseFloat(cDegree)).toFixed(2);
          document.getElementById("fValue").value = fValue;
      } else {
          // Clear the Fahrenheit input if Celsius input is empty
          document.getElementById("fValue").value = '';
      }
  };
  
  // Event handler for Fahrenheit input (convert when the user changes value)
  document.getElementById("fValue").oninput = function() {
      let fDegree = document.getElementById("fValue").value;
      
      if (fDegree !== '') {
          // Convert Fahrenheit to Celsius and update the Celsius input
          let cValue = FahrenheitToCelsius(parseFloat(fDegree)).toFixed(2);
          document.getElementById("cValue").value = cValue;
      } else {
          // Clear the Celsius input if Fahrenheit input is empty
          document.getElementById("cValue").value = '';
      }
  };
