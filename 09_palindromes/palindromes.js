const palindromes = function (word) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanedString = word.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
    const reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString
};

// Do not edit below this line
module.exports = palindromes;
