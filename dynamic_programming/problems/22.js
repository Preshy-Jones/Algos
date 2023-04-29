/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  let stack = [];

  let backTrack = (open, close) => {
    if (open === close && open === n) {
      result.push(stack.join(""));
      console.log(result);
      return;
    }

    if (open < n) {
      stack.push("(");
      backTrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backTrack(open, close + 1);
      stack.pop();
    }
  };

  backTrack(0, 0);
  return result;
};

console.log(generateParenthesis(3));
