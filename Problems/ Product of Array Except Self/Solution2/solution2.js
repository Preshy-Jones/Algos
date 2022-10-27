/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

  var prefix = [];
  var suffix = [];
  var output = [];


  for (var i = 0; i < nums.length; i++) {
    if(i===0){
      prefix[i]=nums[i];
    } else{
      prefix[i] = prefix[i - 1] * nums[i];      
    }


  }

  console.log("prefix",prefix)

  for(var i=nums.length-1;i>-1; i--){

    if(i===nums.length-1){
      suffix[i]=nums[i];
    } else{
      suffix[i] = suffix[i + 1] * nums[i];      
    }
 }
  console.log("suffix",suffix)

   for(var i=0; i<nums.length;i++){
     if(i===0){
        output[i] = 1 *suffix[i+1];
     } else if(i===nums.length-1){
        output[i] = prefix[i-1] *1;
     } else {
       output[i] = prefix[i-1]*suffix[i+1];
      }
   }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]))