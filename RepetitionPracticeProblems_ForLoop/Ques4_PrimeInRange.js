var readlineSync = require('readline-sync');

let lower = readlineSync.questionInt("Enter Range Lower Limit: ");
let upper = readlineSync.questionInt("Enter Range Upper Limit: ");

for (lower; lower <= upper; lower++)
{
    let isPrime = true;

if (lower == 1)
{
    console.log("1 is not a Prime Number")
}
else if (lower > 1)
{
    for (var i =2; i < lower; i++)
    {
        if (lower % i == 0)
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
    {
        console.log(lower + " is Prime Number")
    }
    else
    {
        console.log(lower + " is not Prime Number")
    }
}
}