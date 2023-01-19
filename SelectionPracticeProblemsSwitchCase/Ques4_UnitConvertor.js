var readlineSync = require('readline-sync');

function Convertor(op, value)
{
    let result = 0;
    switch (op)
    {
        case 1:
            result = value * 12;
            console.log(value + " Feet" + " is " + result + " Inches")
            break;
        case 2:
            result = value / 12;
            console.log(value + " Inches" + " is " + result + " Feet")
            break;
        case 3:
            result = value * 0.304;
            console.log(value + " Feet" + " is " + result + " Meters")
            break;
        case 4:
            result = value / 0.304;
            console.log(value + " Meters" + " is " + result + " Feet")
            break;
    }
}

let op = readlineSync.questionInt("Enter Option\n1. Feet to Inch\n2. Inch to Feet\n3. Feet to Meter\n4. Meter to Feet\n");
let value = readlineSync.questionFloat("Enter Number: ");

Convertor(op, value)