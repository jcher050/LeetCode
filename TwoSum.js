/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
   
    for (let i=0; i<nums.length; i++){
      
        for(let j=i+1; j<nums.length; j++)
            {
                 if(i != j && nums[i]+nums[j]==target)
                {  
                    result[0]=i;
                    result[1]=j; 
                   
                }
            }
    }
   return result; 
};
