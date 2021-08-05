function detectWord(str) {
	str = [...str];
    let word = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            word.push(str[i])
        }
    }

    word = word.join("");
    return word;
}

module.exports = detectWord;