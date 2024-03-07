function isInvalidNumber(element) {
  return element < 0 || typeof element !== "number";
}

const sumAll = function (num1, num2) {
  let sum = 0;
  let min = num1;
  let max = num2;
  if (isInvalidNumber(num1) || isInvalidNumber(num2)) {
    return "ERROR";
  }
  if (num2 < num1) {
    min = num2;
    max = num1;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
