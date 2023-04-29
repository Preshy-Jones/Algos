const caesarCipherEncryptor = (string, key) => {
  let alphabetToKeys = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let keysToAlphabet = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  let stringArr = string.split("");

  let newKey = key % 26;
  for (let i = 0; i < stringArr.length; i++) {
    let alphabetIndex = alphabetToKeys[stringArr[i]] + newKey;
    if (alphabetIndex > 26) {
      alphabetIndex = alphabetIndex - 26;
    }

    let alphabet = keysToAlphabet[alphabetIndex];

    stringArr[i] = keysToAlphabet[alphabetIndex];
  }
  return stringArr.join("");
};


//O(n) time O(n) space
const caesarCipherEncryptor2 = (string, key) => {
  console.log("a".charCodeAt(0));
  console.log((96 + 122) % 122);

  let stringArr = string.split("");
  console.log("z".charCodeAt(0));
  let newKey = key % 26;
  console.log(newKey);
  for (let i = 0; i < stringArr.length; i++) {
    let alphabetIndex = stringArr[i].charCodeAt(0) + newKey;
    console.log(alphabetIndex);
    if (alphabetIndex > 122) {
      alphabetIndex = alphabetIndex - 26;
    }

    console.log(alphabetIndex);
    let alphabet = String.fromCharCode(alphabetIndex);
    console.log(alphabet);

    stringArr[i] = alphabet;
  }
  return stringArr.join("");
};

const caesarCipherEncryptor3 = (string, key) => {
  console.log("a".charCodeAt(0));

  let stringArr = string.split("");
  console.log("z".charCodeAt(0));
  let newKey = key % 26;
  console.log(newKey);
  for (let i = 0; i < stringArr.length; i++) {
    let alphabetIndex = stringArr[i].charCodeAt(0) + newKey;
    console.log(alphabetIndex);
    if (alphabetIndex > 122) {
      alphabetIndex = alphabetIndex - 26;
    }

    console.log(alphabetIndex);
    let alphabet = String.fromCharCode(alphabetIndex);
    console.log(alphabet);

    stringArr[i] = alphabet;
  }
  return stringArr.join("");
};

console.log(caesarCipherEncryptor2("xyz", 345443345554));

console.log(25 % 26);
