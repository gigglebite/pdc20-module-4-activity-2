// function with two parameters
function showMsg(match1, match2){
    alert (match1 + 'vs' + match2);
}

// function with three parameters
function compute(value1, value2, value3){
    alert (value1 + value2 - value3);
}

// function with local variable
function msg1(){
    let m = "Hello";
    alert(m);
}

// function with outer variable
let n = "Hello";
function msg2(){
    let m = "World";
    alert(n + " " + m);
}

// function with boolean value 
function compare(){
    let compare = 5 < 1;
    alert(compare);
}

// function with prompt, checking age
function ageCheck(){
    let age = prompt("How old are you?", 0);
    alert (`You are ${age} years old`);
}

// function with prompt, checking age
function testConfirm(){
    let val = confirm("Are you sure you want to proceed?");
    alert (val);
}

// function with if statement and prompt
function condition(){
    let pass = prompt('Please enter password', '');
    if (pass==1234){
        alert('You are right!');
    }
}


// function with if else statement and prompt
function condition(){
    let pass = prompt('Please enter password', '');
    if (pass==1234){
        alert('Login successful');
    } else{
        alert('Uh oh, incorrect password...');
    }
}

// function with if else and comparison
function comparison(){
    let valueA = prompt('Please enter a number', '');
    let valueB = prompt('Please enter a number', '');
    if (valueA > valueB){
        alert('valueA is higher than valueB');
    } else if (valueA < valueB){
        alert('valueB is higher than valueA');
    } else{
        alert('valueA and valueB are equal');
    }
}



