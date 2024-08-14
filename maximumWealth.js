var maximumWealth = function(accounts) {
    let max = 0;

    for(let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((acc, cur)=> acc+cur, 0);

        if(wealth>max){
            max = wealth;
        }
    }

    return max;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));