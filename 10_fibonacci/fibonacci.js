const fibonacci = function(final) {
    if(final < 0){
        return "OOPS"
    }
    if(!Number.isInteger(final)) {
        final = parseInt(final, 10)
    }
    let fib = [0, 1]
    for(let i = 1; i < final; i++){
        let temp = fib[i] + fib[i-1]
        fib.push(temp)
    }
    return fib[final]
};

// Do not edit below this line
module.exports = fibonacci;
