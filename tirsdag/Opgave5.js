var all= ["Lars", "Peter", "Jan", "Bo"];

///a
var resultA= all.join(", #");
console.log("opgave A______")
console.log(resultA);

///b

var numbers = [2, 3, 67, 33]; 

var resultB = numbers.reduce((acc, number) => acc+number, 0);
console.log("opgave B______")
console.log(resultB);

///c

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

var resultC = members.reduce((acc, member, index, arr) => acc + member.age ,0)
console.log("opgave C______")
console.log(resultC/members.length)
