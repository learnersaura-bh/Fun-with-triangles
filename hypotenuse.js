const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const submitButton = document.querySelector("#submit-btn");
const showOutput = document.querySelector("#show-output");


function calculateHypotenuse(){

    const Hypotenuse = Math.sqrt(baseInput.value**2 + heightInput.value**2)
    
    if(baseInput.value > 0 && heightInput.value >0){
showOutput.innerText = "The Hypotenuse is : " + Hypotenuse;
}
else{
    showOutput.innerText = "The values should be bigger than one"
}
}

submitButton.addEventListener("click" , calculateHypotenuse)