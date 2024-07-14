var uniqueMorseRepresentations = function (words) {
    let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let MorseArr = [];

    for (let i = 0; i < words.length; i++) {
        let wordMorseArr = [];
        Array.from(words[i]).forEach((letter) => {
            alphabets.forEach((alphabet, index) => {
                if (alphabet === letter) {
                    let alphabetIndex = index;

                    if (!MorseArr.includes(wordMorseArr[alphabetIndex]))
                        wordMorseArr.push(morseCode[alphabetIndex]);
                }
            });
        });
        MorseArr.push(wordMorseArr.join(""));
    }

    let uniqueMorse = [];
    MorseArr.forEach(item => {
        if(!uniqueMorse.includes(item)){
            uniqueMorse.push(item);
        }
    });

    return uniqueMorse.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));