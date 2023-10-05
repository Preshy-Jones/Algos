// function validIPAddresses(string) {
//   // Write your code here.
//   const result = [];
//   for (let i = 1; i < string.length && i < 4; i++) {
//     const currentIPAddressParts = ["", "", "", ""];
//     currentIPAddressParts[0] = string.slice(0, i);
//     if (!isValidPart(currentIPAddressParts[0])) {
//       continue;
//     }
//     for (let j = i + 1; j < i + 4 && j < string.length; j++) {
//       currentIPAddressParts[1] = string.slice(i, j);
//       if (!isValidPart(currentIPAddressParts[1])) {
//         continue;
//       }
//       for (let k = j + 1; k < j + 4 && k < string.length; k++) {
//         currentIPAddressParts[2] = string.slice(j, k);
//         currentIPAddressParts[3] = string.slice(k);
//         if (
//           isValidPart(currentIPAddressParts[2]) &&
//           isValidPart(currentIPAddressParts[3])
//         ) {
//           result.push(currentIPAddressParts.join("."));
//         }
//       }
//     }
//   }
// }

// function isValidPart(string) {
//   const stringAsInt = parseInt(string);
//   if (stringAsInt > 255) {
//     return false;
//   }
//   return string.length === stringAsInt.toString().length;
// }

// console.log(validIPAddresses("1921680"));
