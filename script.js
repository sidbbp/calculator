let calculation = localStorage.getItem('calculation') || '';

let display= document.querySelector(".display")

displayCalc()

function UpdateCalculation(value){
    calculation += value;
    displayCalc();
    console.log(calculation);
    localStorage.setItem('calculation',calculation);
}

function displayCalc(){
    display.innerHTML = calculation
}

function storage(){
    displayCalc();
    localStorage.setItem('calculation', calculation);
    console.log(calculation)
}