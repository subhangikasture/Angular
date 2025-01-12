console.log("Hello World");

// async function always returns promise , if you don't return promise then it will wrap the return value in promise
async function getData() {
    return "Namaste Javascript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Namaste Javascript"}
dataPromise.then (data => console.log(data)); // Namaste Javascript

//Create a promise and resolve
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved promise data");
    }, 1000);
});

 function getPromiseData() {
    return  p;
}

const dataPromise2 = getPromiseData();

dataPromise2.then (data => console.log(data)); // Promise {<fulfilled>: "Resolved promise data"}

//Above code is  without using async await
//What is the use of await keyword

async function handlePromise() {
    const val = await p;
    console.log("Inside handlePromise function : " + val);
}
console.log("Handle promise function using await "+handlePromise()); // Promise {<pending>}

// Let's see how to handle promise using async await with setTimeout of 1000
function resolveAfter10Seconds() {
  p.then((data) => {
    console.log("resolveAfter10Seconds :"+data);
  });
  console.log("I am called before promise is resolved");
}

resolveAfter10Seconds();