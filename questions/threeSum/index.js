/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const results = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
            if (sum > 0) {
                rightPointer--;
            } else if (sum < 0) {
                leftPointer++;
            } else {
                results.push([nums[i], nums[leftPointer], nums[rightPointer]])
                leftPointer++;
                while (nums[leftPointer] === nums[leftPointer - 1] && leftPointer < rightPointer) {
                    leftPointer++;
                }
            }
        }
    }

    return results;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
