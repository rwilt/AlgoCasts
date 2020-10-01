// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reversedStr = ''  
//     for(let i= str.length - 1; i >= 0; i-- ){
//         reversedStr += str[i] 
//     }
//     return reversedStr
//     }

    // function reverse(str) {
    //     let reversed = str.split('')
    //     reversed = reversed.reverse('').join('')
    //     return reversed
    //     }

        //cleanup

        function reverse(str) {
            return str.split('').reverse().join('');
            }

module.exports = reverse;
