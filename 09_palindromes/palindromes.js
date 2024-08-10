const palindromes = function (word) {
    word = word.toLowerCase()
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    word = word.replace(/\s/g, '');
    let wordReversed = ''
    for(let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i]
    }
    return word === wordReversed
};

// Do not edit below this line
module.exports = palindromes;
