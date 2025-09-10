document.addEventListener("readystatechange",()=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
})

const initApp = ()=>{
    const year = document.getElementById("year").textContent = new Date().getFullYear();

   
}