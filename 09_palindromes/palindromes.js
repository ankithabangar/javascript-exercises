const palindromes = function (str) {
  //Solution1
  // let removeNonAlpha = str
  //   .replace(/[^a-zA-Z0-9]/g, "")
  //   .toLowerCase()
  //   .split("");
  // let index1 = 0;
  // let index2 = removeNonAlpha.length - 1;
  // let flag = true;

  // while (index1 < index2) {
  //   if (removeNonAlpha.at(index1) === removeNonAlpha.at(index2)) {
  //     index1++;
  //     index2--;
  //     continue;
  //   } else {
  //     flag = false;
  //     break;
  //   }
  // }
  // return flag;

  //Solution 2
  let originalStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversedStr = originalStr.split("").reverse().join("");
  return originalStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
