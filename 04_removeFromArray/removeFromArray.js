const removeFromArray = function(array, ...args) {
    let cleanedArray = []
    for(let i = 0; i < array.length; i++){
        if(!args.includes(array[i])) {
            cleanedArray.push(array[i])
        }
    }
    return cleanedArray
};

// Do not edit below this line
module.exports = removeFromArray;
