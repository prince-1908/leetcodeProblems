var minimumOperations = function(nums) {
    let counter = 0;
    nums.forEach(element => {
        if(element%3!==0){
            counter++;
        }
    });
    return counter;
};

console.log("counter: ",minimumOperations([1,2,3,4]));