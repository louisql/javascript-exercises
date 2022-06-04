const reverseString = function(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString += string[string.length - (i+1)]
    };
    return newString
};


let test = reverseString('test');

console.log(test);


// Do not edit below this line
module.exports = reverseString;
