const x = 121;
var isPalindrome = function (x) {
    const xCopy = x;
    let rev = 0;
    for (let i = x; i > 0; i = Math.floor(i / 10)) {
        let lastDigit = i % 10;
        rev = rev * 10 + lastDigit;
    }
    let res = rev==x ? true : false;
    return res;
};


const result = isPalindrome(x);
console.log(result);