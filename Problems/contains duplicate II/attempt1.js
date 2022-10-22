var containsNearbyDuplicate = (nums, k) => {
  let indexPairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        indexPairs.push([i, j]);
      }
    }
  }
  console.log(indexPairs);
  if (indexPairs.length === 0) return false;

  return indexPairs.some((arr) => {
    return Math.abs(arr[0] - arr[1]) <= k;
  });
};


