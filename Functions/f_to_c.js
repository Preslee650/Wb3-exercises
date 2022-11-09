//my function
function convertFtoC(currentTemp) {
    
    //return is getting stored in message variable
    let conversion = (currentTemp-32)/1.8;
    return conversion;
}

//function being called
console.log(convertFtoC(92));
console.log(convertFtoC(90));
console.log(convertFtoC(72));