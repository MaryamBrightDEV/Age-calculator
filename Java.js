console.log("JavaScript is connected");
let birthYearImput = document.getElementById("birthyear");
let button = document.getElementById("calculatebtn");
let result = document.getElementById("result");

button.addEventListener("click", function () {
    let birthYear = birthYearImput.value ;
    if(birthYear === ""){
        result.textContent = "Please enter your birth year"
        return;
    }
    let currentYear = new Date () .getFullYear() ; 
    let age = currentYear - birthYear;
    result.textContent = "Your Age is " + age;
});