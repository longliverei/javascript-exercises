const convertToCelsius = function(temp) {
  const res = (temp - 32) / 1.8;
  
  return Math.round(res * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const res = (temp * 1.8) + 32;

  return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
