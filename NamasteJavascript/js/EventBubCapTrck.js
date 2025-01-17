document.querySelector("#grandParent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
}, true)// true is for capturing

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("Parent clicked");
}, true)  

document.querySelector("#child")
.addEventListener('click',() => {
    console.log("Child clicked")
}, true)
