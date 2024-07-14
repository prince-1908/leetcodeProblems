var addTwoPromises = async function(promise1, promise2) {
    let p1 = await promise1;
    let p2 = await promise2;

    console.log(p1 + p2);
};

addTwoPromises(new Promise(resolve => setTimeout(() => resolve(10), 50)), new Promise(resolve => setTimeout(() => resolve(-12), 30)));