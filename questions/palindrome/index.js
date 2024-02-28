/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
    // return str === str.split('').reverse().join('');

    // return str.split('').every((char, index) => (
    //     char === str[str.length - index - 1]
    // ))

    const middleElement = Math.floor(str.length/2);
    for(let i = 0; i<middleElement; i++){
        if(str[i] !== str[str.length - 1 -i]){
            return false;
        }
    }
    return true;
};

module.exports = palindrome;
