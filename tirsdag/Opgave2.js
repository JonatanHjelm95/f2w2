var names = ["Lars", "Anne", "Grethe", "Lis", "Peter", "Adam"];

var filteredNames = myFilter(names, function () {
    var filtered = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i].includes("A", 0)) {
            filtered.push(names[i]);
        }
    }
    return filtered;
});

var mappedNames = myMap(names, function () {
    var filtered = [];
    for (var i = 0; i < names.length; i++) {
            filtered.push(names[i].toUpperCase());    
    }
    return filtered;
})

function myMap(array, callback) {
    return callback();
}

function myFilter(array, callback) {
    return callback();
};

console.log(filteredNames);
console.log(mappedNames);