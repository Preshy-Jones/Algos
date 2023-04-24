/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function (address) {
  let arr = address.split(".");
  let result = arr.join("[.]");
  return result;
  console.log(arr);
};

let defangIPaddr2 = function (address) {
  let result = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result += "[.]";
    } else {
      result += address[i];
    }
  }
  return result;
};

let defangIPaddr3 = function (address) {
  let result = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result.push("[.]");
    } else {
      result.push(address[i]);
    }
  }
  return result.join("");
};

console.log(defangIPaddr3("1.1.1.1"));
