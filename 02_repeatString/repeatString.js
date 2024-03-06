const repeatString = function (string, num) {
  let repeatStr = "";
  if (num < 0) return "ERROR";
  for (let i = 0; i < num; i++) {
    repeatStr += string;
  }
  return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
