/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let charArray = s.split("");

  i = 0;
  j = charArray.length - 1;

  while (i < j) {
    //keep incrementing i until we find a vowel
    while (i < j && !vowels.includes(charArray[i])) {
      i++;
    }

    //keep decrementing j until we find a vowel
    while (i < j && !vowels.includes(charArray[j])) {
      j--;
    }

    //swap the vowels
    let temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;

    //increment i and decrement j to continue the loop
    i++;
    j--;
  }

  //convert array back to string
  return charArray.join("");
};

console.log(reverseVowels("aA"));
