/** Minimum Number in Rotated Sorted Array **
 * 
 * Given a rotated sorted array, return the smallest 
 * number in the array.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 * 
 */

const findMinimum = (nums) => {
    // return (nums.sort((a,b) => a-b))[0];
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
        let middleNumber = Math.floor((leftPointer + rightPointer) / 2)
        if (nums[middleNumber] > nums[rightPointer]) {
            leftPointer = middleNumber + 1
        } else {
            rightPointer = middleNumber
        }
    }
    return nums[leftPointer]
}

module.exports = findMinimum;