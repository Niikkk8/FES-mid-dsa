/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

const arrayChunk = (array, size) => {
    const chunkededArray = []
    for(let i = 0; i < array.length; i += size){
        const subArray = array.slice(i, i+size);
        chunkededArray.push(subArray);
    }

    return chunkededArray;
};

module.exports = arrayChunk;
