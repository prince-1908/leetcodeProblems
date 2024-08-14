const nums = [1,2,3,4,5,6];
const n = 3;
let j=n;

for(let i = 0; i<nums.length; i++){
    if(i%2!=0){
        
        let number = nums[j];

        for(let k = j; k < nums.length; k++){
            nums[k] = nums[k+1];
        }
        j++;

        for(let k = nums.length-2; k >= i; k--){
            nums[k+1] = nums[k];
        }

        nums[i] = number;
    }
}

console.log(nums);