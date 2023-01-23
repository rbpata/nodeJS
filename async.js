// --> in synchronous operations tasks are performed one at time

// --> in Asynchrounus ,Second task do not wait to finish first task.


console.log("Start Execution..")

setTimeout(() => {
    console.log("logic Execution..")
}, 1000)

console.log("complete Execution..")




let a = 20;
let b = 0;

setTimeout(() => {
    b = 10;
}, 1000);

console.log(a + b);

// -->it is a drawback of asynchrounus 


// ---->use of Promises

let c = 20;
let d = 0;

let writeData = new Promise((res, rej) => {
    res(20);
});

writeData.then((data) => {
    console.log(c + data);
})


