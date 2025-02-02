/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for(let i = 0;i<nums.length;i++){
        output[i]*=left;
        left*=nums[i]; 
    }

    let right = 1;
    for(let j = nums.length - 1;j>=0;j--){
        output[j]*=right;
        right*=nums[j];
    }
    return output;
};