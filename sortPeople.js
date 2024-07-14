var sortPeople = function (names, heights) {
    for (let i = 0; i < names.length; i++) {
        for (let j = i + 1; j < names.length; j++) {
            if(heights[i] < heights[j]){
                let temp = [names[i], heights[i]];
                [names[i], heights[i]] = [names[j], heights[j]];
                [names[j], heights[j]] = temp;
            }
        }
    }

    return names;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));