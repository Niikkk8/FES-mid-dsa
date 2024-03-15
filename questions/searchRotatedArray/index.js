/** Search in Rotated Sorted Array **
 * 
 * Given a rotated sorted array and a target, 
 * return the index of the number in the array 
 * which equals to the target.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 * 
 */

const search = (nums, target) => {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer <= rightPointer) {
        let middleNumber = Math.floor((leftPointer + rightPointer) / 2);
        if (nums[middleNumber] === target) {
            return middleNumber
        }
        if (nums[middleNumber] < nums[rightPointer]) {
            if (target < nums[middleNumber] || target > nums[rightPointer]) {
                rightPointer = middleNumber - 1;
            } else {
                leftPointer = middleNumber + 1;
            }
        } else {
            if (target > nums[middleNumber] || target < nums[leftPointer]) {
                leftPointer = middleNumber + 1;
            } else {
                rightPointer = middleNumber - 1;
            }
        }
    }
    return -1;
};

module.exports = search;


module.exports = search;