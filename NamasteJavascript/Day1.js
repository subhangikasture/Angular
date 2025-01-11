var n = 2;

function square(n){
    var ans = n*n;
    return ans;
}

var sqr2 = square(n);
var sqr2 = square(8);


let b = 10;
const c = 20;

//Block scope and shadowing

{
    var a = 10;
    let b = 30;
    const c = 40;
    console.log(a);
    console.log(b);
    console.log(c);
}

//Gloabl scope
console.log(a);
console.log(b); // reference error b is not defined
console.log(c);

//Shadowing
var a = 100;   //Global
let d= 10 //Script space
{
    var a = 10;
    let d = 30; //Block space
    const c = 40;
    console.log(a);
    console.log(d);  // o/p 30
    console.log(c);
}
console.log(d); // o/p 10 , a is pointing to the same memory location hence inside block a shadows a= 100

///

{
    var a = 10;
    let b = 30;
    const c = 40;
    console.log(a); // o/p 10 ; this is called shadowing 
    console.log(b);
    console.log(c);
}
console.log(a); 

// Shadwoing behaves same in function scope as well
//Illegal shadowing 
let a = 10;
{
    var a = 20;    // This is illegal shadowing <let using var>
    console.log(a); // o/p 20
}

var a = 10;
{
    let a = 20;    // This is legal shadowing <var using let>
    console.log(a); // o/p 20
}
//block scopes also follows lexical scope

//Closeure in js
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();

//Functions
//anonymouse function
//First class functions
//Calll back, arraow back, Pur functions
//Function statemnt and function expression, function declaration

//Function statement
a();
g(); //error 
function a(){
    console.log("a called");
} // Function statement

var g = function(){
    console.log("g called");
} // Function expression

//Major difference in Hoisting

//anonymous function
function ()
{

}; // This is anonymous function
var h = function xzt(){};

xzt(); //error

function gty(param1, param2){ //param1 and param2 are called formal parameters /local parameters 
    console.log(param1);
    console.log(param2);
}

gty(10, 20); // 10, 20 are called actual parameters / arguments
//Functions inside another function as arguemnets

//The ability to use functions as arguments is a powerful feature of JavaScript. The function that is passed as an argument is called a callback function.this is called first class function
// Functions are first class citizens in JS

//callback function, event listeners
//functions are first class citizens in JS
//asyn is possible by call back mechanism 

function x(){
    console.log("x called");
}
x(y()); // y is call back function

/*
10/01/25
Web api's 
1. DOM
2. AJAX 
3. Timeout
4. Interval
5. Fetch
6. Local storage
7. Session storage
8. Cookies
9. Web workers
10. Service workers
11. Web sockets
12. IndexDB
13. File API
14. Geolocation
15. Notifications
16. Fullscreen
17. History
18. Location
19. Navigator
20. Screen
21. Style
22. Window
23. Console
24. Document

DOM - Document Object Model
- Document is a root object
- Document is a global object

DOM is a tree like structure
- Document is a root node
- Document has child nodes
- Child nodes are called elements
- Elements have child nodes
- Elements have attributes


*/