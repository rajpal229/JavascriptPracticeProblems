var readlineSync = require('readline-sync');

function Months(){
    console.log("1. January\n2. February\n3. March\n4. April\n5. May\n6. June\n7. July\n8. August\n9. September\n10. October\n11. November\n12. December")
}

let Day = readlineSync.questionInt("Enter Day ");
Months()
let Month = readlineSync.questionInt("Enter Month  ");

console.log("Date Entered is: " + Day + "/" + Month)

if ((Month < 3) && (Month < 6))
{
    console.log("false")
}
if ((Month == 3) && (Day < 20))
{
    console.log("false")
}
if ((Month == 6) && (Day > 20))
{
    console.log("false")
}
else
{
    console.log("true")
}