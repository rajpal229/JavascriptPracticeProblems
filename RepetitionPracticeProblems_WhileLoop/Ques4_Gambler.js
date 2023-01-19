let money = 10;
let bet = 0;
let win = 0;
let lose = 0;
let i = 0;

while (true)
{
    if (money == 0)
    {
        console.log("\n\nLOSER!!\nYou are Broke")
        console.log("Bet made: " + bet + " won " + win + " times and lost " + lose + " times")
        break;
    }
    else if (money == 20)
    {
        console.log("\n\nCongratulations!!!\nYou Won")
        console.log("Bet made: " + bet + " won " + win + " times and lost " + lose + " times")
        break;
    }
    else
    {
        while((money > 0) && (money < 20))
        {
            console.log("Place Your Bet")
            var result = Math.floor(Math.random() * 2);
            if(result == 1)
            {
                console.log("You Won")
                money++;
                bet++;
                win++;
                console.log("Money left: " + money + " Bet made: " + bet + " won " + win + " times and lost " + lose + " times")
            }
            else
            {
                console.log("You Lose")
                money--;
                bet++;
                lose++;
                console.log("Money left: " + money + " Bet made: " + bet + " won " + win + " times and lost " + lose + " times")
            }
        }
    }
}