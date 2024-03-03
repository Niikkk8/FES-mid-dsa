/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1);
        const hashes = '#'.repeat(2 * i + 1);
        console.log(`${spaces}${hashes}${spaces}`);
    }
};

module.exports = pyramid;
