var readlineSync = require('readline-sync');

let weekday = readlineSync.questionInt("Enter Number between 1 and 7 ");

if ( weekday == 1)
{
    console.log("Sunday")
}
else if ( weekday == 2)
{
    console.log("Monday")
}
else if ( weekday == 3)
{
    console.log("Tuesday")
}
else if ( weekday == 4)
{
    console.log("Wednesday")
}
else if ( weekday == 5)
{
    console.log("Thrusday")
}
else if ( weekday == 6)
{
    console.log("Friday")
}
else if ( weekday == 7)
{
    console.log("Saturday")
}
else
{
    console.log("Invalid Entry")
}