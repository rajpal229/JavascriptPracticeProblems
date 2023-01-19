function RandomNumber(min, max){
    return Math.floor(Math.random() * (max-min)) + min;

}
let rn1 = RandomNumber(100, 999)
let rn2 = RandomNumber(100, 999)
let rn3 = RandomNumber(100, 999)
let rn4 = RandomNumber(100, 999)
let rn5 = RandomNumber(100, 999)

console.log("Generated Random Numbers are: " + rn1 + " "+ rn2 + " " + rn3 + " " + rn4 + " " + rn5)

if ((rn1 > rn2) && (rn1 > rn3) && (rn1 > rn4) && (rn1 > rn5))
{
    console.log("Maximum Value is: " + rn1)
}
if ((rn2 > rn1) && (rn2 > rn3) && (rn2 > rn4) && (rn2 > rn5))
{
    console.log("Maximum Value is: " + rn2)
}
if ((rn3 > rn1) && (rn3 > rn2) && (rn3 > rn4) && (rn3 > rn5))
{
    console.log("Maximum Value is: " + rn3)
}
if ((rn4 > rn1) && (rn4 > rn2) && (rn4 > rn3) && (rn4 > rn5))
{
    console.log("Maximum Value is: " + rn4)
}
if ((rn5 > rn1) && (rn5 > rn2) && (rn5 > rn3) && (rn5 > rn4))
{
    console.log("Maximum Value is: " + rn5)
}


if ((rn1 < rn2) && (rn1 < rn3) && (rn1 < rn4) && (rn1 < rn5))
{
    console.log("Minimum Value is: " + rn1)
}
if ((rn2 < rn1) && (rn2 < rn3) && (rn2 < rn4) && (rn2 < rn5))
{
    console.log("Minimum Value is: " + rn2)
}
if ((rn3 < rn1) && (rn3 < rn2) && (rn3 < rn4) && (rn3 < rn5))
{
    console.log("Minimum Value is: " + rn3)
}
if ((rn4 < rn1) && (rn4 < rn2) && (rn4 < rn3) && (rn4 < rn5))
{
    console.log("Minimum Value is: " + rn4)
}
if ((rn5 < rn1) && (rn5 < rn2) && (rn5 < rn3) && (rn5 < rn4))
{
    console.log("Minimum Value is: " + rn5)
}