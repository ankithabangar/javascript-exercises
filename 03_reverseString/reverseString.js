const reverseString = function (string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse().join("");
  return reverseArray;
};

// Do not edit below this line
module.exports = reverseString;
