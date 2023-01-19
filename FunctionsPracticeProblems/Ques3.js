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
    return y;
}
function PrimeCheck()
{
    let isPrime = true;
    if (number == 1)
    {
        console.log("1 is not a Prime Number")
    }
    else if (number > 1)
    {
        for (var i =2; i < number; i++)
        {
            if (number % i == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            console.log(number + " is Prime")
        }
        else
        {
            console.log(number + " is not Prime")
        }
    }
}

let number = readlineSync.questionInt("Enter Number: ");

PrimeCheck(number)
let reverse = Palindrome(number);
if (reverse == number)
{
    PrimeCheck(reverse)
}
