const fibonacci = function (member) {
  let sum = [1, 1];
  if (member == 0) return 0;
  else if (member < 0) return "OOPS";
  for (let i = 2; i <= member; i++) {
    sum.push(sum[i - 1] + sum[i - 2]);
  }
  return sum[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
