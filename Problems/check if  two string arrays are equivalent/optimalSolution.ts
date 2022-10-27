interface Arg {
  word1: string[];
  word2: string[];
}
var arrayStringsAreEqual = (word1, word2) => {
  var word1Idx = 0;
  var word2Idx = 0;

  var char1Idx = 0;
  var char2Idx = 0;

  while (word1Idx < word1.length && word2Idx < word2.length) {
    //get the charcater of the present character index in the present word index in each string array
    var char1 = word1[word1Idx][char1Idx];
    var char2 = word2[word2Idx][char2Idx];
    //if the characters are not equal, return false
    if (char1 !== char2) return false;

    //increment the character index
    char1Idx++;
    char2Idx++;

    //if the charater index after being incremented is greater or equal to the current individual character length it means we have reached the end of the current word in the string array
    if (char1Idx >= word1[word1Idx].length) {
      word1Idx++;
      char1Idx = 0;
    }
    if (char2Idx >= word2[word2Idx].length) {
      word2Idx++;
      char2Idx = 0;
    }
  }

  return word1Idx === word1.length && word2Idx === word2.length;
};
