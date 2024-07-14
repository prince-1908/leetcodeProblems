var shuffle = function(nums, n) {
    for(let i=0; i<=nums.length/2; i++){
        
        if(i%2 !== 0){
            let val = nums[n];
            for(let j=n-1; j>=i; j--){
                nums[j] = nums[j-1];
                console.log(nums[j]);
            }
            nums[i] = val;
            n++;
        }
    }
    console.log(nums);
};

shuffle([2,5,1,3,4,7], 3);