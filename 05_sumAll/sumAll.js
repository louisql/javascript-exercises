const sumAll = function(int1, int2) {
    let total = 0;
    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR'
    }
    else if (int1 <= int2){
        for (let i = int1; i <= int2; i++){
            total += i;
        }
    }
    else if (int1 > int2){
        for (let i = int2; i <= int1; i++){
            total += i;
        }
    }
    return total;

};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
