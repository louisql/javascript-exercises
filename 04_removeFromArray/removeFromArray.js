const removeFromArray = function(array, arg) {
    for (let arg = 1; arg < arguments.length; arg++){
    let arr = arguments[arg];
        for (let i = 0; i < array.length; i++){
            if (array[i] === arr) array.splice(i, 1);
        }
    } 
return array;
}

let test = removeFromArray([1, 2, 3], "1", 3);
console.log(test);
// Do not edit below this line
module.exports = removeFromArray;
