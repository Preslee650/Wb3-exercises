/*function displayMailingLabel(name, address, city, state, zip) {
}
let name = 'Michael';
let address = '3945 Branson Drive';
let city = 'San Mateo';
let state = 'Ca';
let zip = 94403;
console.log(`Name: ${name}  
Address: ${address}  
City: ${city}  
State: ${state}  
Zip: ${zip}`)

function addNumbers (num1, num2){
}
let someNumber=5;
let someNumber2=5;
let equation=someNumber + someNumber2;
console.log(equation)*/

function displayReceipt(amountPaid, totalDue){

// Declare variables
let message;

// Algoritme and calculation  step by step// Pseudocode
let changeDue=amountPaid-totalDue;
if(amountPaid<totalDue){
    message='needs to pay:';  
}
else {
 message = 'You paid more than enough'
}

//output
console.log('$' + changeDue + message)
}
displayReceipt(10,5);
