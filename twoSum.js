const nums = [2,7,11,15];
const target = 9;

var twoSum = function (nums, target){
    const diffMap = new Map();

    let res = [];
    
    nums.map((value, index) => {
        const diff = target - value;

        if(diffMap.has(diff)){
            res = [diffMap.get(diff), index];
        }
        diffMap.set(value, index);
    });
    return res;
}

const result = twoSum(nums, target);
console.log(result);