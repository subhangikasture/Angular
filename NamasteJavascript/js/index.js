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
const pl = new Promise((resolve, reject) => {
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
    
      const val  = await fetch("API_URL");
      const jsonVal =  await val.json();
      console.log("1 jsonval ",  jsonVal);
    
    }
    //fetchUsers();
    //fetchUsers.catch(err => console.log("Error occured SSS "+err));

/*
    console.log("1 Before calling Call back function");

    setTimeout(function (){
        console.log("2 Inside call back function");
    },5000);
    

*/
  //  console.log("3 Season 2");
/*
//Call back hell
    const cart = [" shoes", "shirt", "pant", "watch"];
    api.createOreder(cart, function(){
        api.proceedToPayment(function(){
            api.payment(function(){
                api.showOrderSummary();
            });
        });
    });

*/
/*
    const user = API_URL;

  const fetchUser = fetch(user);
  console.log("fetchuser", fetchUser);

  fetchUser.then((response)=>{console.log("response", response.json());})

*/
/*
//Creating promise

const cart = [" shoes", "shirt", "pant", "watch"];
const promise = createOrder(cart);
console.log("Promise", promise);

promise.then((orderId) => {
    console.log("Order ID: ", orderId);
    return orderId;
}).catch((err) =>{
    console.log("Error: ", "cart is not valid");
})
.then(function(orderId){
   return proceedToPayment(orderId);   
})
.then((proceedToPayment_) => {
    console.log("Payment result: ", proceedToPayment_);
})

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        //createOrder
        //validateCart
        //orderCart
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "1234";
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }else{
            reject("Order not placed");
        }    
   });
  return pr;
}

function proceedToPayment(orderId){
    console.log("Proceed to payment");
    return new Promise(function(resolve, reject){
        resolve("Payment done");
    });
}

function validateCart(cart){
    if(cart.length > 0){
        return false;
    }
    return false;
}*/
/*
//Home work 

function : cart with four items 
1. createOrder(cart) : creates ordre
2. proceedTopayment(orderId) : proceed to payment
3. ShowOrderSummary(orderId) : show order summary
4. updateValatecart(cart) : validate cart


const cart  = ["shirt", "heels", "watch", "lipstick"]; //extention can you include number of items and price
 
createOrder(cart)
.then((orderId)=>{
    console.log("Order ID: ", orderId);
    return orderId;
})
.then(function(cart_){
    return proceedToPayment(cart);
})
.then((proceedToPayment_) => {
    console.log("Payment result: ", proceedToPayment_);
    return showOrderSummary(cart);
})
.catch((err) => {     
    console.log("Error: ", err);
  } );


function createOrder(cart){
    const pr = new Promise((resolve, reject) =>{
        if(cart.length > 0){
            resolve("Order created");
        }else{
            reject("Cart is empty");
        }
    });
    return pr;
}

function proceedToPayment(cart){
    //Extension of the project could be based one the number of items and price per each item , a function to calculate toatal amount 
    return new Promise((resolve, reject) => {
        resolve ("Payment done for order" + cart); 
    })
}

function showOrderSummary(cart){
    return new Promise((resolve, reject)=>{       
        resolve("Order Summary :"+ cart);
    })
}

*/


const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 3000);
});

const  p2= new Promise((resolve, reject) =>{    
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
})

const  p3= new Promise((resolve, reject) =>{    
    setTimeout(() => {
        reject("Promise 3 resolved");
    }, 2000);
})

Promise.all([p1, p2, p3]).then((result) => {
    console.log("Promise.all", result);
}).catch((err) => {
    console.log("Error: ", err)});

 //if all resolves then after 3 s we get the result
// whichever fails first immediatly it throws the un caught error