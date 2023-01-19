var readlineSync = require('readline-sync');

let a = readlineSync.questionInt("Enter a: ");
let b = readlineSync.questionInt("Enter b: ");
let c = readlineSync.questionInt("Enter c: ");

let v1 = a + b * c;
let v2 = a % b + c;
let v3 = c + a / b;
let v4 = a * b + c;

console.log("a + b * c = " + v1)
console.log("a % b + c = " + v2)
console.log("c + a / b = " + v3 )
console.log("a * b + c = " + v4)

if ((v1 > v2) && (v1 > v3) && (v1 > v4))
{
    console.log("Maximum Value is: " + v1)
}
if ((v2 > v1) && (v2 > v3) && (v2 > v4))
{
    console.log("Maximum Value is: " + v2)
}
if ((v3 > v1) && (v3 > v2) && (v3 > v4))
{
    console.log("Maximum Value is: " + v3)
}
if ((v4 > v1) && (v4 > v2) && (v4 > v3))
{
    console.log("Maximum Value is: " + v4)
}


if ((v1 < v2) && (v1 < v3) && (v1 < v4))
{
    console.log("Minimum Value is: " + v1)
}
if ((v2 < v1) && (v2 < v3) && (v2 < v4))
{
    console.log("Minimum Value is: " + v2)
}
if ((v3 < v1) && (v3 < v2) && (v3 < v4))
{
    console.log("Minimum Value is: " + v3)
}
if ((v4 < v1) && (v4 < v2) && (v4 < v3))
{
    console.log("Minimum Value is: " + v4)
}