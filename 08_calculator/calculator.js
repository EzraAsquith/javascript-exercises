const add = function(a , b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce(add, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1)
};

const power = function(base, power) {
  let total = 1;
  for(let i = 0; i < power; i++) { 
    total *= base
  }
  return total
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
