interface Count {
  [key: string]: number;
}

const getNewPattern = (pattern: string[]): string[] => {
  if (pattern && pattern[0] === "y") {
    return pattern.map((char) => {
      if (char === "x") {
        return "y";
      } else if (char === "y") {
        return "x";
      } else {
        return char;
      }
    });
  }
  return pattern;
};

const getCountAndFirstY = (pattern: string[], count: Count) => {
  let firstY = -1;
  console.log(pattern);

  for (let i = 0; i < pattern.length; i++) {
    count[pattern[i]] += 1;
    if (firstY === -1 && pattern[i] === "y") {
      firstY = i;
    }
  }
  return firstY;
};

//time complexity O(n^2 + m) | space complexity O(n + m)
//where n is the length of the pattern and m is the length of the string
// space complexity is O(n + m) because we are creating a new pattern array
export function patternMatcher(pattern: string, string: string) {
  // Write your code here.

  if (pattern.length > string.length) {
    return [];
  }
  let count: {
    x: number;
    y: number;
  } = {
    x: 0,
    y: 0,
  };

  let patternArr = getNewPattern(pattern.split(""));
  console.log(patternArr);
  let didPatternSwitch = patternArr[0] != pattern.split("")[0];
  let firstY = getCountAndFirstY(patternArr, count);
  console.log(count, firstY);

  if (count["y"] > 0) {
    for (let lengthX = 1; lengthX < string.length; lengthX++) {
      let lengthY = (string.length - lengthX * count["x"]) / count["y"];
      console.log(lengthY);

      if (lengthY <= 0 || lengthY % 1 !== 0) {
        continue;
      }

      let yIdx = lengthX * firstY;
      console.log(yIdx);

      let xChar = string.slice(0, lengthX);
      let yChar = string.slice(yIdx, yIdx + lengthY);

      console.log(yChar);

      let potentialString = patternArr.map((char) => {
        if (char === "x") {
          return xChar;
        } else if (char === "y") {
          return yChar;
        }
      });

      if (potentialString.join("") === string) {
        return didPatternSwitch ? [yChar, xChar] : [xChar, yChar];
      }
    }
  } else {
    let lengthX = string.length / count["x"];
    if (lengthX % 1 === 0) {
      let xChar = string.slice(0, lengthX);
      let potentialString = patternArr.map((char) => {
        return xChar;
      });
      if (potentialString.join("") === string) {
        return didPatternSwitch ? ["", xChar] : [xChar, ""];
      }
    }
  }

  return [];
}

console.log(patternMatcher("xxyxxy", "gogopowerrangergogopowerranger"));
console.log(patternMatcher("yxxyxx", "powerrangergogopowerrangergogo"));
console.log(patternMatcher("xxx", "gogogo"));

let bolu = "shdhddjss";
console.log(bolu.split(""));

let blah = 13;
console.log(blah % 1);

console.log(bolu.slice(3));
