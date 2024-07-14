const func = (operations) => {
    let x = 0;
    for(let i=0; i<operations.length; i++) {
        if(operations[i] === "++X" || operations[i] === "X++"){
            x++;
        }
        else{
            x--;
        }
    }
    console.log(x);
};

func(["X++","++X","--X","X--"]);