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
    resolve("Resolved promise data");
});

async function getPromiseData() {
    return  p;
}

const dataPromise2 = getPromiseData();

dataPromise2.then (data => console.log(data)); // Promise {<fulfilled>: "Resolved promise data"}
console.log( "inside promise :" +  p);
console.log("outside promose function : " +   getPromiseData()); // Promise {<fulfilled>: Promise {<fulfilled>: "Resolved promise data"}}