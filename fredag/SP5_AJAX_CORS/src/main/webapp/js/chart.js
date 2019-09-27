var previousID = "";
var svgObject;
var map;
var chart;
var selected = false;

window.onload = function () {
    svgObject = document.getElementById("svg-object");
    map = svgObject.contentDocument;
    chart = map.getElementById("svg2");
    chart.addEventListener("click", function (event) {
        fetch(event.target.id);
        console.log(event.target.id)
        editCountrycolor(chart.getElementById(event.target.id))
//        chart.getElementById(event.target.id).setAttribute("style", "fill: red");
//        document.getElementById(event.target.id).setAttribute("fill", "#333")
    });
}
function editCountrycolor(country) {
    country.setAttribute("style", "fill: red");
    if (previousID == "") {
        previousID = country.id;
    } else {
        restoreCountryColor(previousID);
    }
    previousID = country.id;

}

function restoreCountryColor(id) {
    chart.getElementById(id).setAttribute("style", "fill: #c0c0c0")
}
function createCountryData(json) {
    var output = "Country: " + json["name"] + ", ";
    output += "Population: " + json["population"] + ", ";
    output += "Area: " + json["area"] + ", ";
    output += "Borders: " + json["borders"];

    return output;

}
function fetch(countryId) {
    if (countryId === "svg2") {
        document.getElementById("output").innerHTML = "";
        return ""
    }
    if (countryId === "ru-main") {
        countryId = "ru"
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById("output").innerHTML =
//                    this.responseText;
            var json = JSON.parse(this.responseText)
            document.getElementById("output").innerHTML = createCountryData(json[0]);

        }
    }
    xhr.open('GET', 'http://restcountries.eu/rest/v1/alpha?codes=' + countryId);
    xhr.send()

}