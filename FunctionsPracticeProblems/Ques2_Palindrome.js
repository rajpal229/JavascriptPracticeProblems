var readlineSync = require('readline-sync');

function Palindrome(x)
{
    let y = 0;
    let temp = 0;
    let org = x;
    for (var i = 0; i <3; i++)
    {
        y = y * 10;
        temp = y + (x % 10);
        x = Math.floor(x / 10);
        y = temp;
    }
    if (y == org)
    {
        console.log("Number is a Palindrome")
    }
    else
    {
        console.log("Number is not a Palindrome")
    }
}

let number = readlineSync.questionInt("Enter Number: ");

Palindrome(number)