// // DECLERATION
let burgerMode = document.querySelector(".navi__burger-menu")
let hamburger = document.getElementById('hamburger');


let naviComponent = document.querySelector(".navi-component")
let navSearchContainer = document.querySelector(".nav-search-container")
let modalClose = document.querySelector(".nav-close")

// let navBar = document.querySelector(".navi-container")


// let searchEnable = document.getElementById("nav-search-show")
// let searchDisable = document.getElementById("nav-search-close")
// let searchDisable = document.querySelector(".nav-close")




// EVENT LISTENERS

// searchEnable.addEventListener("click", switchVisible)
// searchDisable.addEventListener("click", switchVisible)
modalClose.addEventListener("click", closeModal)
naviComponent.addEventListener("click", switchVisible)

// burgerMode.addEventListener("click", switchVisible) -- TRIGGERS MODAL

// burgerMode.addEventListener("click", burgerEnabled)



// FUNCTIONS


// SEARCH MODAL
function switchVisible() {
    console.log("test")
    naviComponent.style.zIndex = "-1"
    navSearchContainer.style.visibility = 'visible';
}

function closeModal() {
    naviComponent.style.zIndex = "1"
    navSearchContainer.style.visibility = 'hidden';
}









hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    
});


// HAMBURGER

//  function burgerEnabled() {

//     if (burgerMode) {

        
//         document.querySelector(".navi__burger-menu").classList.add("click")
//         document.querySelector(".navi__top").classList.add("click")
//         document.querySelector(".navi__middle").classList.add("click")
//         document.querySelector(".navi__bottom").classList.add("click")
//     } else {
//         document.querySelector(".navi__burger-menu").classList.remove("click")
//         document.querySelector(".navi__top").classList.remove("click")
//         document.querySelector(".navi__middle").classList.remove("click")
//         document.querySelector(".navi__bottom").classList.remove("click")
//     }
// }

