var findWordsContaining = function(words, x) {
    let arr = [];
    for(let i=0; i<words.length; i++) {
        if(words[i].includes(x)){
            arr.push(i);
        }
    }
    console.log(arr);
};

findWordsContaining(["abc","bcd","aaaa","cbc"], "a");