var readlineSync = require('readline-sync');

let Year = readlineSync.questionInt("Enter Year ");

if ( (Year % 4) == 0 )
{
    if (( (Year % 100) == 0) && ( (Year % 400) != 0))
    {
        console.log("Not a Leap Year")
    }
    else
    {
        console.log("Leap Year")
    }
}
else
{
    console.log("Not a Leap Year")
}