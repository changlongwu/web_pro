// Theme buttton (the dark mode)
// TODO: Query for button with an id "theme-button"
let thememButton = document.querySelector("#theme-button")

let test = document.querySelector('.footer-container')
// console.log(test)

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
thememButton.addEventListener("click",toggleDarkMode)


let person;


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
// petitionSignUpBtn.addEventListener('click',addSignature)



// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors =false;

    // the form elements
    var petitionInputs = document.getElementById("sign-petition").elements;

    person ={
        'name':petitionInputs[0].value,
    }

    // TODO: Loop through all inputs
    for(let i =0; i<petitionInputs.length;i++){
        

        if (petitionInputs[i].value.length<2){
            containsErrors= true;
            // console.log('empty')
            // console.log(petitionInputs[i])
            petitionInputs[i].classList.add('error')
        }
        else{
            petitionInputs[i].classList.remove('error')
        }
        console.log(containsErrors)

    }

    // check if email contains '.com'
    let email = document.getElementById('email')

    if (!email.value.includes('.com')){
        containsErrors=true
        email.classList.add('error')
    }
    else{
        email.classList.remove('error')
    }
    if (containsErrors==false){
        addSignature();
        for (let i =0; i<petitionInputs.length;i++){
            petitionInputs[i].value=""
        }
        toggleModal(person);
    }
    
    // TODO: Validate the value of each input
  
  
  
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
  petitionSignUpBtn.addEventListener('click', validateForm);


  let animation ={
    "revealDistance": 150,
    "initialOpacity": 0,
    "transitionDelay": 0,
    "transitionDuration": "2s",
    "transitionProperty": "all",
    "transitionTimingFunction": "ease"
  }


  let revealableContainers = document.querySelectorAll('.revealable')
  console.log(revealableContainers)

  const reveal =() =>{
    for (let i = 0; i<revealableContainers.length;i++){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        console.log('i top' +topOfRevealableContainer);
        if(topOfRevealableContainer < windowHeight - animation.revealDistance){
            revealableContainers[i].classList.add('active');
        }else{
            revealableContainers[i].classList.remove('active');
        }
    }
  }

  window.addEventListener('scroll',reveal);


//   remove animation
let removeAnimationButton = document.querySelector("#reduce-animation")

// complete the function
const removeAnimation =()=>{
    for (let i = 0; i<revealableContainers.length;i++){
        revealableContainers[i].classList.toggle('revealable');
    }
}

// click the button add the event listener
removeAnimationButton.addEventListener('click',removeAnimation)


// modal
let modal = document.querySelector("#thanks-modal");
const toggleModal=(person)=>{
 let modal = document.querySelector("#thanks-modal");
 let modalContent = document.querySelector("#thanks-modal-content");
 console.log(modalContent);
 modalContent.innerHTML = person.name + ' thanks for your support!' ;
 modal.style.display = "flex";

 setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
 }, 4000);

 intervalId = setInterval(scaleImage,500);
}

//  animation: scale the modal image
let scaleFactor = 1;
let modalImage = document.querySelector('.modal-content img');


const scaleImage = () =>{
    // toggle the factor between 1 and 0.8
    if (scaleFactor===1){
        scaleFactor=0.8;
    }
    else if (scaleFactor===0.8){
        scaleFactor=1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`;
}

modalBtn = document.querySelector('#thanks-modal-button');
modalBtn.addEventListener('click',()=>{
    modal.style.display = "none";
})