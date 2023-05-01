export function isPalindrome(string) {
  let newString = string.toLowerCase().replace(/[^0-9a-z]/g, "");
  // Write your code here.
  const newArr = [];

  let stringArr = newString.split("");

  for (let i = stringArr.length - 1; i >= 0; i--) {
    //console.log(stringArr[i]);
    newArr.push(stringArr[i]);
  }

  return newArr.join("") == newString;
}

//O(n) time O(n)
const isPalindrome2 = (string) => {
  let newString = string.toLowerCase().replace(/[^0-9a-z]/g, "");
  const checkIsPalindrome = (string, i = 0) => {
    let j = string.length - 1 - i;
    if (i >= j) {
      return true;
    } else if (string[i] !== string[j]) {
      return false;
    }
    return checkIsPalindrome(string, i + 1);
  };

  return checkIsPalindrome(newString);
};

const isPalindrome3 = (string) => {
  let newString = string.toLowerCase().replace(/[^0-9a-z]/g, "");
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (newString[left] != newString[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }
  return true;
};

console.log(isPalindrome3("aba"));
