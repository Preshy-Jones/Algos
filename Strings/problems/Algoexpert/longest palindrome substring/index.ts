function getLongestPalindromeFrom(currentStart, currentEnd, string) {
  console.log(currentStart, currentEnd);

  while (currentStart >= 0 && currentEnd < string.length) {
    if (string[currentStart] !== string[currentEnd]) {
      break;
    } else {
      currentStart--;
      currentEnd++;
    }
  }
  return { left: currentStart + 1, right: currentEnd };
}

function longestPalindromicSubstring(string) {
  // Write your code here.

  //initializing starting indices
  let currentLongestStart = 0;
  let currentLongestEnd = 1;
  for (let i = 0; i < string.length; i++) {
    let longestLeft = 0;
    let longestRight = 0;
    //an odd palindrome has a middle character and the characters on the left and right are the same
    let odd = getLongestPalindromeFrom(i - 1, i + 1, string);

    //an even palindrom starts out from the middle of two characters which are the same
    let even = getLongestPalindromeFrom(i - 1, i, string);
    //console.log(odd, even);
    let oddLength = odd.right - odd.left;
    let evenLength = even.right - even.left;
    //  console.log(oddLength, evenLength);

    //setting the longest palindrome from among either the odd or even palindrom
    if (oddLength > evenLength) {
      longestLeft = odd.left;
      longestRight = odd.right;
    }
    if (evenLength > oddLength) {
      longestLeft = even.left;
      longestRight = even.right;
    }

    //updating the current maximum palindrom depending on if the current longest palindrom is shorter than the one just gotten from the loop
    let longestLength = longestRight - longestLeft;
    let currentLongestLength = currentLongestEnd - currentLongestStart;

    if (longestLength > currentLongestLength) {
      currentLongestStart = longestLeft;
      currentLongestEnd = longestRight;
    }
  }
  //  console.log(currentLongestStart, currentLongestEnd);
  return string.slice(currentLongestStart, currentLongestEnd);
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
console.log(longestPalindromicSubstring("sharaingan"));

let brover = "dhjdhd";

let sharingan = brover;
brover = "hdhdh";
let blah = "a";
console.log(brover.slice(0, 1));
console.log(sharingan);
