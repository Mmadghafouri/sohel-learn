
let menuAll2 = document.querySelector(".menuAll2");
let removeTop = document.querySelector(".removeTop")

removeTop.addEventListener("click" , () =>{

    menuAll2.classList.add("remove");

   let set =  setTimeout(() => {
        
        menuAll2.remove();

        clearTimeout(set)

    }, 3000);
})