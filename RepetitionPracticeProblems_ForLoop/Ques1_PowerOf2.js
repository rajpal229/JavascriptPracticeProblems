var readlineSync = require('readline-sync');

function Power(y)
{
    let x = Math.pow(2, y)
    return x;
}

let power = readlineSync.questionInt("Enter power of 2: ");

for (var i = 0; i <= power; i++)
{
    let value = Power(i)
    console.log(value)
}