var readlineSync = require('readline-sync');

function Power(y)
{
    let x = Math.pow(2, y)
    return x;
}

let value = 0;
let = i = 0;

let power = readlineSync.questionInt("Enter power of 2: ");

while (i <= power)
{
    if (value < 256)
    {
    value = Power(i)
    console.log(value)
    }
    else{
        break;
    }
    i++;
}