var findPermutationDifference = function (s, t) {
    let sum = 0;

    Array.from(s).forEach((element, index) => {
        sum += Math.abs(s.indexOf(element) - t.indexOf(element));
    });

    return sum;
};

console.log(findPermutationDifference("abcde", "edbac"));