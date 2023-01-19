let Head = 0;
let Tail = 0;
let i = 0;

while ((Head < 11) && (Tail < 11))
{
    var flip = Math.floor(Math.random() * 2);
    if (flip == 0)
    {
        console.log("It's a Head")
        Head++;
    }
    else
    {
        console.log("It's a Tail")
        Tail++;
    }
    console.log("Head: " + Head + "  Tail: " + Tail)
}