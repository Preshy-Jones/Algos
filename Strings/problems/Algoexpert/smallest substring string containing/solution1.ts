function smallestSubstringContaining(bigString, smallString) {
  // Write your code here.
  let smallStringCharMapping = {};

  // get a mapping of the number of times each character appears in the small string
  for (let char of smallString) {
    console.log(char);
    smallStringCharMapping[char] = 1 + (smallStringCharMapping[char] || 0);
  }

  // get the number of unique characters in the small string
  let numberOfUniqueChars = Object.keys(smallStringCharMapping).length;
  console.log(numberOfUniqueChars);
  let leftIdx = 0;
  let rightIdx = 0;

  let requirementCounter = 0;
  let result: number[] = [0, Number.POSITIVE_INFINITY];
  let bigStringMapping = {};

  // iterate through the big string using the two pointers
  while (rightIdx < bigString.length) {
    let rightChar = bigString[rightIdx];

    console.log(rightIdx);

    // if the right character is not in the small string, move the right pointer
    if (!smallStringCharMapping[rightChar]) {
      rightIdx++;
      continue;
    }
    console.log(requirementCounter);

    // if the right character is in the small string, increment the number of times it appears in the big string
    bigStringMapping[rightChar] = 1 + (bigStringMapping[rightChar] || 0);

    // if the number of times the right character appears in the big string is equal to the number of times it appears in the small string,
    // increment the requirement counter. This means that in the big string, we have found the required number of times that the character appears 
    //in the small string
    if (bigStringMapping[rightChar] === smallStringCharMapping[rightChar]) {
      requirementCounter++;
    }

    // if the requirement counter is equal to the number of unique characters in the small string, we have found a substring that contains all the characters
    // in the small string. We now need to move the left pointer to the right until we find the smallest substring that contains all the characters in the small string
    while (requirementCounter === numberOfUniqueChars && leftIdx <= rightIdx) {
      let currentResultLength = result[1] - result[0];
      let newResultLength = rightIdx - leftIdx;

      // if the new substring is smaller than the current substring, update the result
      if (newResultLength < currentResultLength) {
        result = [leftIdx, rightIdx];
      }

      let leftChar = bigString[leftIdx];

      // if the left character is not in the small string, move the left pointer
      if (!smallStringCharMapping[leftChar]) {
        leftIdx++;
        continue;
      }

      // if the left character is in the small string, decrement the number of times it appears in the big string
      if (smallStringCharMapping[leftChar] === bigStringMapping[leftChar]) {
        requirementCounter--;
      }
      bigStringMapping[leftChar] -= 1;
      leftIdx++;
    }

    rightIdx++;
  }

  if (result[1] === Number.POSITIVE_INFINITY) {
    return "";
  }
  return bigString.slice(result[0], result[1] + 1);
}

console.log(smallestSubstringContaining("abcd$ef$axb$c$", "$$abf"));

let char = { gh: "dd" };

if (!char["dd"]) {
  console.log("hello");
}

console.log();
