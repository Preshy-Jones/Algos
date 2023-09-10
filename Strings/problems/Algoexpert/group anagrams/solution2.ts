function groupAnagrams2(words: string[]) {
  let anagramKeyPairs = {};

  for (let word of words) {
    //    console.log(word);

    let sortedWord = word.split("").sort().join("");
    console.log(sortedWord);

    if (sortedWord in anagramKeyPairs) {
      anagramKeyPairs[sortedWord].push(word);
    } else {
      anagramKeyPairs[sortedWord] = [word];
    }
  }

  return Object.values(anagramKeyPairs);
}

const words2 = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

console.log(groupAnagrams2(words2));

//time complexity O(w * n * log(n)) - nlog(n) is the time complexity taken to sort each word in the loop and that
// is multiplied by w which is the length of the array, because the sorting algorithm is called w times.

//Space complexity  O(w * n)

// w = number of words in  the input array and n is the length of the longest word in the input array
