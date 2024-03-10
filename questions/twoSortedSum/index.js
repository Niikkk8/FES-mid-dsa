/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */

const twoSortedSum = (nums, target) => {
    // O(n) and O(1) space
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
        const sum = nums[leftPointer] + nums[rightPointer]
        if (sum > target) {
            rightPointer--;
        } else if (sum < target) {
            leftPointer++;
        } else {
            return [leftPointer, rightPointer]
        }
    }
}

module.exports = twoSortedSum;
