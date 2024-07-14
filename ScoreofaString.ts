function scoreOfString(s: string): number {
    let sum = 0;
    let arr: string[] = s.split("");
    for (let i = 0, j = 1; i < arr.length; i++, j++) {
        if (arr[i] && arr[j] && arr[i].charCodeAt(0) < arr[j].charCodeAt(0)) {
            let temp: string;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log(arr[i], arr[j] );
        }
    }
    return sum;
};


console.log(scoreOfString("hello"));