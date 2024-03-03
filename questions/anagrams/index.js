/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
    //MAKE THIS REUSABLE BY CREATING FUNCTIONS
    const charMapA = {};
    const charMapB = {};
    for (char of strA.toLowerCase() /*.replaceAll(" ", "")*/) {
        char !== ' ' && (charMapA[char] = charMapA[char] + 1 || 1);
    }
    for (char of strB.toLowerCase()) {
        char !== ' ' && (charMapB[char] = charMapB[char] + 1 || 1);
    }
    if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
        for (const [charA, countA] of Object.entries(charMapA)) {
            if (charMapB[charA] !== countA) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

    // OR SORT BOTH ARRAYS AFTER REMOVING SPACES AND CONVERTING THEM TO LOWERCASE AND THEN COMAPRE
}

module.exports = anagrams;