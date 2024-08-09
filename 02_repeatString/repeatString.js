const repeatString = function(word, times) {
    if(times < 0) { return "ERROR"}
    let yourString = ``
    for(let i = 0; i < times; i++) { 
        yourString += word
    } 
    return yourString
};

// Do not edit below this line
module.exports = repeatString;
