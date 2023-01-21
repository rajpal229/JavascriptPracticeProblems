var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");

for (var i =2; i < number; i++)
    {
        let isPrime = true;
        if (number % i == 0)
        {
            for (var j =2; j < i; j++)
                {
                    if (i % j == 0)
                    {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                {
                    console.log(i + " is Prime Factor")
                }
        }
    }