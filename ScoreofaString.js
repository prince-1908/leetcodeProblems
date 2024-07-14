function scoreOfString(s) {
    var sum = 0;
    var arr = s.split("");
    for (var i = 0, j = 1; i < arr.length; i++, j++) {
        if (arr[i] && arr[j] && arr[i].charCodeAt(0) < arr[j].charCodeAt(0)) {
            var temp = void 0;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log(arr[i], arr[j]);
        }
    }
    return sum;
}
;
console.log(scoreOfString("hello"));
