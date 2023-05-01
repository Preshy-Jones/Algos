//Goal Parser Interpretation

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const keys = {
    G: "G",
    "()": "o",
    "(al)": "al",
  };
  let stringArr = command.split("");
  return command.split("()").join("o").split("(al)").join("al");
};

var interpret2 = function (command) {
  let blah = command.replace("()", "o").replace("(al)","al");
  return blah;
};

console.log(interpret2("G()(al)"));

const blah = "sjjlsj";

console.log(blah.indexOf("lsj"));
