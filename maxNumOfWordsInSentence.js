"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostWordsFound(sentences) {
    var arr = [];
    for (var i = 0; i < sentences.length; i++) {
        var myArr = sentences[i].split(" ");
        arr.push(myArr.length);
    }
    arr.sort(function (a, b) { return b - a; });
    console.log(arr);
    return 0;
}
;
mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
