/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let x=nums[i]
    
        for(let j=i+1; j<nums.length; j++){
                let y=nums[j]
                if (x+y === target){
                    return [i, j]
                }
        }
    }
};