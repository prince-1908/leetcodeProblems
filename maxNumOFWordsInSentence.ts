function mostWordsFound(sentences: string[]): number {
    let arr:number[] = [];
    for(let i=0; i<sentences.length; i++) {
        let myArr = sentences[i].split(" ");
        arr.push(myArr.length);
    }
    arr.sort((a,b) => b-a);
    console.log(arr);
    return 0;
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);

export{};