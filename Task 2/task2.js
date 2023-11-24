// check number function
function checkNumber(num) {
    if(num < 0){
        console.log(num + " is a Negative Number");
    }
    else if(num > 0){
        console.log(num + " is a Positive Number");
    }
    else{
        console.log("This Number is a Zero");
    }
}

// Get numbers from html list
const numlist = document.querySelectorAll('#numb li');

// Do check number function for every number in list
numlist.forEach(function(numbers){
    const num = parseInt(numbers.textContent);
    checkNumber(num)
})
