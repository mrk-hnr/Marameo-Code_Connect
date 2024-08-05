// // DECLERATION

let navBar = document.querySelector(".navi-container")

let searchEnable = document.getElementById("nav-search-show")
let searchDisable = document.getElementById("nav-search-close")

let burgerMode = document.querySelector(".navi__burger-menu")

let hamburger = document.getElementById('hamburger');



// EVENT LISTENERS

searchEnable.addEventListener("click", switchVisible)
searchDisable.addEventListener("click", switchVisible)

// burgerMode.addEventListener("click", switchVisible) -- TRIGGERS MODAL

// burgerMode.addEventListener("click", burgerEnabled)



// FUNCTIONS


// SEARCH MODAL
function switchVisible() {
    if (searchEnable) {

        if (searchEnable.style.visibility == 'hidden') {

            searchEnable.style.visibility = 'visible';
            searchEnable.style.opacity = '1';
            navBar.style.zIndex = "1"

        
            searchDisable.style.visibility = 'hidden';
            searchDisable.style.opacity = '0';
            searchDisable.style.position = 'absolute';

            // burgerMode.style.visibility = "visible"
        }
        else {
            searchEnable.style.visibility = 'hidden';
            searchEnable.style.opacity = '0';
            // burgerMode.style.visibility = "hidden"
            navBar.style.zIndex = "-1"

            searchDisable.style.visibility = 'visible';
            searchDisable.style.opacity = '1';
            searchDisable.style.position = 'static';
        }
    }
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

