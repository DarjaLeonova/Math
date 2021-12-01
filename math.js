// declare program variables
var num1;
var num2;
var message;
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

/*Add an if statement to test that the 2nd input is not zero. You can't divide by 0,
so notify the user with an alert, that they need to reload and try again.

Check to see if the first OR second input are numbers.
Use JavaScript's isNaN() method to check.*/

if (num2 === 0) {
    alert("The second number is 0. You can't divide by zero. Reload and try again.");
} else {
    isNaN(num1);
    isNaN(num2);
    alert("At least one of the values you typed is not a number. Reload and try again.")
}

// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

// write message to web page
document.write(message);