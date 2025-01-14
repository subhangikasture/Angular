//call apply and bind watch the video 

//this insdie arrow function
//this doesn't have in arrow , it takes from its lexical conext

const obj = {
a: 10,
x : function(){
    console.log(this);
},
 y: () =>{
    console.log(this);
}
}
obj.x(); 
obj.y();
//enclosing lexical context
const obj2 = {
    a:10,
    x : function(){
        const y =()=> {    
            console.log(this);
           }
           y(); 
    },
}
obj2.x();
//this in html DOM is html element