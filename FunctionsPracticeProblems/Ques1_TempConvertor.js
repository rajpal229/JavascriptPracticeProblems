var readlineSync = require('readline-sync');

function Convertor(op, temp)
{
    let F;
    let C;
    switch(op)
    {
        case 1:
            C = temp;
            F = (C*9/5)+32;
            console.log("Temperature in degree Fahrenheit is " + F + " at " + C + " degree Celcius")
            break;
        case 2:
            F = temp;
            C = (F-32)*5/9;
            console.log("Temperature in degree Celcius is " + C + " at " + F + " degree Fahrenheit")
            break;
        default:
            console.log("Invalid Input")
            break;
    }
    if ( C < 0)
    {
        console.log("Below Freezing Point")
    }
    else if ( C > 100)
    {
        console.log("Above Boiling Point")
    }
    else
    {
        console.log("Temperature is between Freezing and Boiling Point")
    }
}



let op = readlineSync.questionInt("Enter Value\n1. Celcius to Fahrenheit\n2. Fahrenheit to Celcius\n");

let temp = readlineSync.questionFloat("Enter Temperature: ");

Convertor(op, temp)
