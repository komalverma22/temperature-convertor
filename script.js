const celsiusE1=document.getElementById("celsius");
const fahrenheitE1=document.querySelector("fahrenheit");
const kelvinE1=document.getElementById("kelvin");

const container=document.querySelector(".temperature-convertor-container");

function convertor(){
    const celsiusE1=document.getElementById("celsius");
    const fahrenheitE1=document.getElementById("fahrenheit");
const kelvinE1=document.getElementById("kelvin");
let celsius = parseFloat(celsiusE1.value);

  kelvinE1.value=(celsius+273.15).toFixed(2);
 fahrenheitE1.value=((celsius*(9/5))+32).toFixed(2);


let kelvin=parseFloat(kelvinE1.value);
celsiusE1.value=(kelvin-273.15).toFixed(2)

//  fahrenheitE1.innerHTML=`${fahrenheitE11}`;
 console.log(fahrenheitE1.value);
console.log("kelvinE1");

 fahrenheitE1.innerHTML=`Fahrenheit: ${fahrenheitE1}`;
 kelvinE1.innerHTML=`Kelvin: ${kelvinE1}`;

 celsiusE1.innerHTML=`Celsius: ${celsiusE1}`;


 


}
function con(){
    let kelvin=parseFloat(kelvinE1.value);
    celsiusE1.value=(kelvin-273.15).toFixed(2);
    kelvinE1.innerHTML=`Kelvin: ${kelvinE1}`;

    celsiusE1.innerHTML=`Celsius: ${celsiusE1}`;
}

// same for fahrenheit
// con()
container.addEventListener("change",con)
// convertor();
container.addEventListener("change",convertor);

