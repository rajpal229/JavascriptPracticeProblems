var readlineSync = require('readline-sync');

function MagicNumber(x)
{
    let y = 0;
    let magic = 0;
    let temp = x;
    while(true)
    {
        while (Math.floor(x % 10) != 0 || x >=10)
        {
            y = y + x % 10;
            x = Math.floor(x / 10);
        }
        magic = y;
        if (magic >= 10)
        {
            x = y;
            y = 0;
        }
        else
        {
            break;
        }
    }
    if (y == 1)
    {
        console.log(temp + " is a Magic Number")
    }
    else
    {
        console.log(temp + " is not a Magic Number")
    }
}

let number = readlineSync.questionInt("Enter Number: ");

MagicNumber(number)