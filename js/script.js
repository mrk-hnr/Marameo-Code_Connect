// // VARIABLE DECLERATION
let burgerMode = document.querySelector(".navi__burger-menu")
let hamburger = document.getElementById('hamburger');


let naviComponent = document.querySelector(".navi__right-container")
let navSearch = document.getElementById("nav-search-show")
let navSearchContainer = document.querySelector(".nav-search-container")
let modalClose = document.querySelector(".nav-close")



// EVENT LISTENERS DECLARATION


modalClose.addEventListener("click", closeModal)
navSearch.addEventListener("click", switchVisible)


// FUNCTIONS


// ENABLES SEARCH MODAL
function switchVisible() {
    console.log("test")
    naviComponent.style.zIndex = "-1"
    navSearchContainer.style.visibility = 'visible';
    hamburger.style.visibility = 'hidden';
}

// DISABLE SEARCH MODAL
function closeModal() {
    naviComponent.style.zIndex = "1"
    navSearchContainer.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
}

// BURGER MENU

hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
});