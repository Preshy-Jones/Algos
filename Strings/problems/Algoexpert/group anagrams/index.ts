function groupAnagrams(words: string[]) {
  if (words.length === 0) {
    return [];
  }
  // Write your code here.
  // sort each word in the words array alphabetically, this ensures that
  // every anagram words are converted to the same word since they are all arranged alphabetically
  let sortedWords = words.map((word) => {
    return word.split("").sort().join("");
  });
  // initialize an array of indices of the same length as the words array
  let indices: number[] = [];
  for (let word in words) {
    indices.push(Number(word));
  }

  //sort the indices array based on the sortedWords array, the arranges the indices array in such a way that the indices 
  //of the same anagram words are grouped together in the indices array
  // for example, if the words array is ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
  // the sortedWords array will be ["oy", "act", "flop", "act", "foo", "act", "oy", "flop"]
  // the indices array will be [0, 1, 2, 3, 4, 5, 6, 7]
  // sorting the words array alphabetically will give ["act", "act", "act", "cat", "flop", "flop", "foo", "oy" ]
  // after sorting the indices array, it will be [1, 3, 5, 2, 7, 0, 4, 6]
  // these new indices array contains the indices of the words in the original sortedWords array in the order of the anagram words grouped together
  // this means that the indices of the anagram words "oy", "tac", "act", "flop" are grouped together in the indices array
  // this is because the sortedWords array is sorted alphabetically
  // so the indices array is sorted based on the sortedWords array
  indices = indices.sort((a: number, b: number) => {
    let stringA = sortedWords[a];
    let stringB = sortedWords[b];
    if (stringA < stringB) {
      return -1; // a comes before b
    } else if (stringA > stringB) {
      return 1; // a comes after b
    } else {
      return 0; // a and b are equal
    }
  });



  let currentAnagram = sortedWords[indices[0]];
  let currentAnagramGroup: string[] = [];
  let result: string[][] = [];

  //loop through our sorted indices, and group the anagram words together. when the current anagram word is different from the previous one,
  // we push the current anagram group into the result array and start a new anagram group
  // we also push the last anagram group into the result array after the loop is done because the way the loop is written, the last anagram group
  // will not be pushed into the result array
  for (let index of indices) {
    let sortedWord = sortedWords[index];
    let word = words[index];
    if (currentAnagram === sortedWord) {
      currentAnagramGroup.push(word);
      continue;
    }

    result.push(currentAnagramGroup);
    currentAnagram = sortedWord;
    currentAnagramGroup = [word];
  }
  result.push(currentAnagramGroup);
  return result;
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

console.log(groupAnagrams(words));

//Time complexity O(w * n * log(n)  + n * w * log(w)) where:

//O(w * n * log(n) - the best sorting algorithms always have a nlog(n) time complexity where n is the length of the array,
//so this part of the O notation is the time complexity of sorting each word in the words array alphabetically

//+

//n * w * log(w) - this part of the O notation is the time complexity of sorting the indices array based on the sortedWords array, 
// w log(w) is the time complexity of sorting the indices array and n is the length of the longest word in the sortedWords array

//Space complexity  O(w * n) - the sortedWords array takes O(w*n) to create, if there are w strings in the input array, each string
//element is split into n elements to form an array, where n is the longest string in the input array, therefore w * n space is taken


// w = number of words in  the input array and n is the length of the longest word in the input array
