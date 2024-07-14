function findMaxK(nums: number[]): number{
    nums.sort((a,b) => b-a);
    let index = 0;

    while(true){
        for(let i = 0; i < nums.length; i++){
            if(nums[index] === (-1 * nums[i])){
                return nums[index];
            }
        }
        index++;
        if(index === nums.length+1){
            break;
        }
    }

    return 0;
}

const nums = [-1,10,6,7,-7,1];
const result = findMaxK(nums);
console.log(result);
export {};