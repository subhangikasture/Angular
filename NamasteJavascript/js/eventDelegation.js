document.querySelector("#test")
.addEventListener("click",(e)=>{
    console.log("Category clicked", e.target.id);
    window.location.href ="/"+ e.target.id;
})