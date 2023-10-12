// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"


function largestNumber(nums) {

    nums = nums.map(String);
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] + nums[j + 1] < (nums[j + 1] + nums[i])) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    if (nums[0] === "0") {
        return "0";
    }
    return nums.join("");
}

console.log(largestNumber([10, 2]))