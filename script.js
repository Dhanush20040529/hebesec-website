document.addEventListener("readystatechange",()=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
})

const initApp = ()=>{
    const year = document.getElementById("year").textContent = new Date().getFullYear();
    const menuClsBtn = document.querySelector(".close-menu-btn")
    const menuOpenBtn = document.querySelector(".open-menu-btn")
    const menuBtns = document.querySelector(".mobile-nav-btn")
    
    menuOpenBtn.addEventListener("click",()=>{
        menuClsBtn.style.display = "block"
        menuOpenBtn.style.display = "none"
        menuBtns.style.transform = "rotateX(0deg)"
    })

    menuClsBtn.addEventListener("click",()=>{
        menuClsBtn.style.display = "none"
        menuOpenBtn.style.display = "block"
        menuBtns.style.transform = "rotateX(90deg)"
    })

   
}