var lengthOfLongestSubstring = function(s) {
    let stack = [];
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        for(let j = 0; j < stack.length; j++) {
            if(s[i] === stack[j]) {
                continue;
            }
        }
    }
    console.log(counter);
};

lengthOfLongestSubstring("abcabcbb");