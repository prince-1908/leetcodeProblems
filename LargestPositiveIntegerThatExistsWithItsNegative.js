"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMaxK(nums) {
    nums.sort(function (a, b) { return b - a; });
    var index = 0;
    while (true) {
        for (var i = 0; i < nums.length; i++) {
            if (nums[index] === (-1 * nums[i])) {
                return nums[index];
            }
        }
        index++;
        if (index === nums.length + 1) {
            break;
        }
    }
    return 0;
}
var nums = [-1, 10, 6, 7, -7, 1];
var result = findMaxK(nums);
console.log(result);
