/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
    const charMap = {};
    let maxChar = '';
    let max = 0;
    for (char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
};

module.exports = maxCharacter;
