const repeatString = function(string, num) {
    result ='';
    if (num >= 0){
        for (let i = 0; i < num; i++){
            result += string;
        }
        return result;
    } else if (num < 0) return 'ERROR';
}

function number (){
    return Math.floor(Math.random() * 1000)
}

// Do not edit below this line
module.exports = repeatString;
