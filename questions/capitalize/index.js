/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
    // const capitalisedStr = str.split('');
    // for (let i = 0; i < str.length; i++) {
    //     if (i === 0) {
    //         capitalisedStr[i] = str[i].toUpperCase();
    //     } else if (capitalisedStr[i - 1] === ' ') {
    //         capitalisedStr[i] = str[i].toUpperCase();
    //     } else {
    //         capitalisedStr[i] = str[i];
    //     }
    // }

    // return capitalisedStr.join('');

    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

};


module.exports = capitalize;
