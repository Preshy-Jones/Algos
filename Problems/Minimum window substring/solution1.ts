/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === "") {
    return "";
  }
  var tCountMapping = {};
  var window = {};

  console.log(t);

  for (let char of t) {
    console.log(char);

    tCountMapping[char] = 1 + (tCountMapping[char] || 0);
  }

  console.log(tCountMapping);
  let have = 0;
  let need = Object.keys(tCountMapping).length;

  var result = [-1, -1];
  var resultLength = Number.POSITIVE_INFINITY;

  let windowStart = 0;
  for (var windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let currentChar = s[windowEnd];

    window[currentChar] = 1 + (window[currentChar] || 0);

    // if the current char is in the tCountMapping and the count of the current char in the window satisfies the number of characters needed in the tCountMapping then we increment the have by 1
    if (
      currentChar in tCountMapping &&
      window[currentChar] === tCountMapping[currentChar]
    ) {
      have++;
    }

    //if our current result length is greater than the current window length then we update the result
    while (have === need) {
      if (windowEnd - windowStart + 1 < resultLength) {
        result = [windowStart, windowEnd];
        resultLength = windowEnd - windowStart + 1;
      }
      //shrink our window and update the start of the window
      let startChar = s[windowStart];
      window[startChar] -= 1;

      if (
        startChar in tCountMapping &&
        window[startChar] < tCountMapping[startChar]
      ) {
        have--;
      }
      windowStart++;
    }
  }

  console.log(result);

  if (resultLength !== Number.POSITIVE_INFINITY) {
    return s.slice(result[0], result[1] + 1);
  } else {
    return "";
  }
};

console.log(minWindow("a", "aa"));
