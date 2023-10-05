export function underscorifySubstring(string: string, substring: string) {
  let locations = collapse(getLocations(string, substring));
  console.log(locations);

  return underscorify(string, locations);
}

// the getLocations function will return an array of arrays where each subarray is a location of the substring in the string

const getLocations = (string: string, substring: string) => {
  let locations: number[][] = [];

  let startIdx = 0;
  // loop through the string and find the first occurence of the substring
  while (startIdx < string.length) {
    // the nextIdx will be the index of the first occurence of the substring in the string
    let nextIdx = string.indexOf(substring, startIdx);

    // if the nextIdx is not -1 then we found the substring in the string
    if (nextIdx != -1) {
      // we push the start and end index of the substring in the string into the locations array
      locations.push([nextIdx, nextIdx + substring.length]);

      // we update the startIdx to be the nextIdx + 1 so that we can find the next occurence of the substring in the string
      startIdx = nextIdx + 1;
    } else {
      break;
    }
  }

  console.log(locations);

  return locations;
};

// the collapse function will collapse the locations array so that there are no overlapping locations
// time complexity O(n) where n is the length of the locations array
// space complexity O(n) where n is the length of the locations array
const collapse = (locations: number[][]) => {
  console.log(locations);
  if (locations.length === 0) {
    return locations;
  }

  // we create a newLocations array and push the first location into it
  let newLocations = [locations[0]];

  // we set the previousLocation to be the first location in the locations array
  let previousLocation = newLocations[0];
  console.log(newLocations);

  // we loop through the locations array starting at the second location
  for (let i = 0; i < locations.length; i++) {
    // we set the currentLocation to be the current location in the locations array
    let currentLocation = locations[i];

    // if the currentLocation[0] is less than or equal to the previousLocation[1] then we update the previousLocation[1] to be the currentLocation[1]
    // this is because the currentLocation is overlapping with the previousLocation
    // if the currentLocation[0] is greater than the previousLocation[1] then we push the currentLocation into the newLocations array and set the previousLocation
    // to be the currentLocation

    if (currentLocation[0] <= previousLocation[1]) {
      previousLocation[1] = currentLocation[1];
    } else {
      newLocations.push(currentLocation);
      previousLocation = currentLocation;
    }
  }
  return newLocations;
};

// the underscorify function will underscorify the string based on the locations array
// time complexity O(n) where n is the length of the string + the length of the locations array
// space complexity O(n) where n is the length of the string
const underscorify = (string: String, locations: number[][]) => {
  console.log(locations);

  // we create a finalChars array that will hold the final string
  let finalChars: String[] = [];

  // we set the stringIdx to be 0 and the locationsIdx to be 0
  let stringIdx = 0;
  let locationsIdx = 0;

  // we set the inBetweenUnderscores to be false which will be used to determine if we are in between underscores
  let inBetweenUnderscores = false;

  // we set the i to be 0 which will be used to determine if we are at the start or end of the current location
  let i = 0;

  // we loop through the string and the locations array
  while (stringIdx < string.length && locationsIdx < locations.length) {
    // if the stringIdx is equal to the start or end of the current location then we push an underscore into the
    // finalChars array and set the inBetweenUnderscores to be the opposite of what it was

    if (stringIdx === locations[locationsIdx][i]) {
      finalChars.push("_");
      inBetweenUnderscores = !inBetweenUnderscores;
      console.log(locationsIdx);
      console.log(stringIdx);

      console.log(string.length);

      // if the inBetweenUnderscores is false then we increment the locationsIdx by 1
      // this is because we are at the end of the current location and we need to move to the next location
      if (!inBetweenUnderscores) {
        locationsIdx++;
      }
      console.log(locationsIdx);
      // if the inBetweenUnderscores is true then we set the i to be the opposite of what it was
      i = i == 0 ? 1 : 0;
    }
    // we push the current character into the finalChars array
    finalChars.push(string[stringIdx]);
    stringIdx++;
    console.log(stringIdx);
  }
  console.log(locationsIdx);
  console.log(stringIdx);

  // if the locationsIdx is less than the length of the locations array then we push an underscore into the finalChars array
  // this is because we have reached the end of the string and there are still locations left in the locations array


  if (locationsIdx < locations.length) {
    finalChars.push("_");
  }
  if (stringIdx < string.length) {
    finalChars.push(string.slice(stringIdx));
  }

  return finalChars.join("");
};

// console.log(
//   underscorifySubstring(
//     "testthis is a testtest to see if testestest it works",
//     "test"
//   )
// );

console.log(
  underscorifySubstring("this is a test to see if it works and test", "test")
);

//time complexity O(n+m) where n is the length of the string and m is the length of the substring



//space complexity O(n) where n is the length of the string
