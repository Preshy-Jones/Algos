//Big O(n x(n+m)) where m is the length of the document and n is the length of the characters o(1) space
function generateDocument(characters, document) {
  // Write your code here.
  let result = true;
  for (let char1 of document) {
    console.log(char1);
    let documentCharacterCount = 0;

    for (let char2 of document) {
      if (char1 === char2) {
        documentCharacterCount++;
      }
    }

    let documentInCharacterCount = 0;
    for (let char3 of characters) {
      if (char3 === char1) {
        documentInCharacterCount++;
      }
    }
    console.log(documentCharacterCount);
    console.log(documentInCharacterCount);
    if (documentInCharacterCount < documentCharacterCount) {
      result = false;
      console.log(char1);
    }
  }
  return result;
}

//Big O(c x(n+m)) where m is the length of the document,n is the length of the characters and c is the number of unique characters in document,  Big o(m) space
function generateDocument2(characters, document) {
  // Write your code here.
  let result = true;
  const counted = new Set();

  for (let char1 of document) {
    console.log(char1);
    let documentCharacterCount = 0;

    if (counted.has(char1) === false) {
      for (let char2 of document) {
        if (char1 === char2) {
          documentCharacterCount++;
        }
      }
    }

    console.log(counted);
    let documentInCharacterCount = 0;
    if (counted.has(char1) === false) {
      for (let char3 of characters) {
        if (char3 === char1) {
          documentInCharacterCount++;
        }
      }
    }
    console.log(documentCharacterCount);
    console.log(documentInCharacterCount);
    if (documentInCharacterCount < documentCharacterCount) {
      result = false;
      console.log(char1);
    }

    counted.add(char1);
  }

  return result;
}

//Big O(o(n+m)) time o(c) space where c is the number of unique characters in characters
function generateDocument3(characters, document) {
  // Write your code here.
  let result = true;
  let characterMapping = {};

  for (let char of characters) {
    //console.log(char);
    characterMapping[char] = 1 + (characterMapping[char] || 0);
  }
  // console.log(characterMapping);

  for (let char2 of document) {
    //console.log(char2);
    if (characterMapping[char2] && characterMapping[char2] > 0) {
      // console.log(char2);
      // console.log(characterMapping[char2]);

      characterMapping[char2] = characterMapping[char2] - 1;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(
  generateDocument3("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

//console.log(generateDocument("abcabc", "aabbccc"));

let dh = new Set();
dh.add("d");
dh.add("d");
dh.add("e");

console.log(dh);
