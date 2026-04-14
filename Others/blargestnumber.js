// Most efficient way - To find the largest number in an array.
// It is to iterate through the array once, keeping track of the largest number found so far.
// This approach has a time complexity of O(n) and a space complexity of O(1).
// Here's how you can implement it in JavaScript:

class Solution {
  largestNumber(nums) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (temp < nums[i]) {
        temp = nums[i];
      }
    }
    return temp;
  }
}

const Sol = new Solution();
// Sol.largestNumber([3, 14, 3, 5, 2]);
console.log(Sol.largestNumber([-3, -14, -3, -5, 2]));

// This method is formally called One Pass of Bubble Sort (or a Pairwise Swap approach).
// In this specific case, your code is acting like a "Snowplow."

// It clears the path by pushing the largest value it finds all the way to the right side of the array.
// Why it works for [-43, -3, 0, -6, -12]
// Let's look at what happens inside your console.log(nums) for this specific array:Start:
// [-43, -3, 0, -6, -12]

// Compare -43 & -3: -3 is larger.
// No swap.Compare -3 & 0: 0 is larger.
// No swap.Compare 0 & -6: 0 is larger!
// Swap happens $\rightarrow$ [-43, -3, -6, 0, -12]Compare 0 & -12: 0 is larger!
// Swap happens $\rightarrow$ [-43, -3, -6, -12, 0]
// Final Result: 0 is now at the end.

// The function returns nums[4], which is 0.

class secondSolution {
  largestNumber(nums) {
    let n;
    for (let i = 0; i < nums.length - 1; i++) {
      // console.log(n>nums[i+1])
      // console.log(nums);
      if (nums[i] > nums[i + 1]) {
        n = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = n;
        // nums[i+1] = nums[i]
      }
    }
    // console.log(n);
    return nums[nums.length - 1];
  }
}

const secondSol = new secondSolution();
// sol.largestNumber([4,-3,0,-6,12])
console.log(
  "Largest number in the array is:",
  secondSol.largestNumber([1, -43, -3, 0, -6, -12]),
);
