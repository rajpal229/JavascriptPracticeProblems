var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");

if (number < 0)
{
    console.log("Enter Positive Value")
}
else if (( number >= 0) && ( number < 10))
{
    console.log("Unit")
}
else if (( number >= 10) && ( number < 100))
{
    console.log("Ten")
}
else if (( number >= 100) && ( number < 1000))
{
    console.log("Hundred")
}
else if (( number >= 1000) && ( number < 100000))
{
    console.log("Thousand")
}
else if (( number >= 100000) && ( number < 10000000))
{
    console.log("Lakh")
}
else if (( number >= 10000000) && ( number < 1000000000))
{
    console.log("Crore")
}
else
{
    console.log("Out of Range")
}