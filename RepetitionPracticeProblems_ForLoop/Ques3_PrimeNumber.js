var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");
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
else{
    console.log("Enter a valid Input")
}
