
let MenuBar = document.querySelector(".MenuBar");
let menuBarAll = document.querySelector(".menuBarAll")
let shdaowMenuXS = document.querySelector(".shdaowMenuXS")
let exitXS = document.querySelector(".exitXS")

MenuBar.addEventListener("click" , () =>{

    MenuBar.classList.toggle("active")
    shdaowMenuXS.classList.toggle("active")
    menuBarAll.classList.toggle("active")
})

shdaowMenuXS.addEventListener("click" , () =>{

    MenuBar.classList.remove("active")
    shdaowMenuXS.classList.remove("active")
    menuBarAll.classList.remove("active")
})

exitXS.addEventListener("click" , () =>{

    MenuBar.classList.remove("active")
    shdaowMenuXS.classList.remove("active")
    menuBarAll.classList.remove("active")
})