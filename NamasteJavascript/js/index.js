console.log("Hello World");

// async function always returns promise , if you don't return promise then it will wrap the return value in promise
/*
async function getData() {
    return "Namaste Javascript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Namaste Javascript"}
dataPromise.then (data => console.log(data)); // Namaste Javascript



 function getPromiseData() {
    return  p;
}*/
//Create a promise and resolve
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved promise data");
    },5000);
});
/*
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

resolveAfter10Seconds();*/

// Let's see how to handle promise using async await with setTimeout of 1000

async function getData2(){
    const val = await p;
    console.log("1 Inside getData2 function after promise ");
    console.log("2 Lets print p for promise "+ val); //ideally 48 line number should wait for 2 secs and then print this 
    console.log("3 Inside getData2 function after promise ");
    console.log("4 Lets print p for promise "+val);

}

//getData2();

//let me do this again without using async await to understand the beauty if s=async await
function testWithoutAwait(){
    p.then ((res)=>console.log("1 Inside testWithoutAwait function after promise "+res));
    console.log("2 Inside testWithoutAwait function after promise ");
}
//testWithoutAwait();
/*o/p
2 Inside testWithoutAwait function after promise 
index.js:62 1 Inside testWithoutAwait function after promise Resolved promise data */

//Let test if the await function be called twice will it wait for the first await to complete
async function testAwaitTwice(){
    const val = await p;
    console.log("1 Inside testAwaitTwice function after promise "+val);
    const val2 = await p;
    console.log("2 Inside testAwaitTwice function after promise "+val2);
}
//testAwaitTwice();

//Conclusion : Yes it will wait for the first await to complete and then only it will go to the next await
//above statment is incorrect 
//after 10 seconds both the await will be resolved together 

//lets create one more promise
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 10000);
 });

 async function testAwaitTwiceWithTwoPromises()
    {
        const val1 = await p;
        console.log("1 Inside testAwaitTwiceWithTwoPromises function after promise "+val1);

        const val2 = await p2;
        console.log("2 Inside testAwaitTwiceWithTwoPromises function after promise "+val2);
    }
    //testAwaitTwiceWithTwoPromises();

    //fetch api
    const API_URL = "https://api.github.com/users/subhangikasture";
    async function fetchUsers(){  
     // console.log( "will await resolves fetch an dprints? "+ await fetch(API_URL)) //o/p = will await resolves fetch an dprints? [object Response]
     try{
      const val  = await fetch("API_URL");
      const jsonVal =  await val.json();
      console.log("1 jsonval ",  jsonVal);
     }
    catch(err)
    {
        console.log("Error occured "+err);}
    }
    fetchUsers();
