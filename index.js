// Theme buttton (the dark mode)
// TODO: Query for button with an id "theme-button"
let thememButton = document.querySelector("#theme-button")

let test = document.querySelector('.footer-container')
console.log(test)

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
thememButton.addEventListener("click",toggleDarkMode)





// The petition Sign up 
// Add your query for the sign now button here
let petitionSignUpBtn = document.querySelector("#sign-now-button")
let count = 3;

const addSignature = () => {
    // Write your code to manipulate the DOM here
    let name = document.querySelector("#name").value
    // console.log(name)
    let hometown = document.querySelector("#hometown").value
    // console.log(hometown)
    let email = document.querySelector("#email").value
    // console.log(email)

  
    let counter = document.querySelector("#counter")
    if (counter){
        counter.remove()
    }
    const txt = document.createElement('p')
    txt.innerText='🖊️ '+name+ ' from '+hometown+' supports this.'

    const signatures = document.querySelector('.signatures')
    signatures.append(txt)
    
    // update count
    count =count+1

    const new_counter = document.createElement('p')
    new_counter.id = 'counter'
    new_counter.innerText = '🖊️ ' +count.toString() + ' people have signed this petition and support this cause.'
    signatures.append(new_counter)


}

// Add a click event listener to the sign now button here
petitionSignUpBtn.addEventListener('click',addSignature)