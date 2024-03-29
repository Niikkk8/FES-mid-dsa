/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
    let reversedString = '';
    // for(let i = 0; i < str.length; i++){
    //     reversedString = str[i] + reversedString;
    // }

    // for(let char of str){
    //     reversedString = char + reversedString;
    // }

    // return str.split('').reverse().join('');

    return str.split('').reduce((accumulator, currentValue) => (
        currentValue + accumulator
    ))

    // return reversedString;
};

module.exports = reverseString;
