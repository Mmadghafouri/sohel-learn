
let overlay = document.querySelector(".overlay")
let searchBoxAll = document.querySelector(".searchBoxAll")
let exitSearch = document.querySelector(".exitSearch")
let SearchBtn = document.querySelector(".SearchBtn")

SearchBtn.addEventListener("click" , () =>{

    searchBoxAll.classList.add("active")
    overlay.classList.add("active")

})

exitSearch.addEventListener("click" , () =>{

    searchBoxAll.classList.remove("active")
    overlay.classList.remove("active")

})

overlay.addEventListener("click" , () =>{

    searchBoxAll.classList.remove("active")
    overlay.classList.remove("active")

})