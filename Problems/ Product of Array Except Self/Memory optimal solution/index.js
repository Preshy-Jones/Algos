/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

  var output = [];

     
  output[0]=1;

     
  for (var i = 1; i < nums.length; i++) {
     output[i] = output[i - 1] * nums[i-1];      
  }
     

var R =1;
  for(var i=nums.length-1;i>-1; i--){

    output[i] = output[i] * R;
     R = R*nums[i];

 }


  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]))