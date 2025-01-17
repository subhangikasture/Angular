document.querySelector("#test")
.addEventListener("click",(e)=>{
    console.log("Category clicked", e.target.id);
    if(e.target.tagName == "LI")
    {
     window.location.href ="/"+ e.target.id;
    }
})

document.querySelector('#fullname')
.addEventListener('input',(e)=>{
    console.log("Fullname input changed");
    if(e.target.dataset.uppercase != undefined)
    {
        e.target.value = e.target.value.toUpperCase();
    }
})