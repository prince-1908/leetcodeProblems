var buildArray = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]]
    }

    console.log(ans);
};

buildArray([0,2,1,5,3,4]);