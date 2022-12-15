const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkButton = document.querySelector("#check-btn");
const showMessage = document.querySelector("#show-message")
function clickEventHandler(){
    const sumOfAngles = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);
    if(angleOne.value && angleTwo.value && angleThree.value){if(sumOfAngles === 180){
showMessage.innerText = "These angles form a triangle"
        }
        else{showMessage.innerText = " The angles don't form a triangle"}
        
    }
    else{
showMessage.innerText = "*Please Enter all fields"
    }
    console.log(sumOfAngles);
}



checkButton.addEventListener("click" , clickEventHandler);
