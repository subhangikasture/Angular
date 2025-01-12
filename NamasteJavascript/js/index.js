console.log("Hello World");

// async function always returns promise , if you don't return promise then it will wrap the return value in promise
async function getData() {

    return "Namaste Javascript";
}
 
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Namaste Javascript"}

dataPromise.then (data => console.log(data)); // Namaste Javascript

