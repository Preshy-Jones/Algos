/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let arr = sentences[i].split(" ").length;
    console.log(arr);
    if (sentences[i].split(" ").length > max) {
      max = sentences[i].split(" ").length;
    }
  }
  return max;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
