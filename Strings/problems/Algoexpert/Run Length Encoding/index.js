//O(n) space O(n) time where n is the lenght of the input string
function runLengthEncoding(string) {
  // Write your code here.

  let resultArr = [];
  let length = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      //if the character current character run is equal to 9 set the length back to 1
      if (length === 9) {
        resultArr.push(length, string[i - 1]);
        length = 1;
      } else {
        length++;
        console.log(length);
      }
    } else {
      resultArr.push(length, string[i - 1]);

      length = 1;
    }
  }

  resultArr.push(length, string[string.length - 1]);
  console.log(length);
  return resultArr.join("");
}

function runLengthEncoding2(string) {
  // Write your code here.

  let resultArr = [];
  let length = 1;
  for (let i = 1; i < string.length; i++) {
    if (length === 9 || string[i] !== string[i - 1]) {
      resultArr.push(length, string[i - 1]);
      length = 1;
    } else {
      length++;
    }
  }

  resultArr.push(length, string[string.length - 1]);
  console.log(length);
  return resultArr.join("");
}

function runLengthEncoding3(string) {
  // Write your code here.

  let resultArr = [];
  let length = 1;
  for (let i = 1; i < string.length; i++) {
    if (length === 9 || string[i] !== string[i - 1]) {
      resultArr.push(length, string[i - 1]);
      length = 0;
    }
    length++;
  }

  resultArr.push(length, string[string.length - 1]);
  console.log(length);
  return resultArr.join("");
}

console.log(runLengthEncoding3("AAAAAAAAAAAAABBCCCCDD"));

console.log(12 % 9);
