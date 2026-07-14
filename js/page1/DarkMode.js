
let SiteMode = document.querySelector(".SiteMode");
let dark = document.querySelector(".dark")

SiteMode.addEventListener("click" , () =>{

    SiteMode.classList.toggle("active");
    document.querySelector("body").classList.toggle("dark")

    document.querySelector(".MenuBar").classList.remove("active")
    document.querySelector(".shdaowMenuXS").classList.remove("active")
    document.querySelector(".menuBarAll").classList.remove("active")
})

dark.addEventListener("click" , () =>{

    SiteMode.classList.toggle("active");
    document.querySelector("body").classList.toggle("dark")

    document.querySelector(".MenuBar").classList.remove("active")
    document.querySelector(".shdaowMenuXS").classList.remove("active")
    document.querySelector(".menuBarAll").classList.remove("active")
})