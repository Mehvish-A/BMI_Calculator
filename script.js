const number = document.querySelector(".weight");
const unit = document.querySelector(".unit");
const feet = document.querySelector(".feet")
const inches = document.querySelector(".inches");
const result = document.querySelector(".result");
const BMIstatus = document.querySelector(".BMIstatus");

function calculateBMI(){
let convertedWeight = weight.value;
let status;

console.log (unit.value);
if(unit.value==="LB"){
    convertedWeight =weight.value * 0.453592;
}


const totalHeight = feet.value * 0.3048 + inches.vale * 0.0254;
const BMI = weight.value / totalHeight ** 2;
    console.log(BMI);
    result.textContent = BMI.toFixed(2);
    if(BMI.toFixed(2) <=18.4){
        status= Underweight;
    }
    else if (BMI.toFixed(2)<=18.5 && BMI.toFixed(2)<=24.9){
        status= Normal;
    }
    BMIstatus.textContent = status;
}
