const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-button");
const showArea = document.querySelector("#show-area");


function calculateArea(){

    const area = 1/2*(base.value * height.value)
    
    if(base.value > 0 && height.value >0){
showArea.innerText = "The area of triangle is : " + area;
}
else{
    showArea.innerText = "Enter all fields. The values should be bigger than zero."
}
}

checkButton.addEventListener("click" , calculateArea)