//°C to F
function celsiusToFahrenheit(celsius){
    let Fahrenheit=(celsius*1.8)+32;
    alert(`${celsius}°C is ${Fahrenheit}°F`);
}
//F to °C
function fahrenheitToCelsius(Fahrenheit){
    let celsius=(Fahrenheit-32)/1.8;
    alert(`${Fahrenheit}°F is ${celsius}°C  `);
}
//Goi ham
celsiusToFahrenheit(10);
fahrenheitToCelsius(50);