// TODO: Query for button with an id "theme-button"
let thememButton = document.querySelector("#theme-button")

let test = document.querySelector('footer-container')
console.log(test)

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
thememButton.addEventListener("click",toggleDarkMode)