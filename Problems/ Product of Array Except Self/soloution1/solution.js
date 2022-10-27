/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

  var prefix = [];
  var suffix = [];
  var output = [];
  prefix[0] = 1;
  suffix[nums.length - 1] = 1;

  for (var i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];

  }

  console.log("prefix",prefix)

  for(var i=nums.length-2;i>-1; i--){
    suffix[i] = suffix[i+1]* nums[i+1];

 }
  console.log("suffix",suffix)
  
  for (var i=0;i<nums.length;i++){
    output[i]= prefix[i]*suffix[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]))




