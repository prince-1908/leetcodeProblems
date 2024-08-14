var numJewelsInStones = function(jewels, stones) {
    jewels = jewels.split("");
    let counter=0;
    Array.from(stones).forEach((element) => {
        if(jewels.includes(element) ){
            counter++;
        }
    });
    return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));