var names = ["Lars", "Anne", "Grethe", "Lis", "Peter"];

var filteredNames = names.filter(function(name){  
        return name.includes("A", 0);
});

var newNames = names.map(function(name){
    return name.toUpperCase();
}
)
console.log(newNames);