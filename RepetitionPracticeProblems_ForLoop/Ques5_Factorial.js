var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");
let answer = 1;
for (var i = 1; i <= number; i++)
{
    answer = answer * i;   
}
console.log("Factorial of " + number + " is " + answer)