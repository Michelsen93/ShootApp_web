/**
 * Created by sondrefr on 05.05.2017.
 */

window.onload = load;
function load(){

    //deleteTable()
    var competition = getCompetitions(callback);

}

var competitions
function callback(json) {


    competitions = JSON.parse(json);

    competitions.forEach(output);
}

function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


// Add some text to the new cells:
    cell1.innerHTML = item.competitionNumber;
    cell2.innerHTML = item.date;
    cell3.innerHTML = item.club;
    cell4.innerHTML = item.location;
    cell5.innerHTML = item.competitionType;



}