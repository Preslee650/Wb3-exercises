//declared variables and get functions
const currentDate = new Date("08/25/1999");
//displays day name instead of number
const weekdayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //this is an array
let dayNumber = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let yearNumber = currentDate.getFullYear();
let weekdayNumber = weekdayNames[currentDate.getDay()];

//output
console.log(`Day: ${dayNumber} 
Month: ${monthNumber} 
Year: ${yearNumber} 
Weekday: ${weekdayNumber}`);