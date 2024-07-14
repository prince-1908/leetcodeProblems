var firstPalindrome = function(words) {
    for(let i=0; i<words.length; i++) {
        let left = 0;
        let right = words[i].length - 1;

        let wordArr = words[i].split("");

        while(left < right){
            let temp = wordArr[left];
            wordArr[left] = wordArr[right];
            wordArr[right] = temp;
            left++;
            right--;
        }

        let pali = wordArr.join("");

        if(pali === words[i]){
            return words[i];
        }
    }

    return "";
};

console.log(firstPalindrome(["notapalindrome","racecar"]));