//my function
function convertCtoF(currentTemp) {
    
    //return is displaying conversion variable
    let conversion = (currentTemp * 9/5) + 32;
    return conversion;
}

//function being called
console.log(convertCtoF(92));
console.log(convertCtoF(90));
console.log(convertCtoF(72));