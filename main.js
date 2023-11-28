//First question

//Reusable function to get data of user
function getUserData(){

var firstName = prompt("Enter your first name:")
var lastName = prompt("Enter your last name:")
var confirmationFullName = confirm(`Is your full name ${firstName} ${lastName} ?`)

//Condition to let user confirm his information
if(confirmationFullName){
    var birthYear = Number(prompt("Enter your birth year:"))
    var age = calculateAge(birthYear)

    alert(`Welcome ${firstName} ${lastName}! Your age is ${age} years.`)
}else{
    alert("Please enter your information again.");
    getUserData();
}
}

getUserData();

function calculateAge(birthYear){
    var currentYear = new Date().getFullYear();
    var calculatedAge = currentYear - birthYear;
    return calculatedAge
}

//---------------------------------------------------------------------------------------------

//Second question

//Reusable function for calculating 2 numbers
function runCalculator() {
    alert(
      "Welcome to the first release of the calculator! This calculator can only perform summation."
    );
  
    var firstNumber = Number(window.prompt("Enter the first number:"));
  
    var secondNumber = Number(window.prompt("Enter the second number:"));
  
    //Condition to check that inputs are numbers
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      var sum = firstNumber + secondNumber;
  
      alert(`${firstNumber} + ${secondNumber} = ${sum}`);
    } else {
      alert("Invalid input. Please enter valid numbers.");
      runCalculator();
    }
  }
  
  runCalculator();
  





