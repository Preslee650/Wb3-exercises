//goal-trying to get my birthday to display instead of default date

//alert('hi'); to test if script is linked to html
function displayDate() {
    const birthday = new Date(1999, 07, 25); //declared variable using new date function
    document.getElementById("test").innerHTML = birthday.toString(); //letting my function result display in html and toString function is displaying result as a string
}