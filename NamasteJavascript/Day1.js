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