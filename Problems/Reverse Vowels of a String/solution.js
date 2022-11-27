/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var arr = [];
  var str = "";
  let outputStr = s;
  let lowerCaseStr = s.toLowerCase();
  for (i in lowerCaseStr) {
    if (
      lowerCaseStr[i] === "a" ||
      lowerCaseStr[i] === "e" ||
      lowerCaseStr[i] === "i" ||
      lowerCaseStr[i] === "o" ||
      lowerCaseStr[i] === "u"
    ) {
      arr.push(i);
      str += s[i];
    }
  }

  for (i in arr) {
    let reversedStr = str.split("").reverse().join("");
    let resultArray = outputStr.split("");

    resultArray[arr[i]] = reversedStr[i];
    outputStr = resultArray.join("");
  }

  return outputStr;
};

console.log(reverseVowels("aA"));
