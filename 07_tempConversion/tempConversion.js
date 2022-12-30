const convertToCelsius = function(fahrenheit) {
  const celcuisTemp = fahrenheit;
  const celToFahr = Math.round((celcuisTemp - 32) * (5/9) * 10) / 10;

  return celToFahr;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheitTemp = celsius;
  const farhToCel = Math.round(((fahrenheitTemp * 9/5) + 32) * 10) / 10;

  return farhToCel;
};

// Do not edit below this line..
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
