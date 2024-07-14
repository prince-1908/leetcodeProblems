var countConsistentStrings = (allowed, words) => {
    let counter = 0;
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let filtered = Array.from(alphabets).filter(letter => !Array.from(allowed).includes(letter));
    
    for(let i=0; i<words.length; i++) {
        if(!filtered.some(letter => words[i].includes(letter))){
            counter++;
        }
    }

    return counter;
}

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))