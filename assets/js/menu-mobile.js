document.addEventListener("DOMContentLoaded", (event) => {
    let mobile_btn = document.querySelector(".navbar__mobile-btn")
    let mobile_menu = document.querySelector(".menu-mobile")


    // mostrar y ocultar menu
    const showHiddenMenu = () =>{
        let show = document.querySelector(".menu-mobile--show")

        if(show){
            mobile_menu.classList.remove("menu-mobile--show")
        } else{
            mobile_menu.classList.add("menu-mobile--show")
        }
    }
    // Al dar click al boton del menu, mostrar el menu de navegacion
    mobile_btn.addEventListener("click", showHiddenMenu)

    // Oculta el menu al ir a menos de una pantalla de 1000px
    window.addEventListener("resize", ()=>{
        let window_width = parseInt(document.body.clientWidth)
        if(window_width > 1000){
            mobile_menu.classList.remove("menu-mobile--show")
        }
    })

    // Cerrar el menu con el boton x
    let btn_close = document.querySelector(".menu-mobile__close")
    
    btn_close.addEventListener("click", showHiddenMenu)
    
})