//O(n x m) time O(c) where n is the length of the input string array, m is the lenght of the string with the maximum number of characters, and c is the number of unique characters
function commonCharacters(strings) {
  // Write your code here.
  const characterCount = new Map();

  for (let char of strings) {
    console.log(char);
    let charSet = new Set(char.split(""));
    console.log(charSet);
    for (let char of charSet) {
      characterCount.set(char, 1 + (characterCount.get(char) || 0));
    }
  }
  console.log(characterCount);
  let result = [];
  characterCount.forEach((value, key) => {
    console.log(value, key);
    if (value === strings.length) {
      result.push(key);
    }
  });
  console.log(result);
  return result;
}

//O(n x m) time O(m) where n is the length of the input string array, m is the lenght of the string with the maximum number of characters,
function commonCharacters2(strings) {
  // Write your code here.

  let smallestString = strings[0];

  for (let char of strings) {
    console.log(char);
    if (char.length < smallestString.length) {
      smallestString = char;
    }
  }
  console.log(smallestString);
  let potentialCommonChar = new Set(smallestString.split(""));
  console.log(potentialCommonChar);
  for (let char of strings) {
    console.log(char);
    potentialCommonChar.forEach((element) => {
      console.log(element);
      if (char.includes(element) === false) {
        potentialCommonChar.delete(element);
      }
    });
  }
  return [...potentialCommonChar];
}

// function commonCharacters3(strings) {
//   // Write your code here.

//   let smallestString = strings[0];

//   for (let char of strings) {
//     console.log(char);
//     if (char.length < smallestString.length) {
//       smallestString = char;
//     }
//   }
//   console.log(smallestString);
//   let potentialCommonChar = smallestString.split("");
//   console.log(potentialCommonChar);
//   for (let char of strings) {
//     console.log(char);
//     for (i in potentialCommonChar) {
//       console.log(potentialCommonChar[i]);

//       if (char.includes(potentialCommonChar[i]) === false) {
//         potentialCommonChar.splice(i, 1);
//       }
//     }
//   }
//   return potentialCommonChar;
// }

// Do not edit the line below.
exports.commonCharacters = commonCharacters;

console.log(commonCharacters(["bella", "label", "roller"]));

let testSet = new Set();

testSet.add("jabba");
testSet.add("jba");
testSet.add("ja");
testSet.delete("ja");

testSet.forEach((element) => {
  console.log(element);
});
console.log(testSet.keys());

// for (char of testSet) {
//   console.log(char);
// }

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i]);

  if (arr[i] % 2 === 0) {
    arr.splice(i, 1);
  }
}

console.log(arr);

let testMap = new Map();
testMap.set("a", 1);
console.log(testMap);
testMap.set("a", 2);
console.log(testMap.get("b"));
