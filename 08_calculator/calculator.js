const add = function (input, ...inputs) {
  let sum = 0;
  sum = input + parseInt(inputs);
  return sum;
};

const subtract = function (input, ...inputs) {
  let minus = 0;
  minus = input - inputs;
  return minus;
};

const sum = function (inputs) {
  let add = inputs.reduce((accumulator, ele) => accumulator + ele, 0);
  return add;
};

const multiply = function (inputs) {
  let multi = inputs.reduce(
    (accumulator, currentItem) => accumulator * currentItem
  );
  return multi;
};

const power = function (num1, num2) {
  let powerOf = num1 ** num2;
  return powerOf;
};

const factorial = function (num) {
  let facto = 1;
  while (num > 1) {
    facto *= num;
    num--;
  }
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
