/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
 */

const binarySearch = (nums, target) => {
    // tried on my own, without knowing the proper logic
    // let middleElement = Math.floor(nums.length / 2)
    // while () {
    //     if (target > nums[middleElement]) {
    //         middleElement++
    //     } else if (target < nums[middleElement]) {
    //         middleElement--
    //     } else {
    //         return middleElement;
    //     }
    // }

    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer != rightPointer) {
        let middleNumber = Math.floor((leftPointer + rightPointer) / 2)
        if (target > nums[middleNumber]) {
            leftPointer++
        } else if (target < nums[middleNumber]) {
            rightPointer--
        } else {
            return middleNumber
        }
    }
}

module.exports = binarySearch;