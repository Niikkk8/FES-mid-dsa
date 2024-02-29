/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
    // const idArray = arr.map(obj => obj.id);
    // const uniqueIDs = [];
    // let idString = '';
    // for (let id of idArray) {
    //     if (!uniqueIDs.includes(id)) {
    //         uniqueIDs.push(id);
    //     }
    // }
    // for (let i = 0; i < uniqueIDs.length; i++) {
    //     idString += `${uniqueIDs[i]}, `
    // }
    // return idString.slice(0, (idString.length - 2));

    const idArray = arr.map(obj => obj.id);
    const uniqueIDs = [...new Set(idArray)];
    return uniqueIDs.join(', ');
};

module.exports = stringifyId;
