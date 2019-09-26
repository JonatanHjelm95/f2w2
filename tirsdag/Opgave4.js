///a
var numbers = [1, 3, 5, 10, 11];
var extraNumbers = [4, 8, 15, 21, 11];


var resultA = [];

numbers.map((number, index) => {
    resultA.push(number);
    resultA.push(extraNumbers[index])
});

console.log("opgave a _____")
console.log(resultA)

///b
var names = ["Lars", "Peter", "Hans", "Adam"];
var mapped = names.map(name => {
    return "<a>"+name+"</a>"
})
var str = mapped.join('\n');
var resultB = "<nav>" + '\n' + str + '\n' + "</nav>";
console.log("opgave b _____")

console.log(resultB)

///c
var namesC = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
var table = "<table>" + '\n' + "<th>name</th><th>phone</th>";
var tableData = namesC.map(name => {
    return "<tr><td>"+name["name"]+"</td>" + "<td>"+name["phone"]+"</td></tr>";
})
var tableStr = tableData.join('\n');

var resultC = table + '\n' + tableStr + '\n' + "</table>";
console.log("opgave c _____")

console.log(resultC)
