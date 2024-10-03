// MATH METHODS 
// Assignment # 26-30 JAVASCRIPT


// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

document.write(`<h1>1) Positive integer into Math (floor,random & ceil)</h1>`);

let userNum =+prompt("Enter any positive integer with decimal below");
let number= parseFloat(userNum);
document.write(`<b>Number :</b> ${number}<br>`);

const roundedValue = Math.round(number);
document.write(`<p><b>Rounded Value:</b> ${roundedValue}</p>`);
 const floorValue = Math.floor(number);
 document.write(`<p><b>Floor Value:</b> ${floorValue}</p>`);
const ceilValue = Math.ceil(number);
document.write(`<p><b>Ceil Value:</b> ${ceilValue}</p><br>`);




// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

document.write(`<h1>2) Negative Floating value into Math (floor,random & ceil)</h1>`);
let userNumber =+prompt("Enter any negative floating points below");
document.write(`<b>Number :</b> ${userNumber}<br>`);

const round_Value = Math.round(userNumber);
document.write(`<p><b>Rounded Value:</b> ${round_Value}</p>`);
 const floor_Value = Math.floor(userNumber);
 document.write(`<p><b>Floor Value:</b> ${floor_Value}</p>`);
const ceil_Value = Math.ceil(userNumber);
document.write(`<p><b>Ceil Value:</b> ${ceil_Value}</p><br>`);


// 3. Write a program that displays the absolute value of a 
// number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write(`<h1>3) Absolute value of Number</h1>`);

let value =prompt(`Enter number to get its absolute value`);
document.write(`<p style="font-size:20px";><b>Number : </b> ${value}</p> `);
let absvalue=Math.abs(value);
document.write(` <p style="font-size:20px";>The Absolute value of <b>${value} is  ${absvalue}</b></p><br>`);

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

function roll(){
    let randamNum =Math.floor(Math.random()*6)+1;
    let result =document.getElementById('result').innerHTML=`your roll is ${randamNum}<br>`;
}


// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser


function tossTheCoin(){
let coin =Math.floor(Math.random()*2);
 document.getElementById('random').innerHTML=`<h3>Your coin number is ${coin+1}</h4>`;

if(coin ==1){
    document.getElementById('message').innerHTML=`*Random coin value is Head`;
}
else{
    document.getElementById('message').innerHTML= `*Random coin value is Tail`;
}
}


// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

function  generateRandomNumber(){
    let randamNum2 =Math.floor(Math.random() *100)+1;
     document.getElementById('Number').innerHTML=`Random number is: ${randamNum2}<br>`;
}

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms

function displayWeight() {
    let input = document.getElementById('weightInput').value.trim();
    let weight;

    // Check different formats
    if (input.endsWith('kgs') || input.endsWith('kilograms')) {
        weight = input.replace(/kgs|kilograms/g, '').trim();
    } else if (!isNaN(input)) {
        weight = input;
    } else {
        weight = "Invalid input. Please enter a valid weight.";
    }

    // Display the result
    if (weight && !isNaN(weight)) {
        document.getElementById('result_1').innerHTML = `Your weight is: ${weight} kg`;
    } else {
        document.getElementById('result_1').innerHTML = weight;
    }
}


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user. 


function Guess(){
let correctNum = 5;
let guess = document.getElementById('GuessNum').value;
let result_2=document.getElementById('result_2');

if(guess==correctNum){
   result_2.innerHTML= "Congratulations! your guess is correct";
}
else{
    result_2.innerHTML = "Sorry, that's not correct. Try again!";
}


}


