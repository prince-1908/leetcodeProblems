var restoreString = function(s, indices) {
    let strArr = s.split("");
    for(let i=0; i<indices.length; i++) {
        for(let j=i+1; j<indices.length; j++) {
            if(indices[i] > indices[j]){
                let temp = [strArr[i], indices[i]];
                [strArr[i], indices[i]] = [strArr[j], indices[j]];
                [strArr[j], indices[j]] = temp;
            }
        }
    }
    console.log(strArr.join(""));
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));