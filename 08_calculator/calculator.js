const add = function(a, b) {
  return res = a + b;
};

const subtract = function(a, b) {
	return res = a - b;
};

const sum = function(nums) {
	return nums.reduce((sum, a) => sum + a, 0);
};

const multiply = function(nums) {
  return nums.reduce((x, a) => x * a, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let res = 1;
	if (num == 0 || num == 1) return res;

  for (let i = num; i >= 1; i--) {
    res = res * i;
  }

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
