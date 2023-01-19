var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");

switch (number)
{
    case 1:
    console.log("Unit")
    break;
    case 10:
    console.log("Ten")
    break;
    case 100:
    console.log("Hundred")
    break;
    case 1000:
    console.log("Thousand")
    break;
    case 100000:
    console.log("Lakh")
    break;
    case 100000:
    console.log("Crore")
    break;
    default:
    console.log("Out of Range")
    break;
}