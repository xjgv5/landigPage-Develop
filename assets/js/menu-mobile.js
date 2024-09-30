document.addEventListener("DOMContentLoaded", (event) => {
    let mobile_btn = document.querySelector(".navbar__mobile-btn")
    let mobile_menu = document.querySelector(".menu-mobile")

    mobile_btn.addEventListener("click", ()=>{
        let show = document.querySelector(".menu-mobile--show")

        if(show){
            mobile_menu.classList.remove("menu-mobile--show")
        } else{
            mobile_menu.classList.add("menu-mobile--show")
        }
    })

    // window.addEventListener("resize", ()=>{
    //     let window_width = parseInt(document.body.clientWidth)
    //     if(window_width > 1000){
    //         mobile_menu.classList.remove("menu-mobile--show")
    //     }
    // })
    console.log("hla")
    
})