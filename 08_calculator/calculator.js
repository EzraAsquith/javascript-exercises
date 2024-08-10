const add = function(a , b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0;
  for(let i=0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let sum = 1;
  for(let i=0; i < arr.length; i++) {
    sum *= arr[i]
  }
  return sum
};

const power = function(base, power) {
  let result = 1;
	for(let i=0; i < power; i++) {
    result *= base
  }
  return result
};

const factorial = function(fact) {
	let result = 1;
  for(let i = 1; i <= fact; i++) {
    result *= i
  }
  return result
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
