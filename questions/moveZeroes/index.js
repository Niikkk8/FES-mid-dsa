/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

const moveZeroes = (nums) => {
    let leftPointer = 0
    let rightPointer = 0
    while (rightPointer < nums.length) {
        if (nums[rightPointer] !== 0) {
            let temp = nums[rightPointer]
            nums[rightPointer] = nums[leftPointer]
            nums[leftPointer] = temp
            leftPointer += 1
        }
        rightPointer++
    }
    return nums
}

module.exports = moveZeroes;