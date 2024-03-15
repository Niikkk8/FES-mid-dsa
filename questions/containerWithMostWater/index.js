/** Container with Most Water **
 * 
 * Given an array 'heights' which represents the heights of blocks
 * on a container, find the maximum area of water that can be stored
 * within these blocks. 
 * 
 * @example
 * maxWater([1, 5, 4, 3]) -> 6
 * maxWater([1, 5, 6, 3, 4, 2]) -> 12
 * maxWater([4, 3, 2, 1, 4]) -> 16
 * 
 */

 const maxWater = (heights) => {
   let leftPointer = 0
   let rightPointer = heights.length - 1
   let maxArea = 0 

   while (leftPointer < rightPointer){
      let width = rightPointer - leftPointer
      let height = Math.min(heights[leftPointer], heights[rightPointer])
      let area = width * height

      if (heights[leftPointer] < heights[rightPointer]){
         leftPointer += 1
      }
      else{
         rightPointer -= 1
      }

      if (area > maxArea){
         maxArea = area
      }
   }

   return maxArea

}

module.exports = maxWater;