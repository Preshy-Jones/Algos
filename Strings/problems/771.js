/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let keys = {};
  for (let i = 0; i < stones.length; i++) {
    let char = stones[i];
    console.log(char);
    console.log(1 + (keys[char] || 0));
    keys[char] = 1 + (keys[char] || 0);
  }
  console.log(keys);
  let result = 0;

  for (let char of jewels) {
    console.log(keys[char]);
    result += keys[char] || 0;
  }
  return result;
  console.log(keys);
};

var numJewelsInStones2 = function (jewels, stones) {
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.indexOf(stones[i]) !== -1) {
      result++;
    }
  }
  return result;
};

var numJewelsInStones3 = function (jewels, stones) {
  let res = 0;

  for (let index = 0; index < jewels.length; index++) {
    let re = new RegExp(jewels[index], "g");
    console.log(re);
    console.log(stones.match(re).length);
    if (stones.match(re) != null) res += stones.match(re).length;
  }

  return res;
};


console.log(numJewelsInStones3("aA", "aAAbbAbb"));
