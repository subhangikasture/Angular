document.querySelector("#grandParent")
.addEventListener('click',(e)=>{
    console.log("Grandparent clicked");
    //e.stopPropagation();
}, true)// true is for capturing

document.querySelector("#parent")
.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Parent clicked");
}, true)  

document.querySelector("#child")
.addEventListener('click',(e) => {
    e.stopPropagation();
    console.log("Child clicked")
}, true)
