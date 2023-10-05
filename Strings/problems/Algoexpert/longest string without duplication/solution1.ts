export function longestSubstringWithoutDuplication(string: string) {
  // Write your code here.
  let result = "";
  let startIdx = 0;
  let lastSeen = new Map();
  for (let i = 0; i < string.length; i++) {
    let currStr = string.slice(startIdx, i + 1);
    let currentCharacter = string[i];
    console.log(currentCharacter);

    console.log(currStr);
    console.log(startIdx);
    console.log(!lastSeen.has(currentCharacter));
    console.log(lastSeen);

    if (!lastSeen.has(currentCharacter)) {
      lastSeen.set(currentCharacter, i);
      if (currStr.length > result.length) {
        result = currStr;
      }
    } else {
      console.log(currentCharacter, lastSeen.get(currentCharacter));

      startIdx = Math.max(startIdx, lastSeen.get(currentCharacter) + 1);
      console.log(startIdx);

      currStr = string.slice(startIdx, i + 1);
      if (currStr.length > result.length) {
        result = currStr;
      }
      lastSeen.set(currentCharacter, i);
    }
  }
  return result;
}

console.log(longestSubstringWithoutDuplication("clementisacap"));

// Write a function that takes in a string and returns its longest substring
// without duplicate characters.
[1]
// You can assume that there will only be one longest substring without duplication.

let str1 = "ghj";
console.log(str1.slice(0, 3));
