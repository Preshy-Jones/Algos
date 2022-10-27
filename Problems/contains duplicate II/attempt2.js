let containsNearbyDuplicate = (nums, k) => {
  let count = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      const j = count.get(nums[i]);
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }

    count.set(nums[i], i);
  }
  return false;
};
