// // DECLERATION

let searchEnable = document.getElementById("nav-search-show")
let searchDisable = document.getElementById("nav-search-close")

// EVENT LISTENERS

searchEnable.addEventListener("click", switchVisible)
searchDisable.addEventListener("click", switchVisible)


// FUNCTIONS

function switchVisible() {
    if (searchEnable) {

        if (searchEnable.style.visibility == 'hidden') {

            searchEnable.style.visibility = 'visible';
            searchEnable.style.opacity = '1';

            searchDisable.style.visibility = 'hidden';
            searchDisable.style.opacity = '0';
            searchDisable.style.position = 'absolute';
        }
        else {
            searchEnable.style.visibility = 'hidden';
            searchEnable.style.opacity = '0';

            searchDisable.style.visibility = 'visible';
            searchDisable.style.opacity = '1';
            searchDisable.style.position = 'static';
        }
    }
}