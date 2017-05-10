/**
 * Created by sondrefr on 05.05.2017.
 */

window.onload = load;
function load(){

//    var person = getPersons(callback);

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = "Per";
    cell2.innerHTML = "Hansen";
    cell3.innerHTML = "123@go.no";
    cell4.innerHTML = "button";
    cell5.innerHTML = "button";

    var modal = document.getElementById("popUpSlettStevne");
    row.onclick=function () {
        modal.style.display = "block";
        console.log("hei")
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
/*
function callback(json) {


    var jsPersonArray = JSON.parse(json);
    var jsPerson = jsPersonArray;



    jsPerson.forEach(output);


}

function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableButtons");





// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);

    row.innerHTML='<tr class="clickable-row" data-toggle="modal" data-target="#PopUpUtoverInfo">'

    /*
     var modal = document.getElementById("PopUpUtoverInfo");
     row.onclick=function () {
     modal.style.display = "block";
     console.log("hei")
     }
     */


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
/*
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
*/

// Add some text to the new cells:
/*
    cell1.innerHTML = item.firstName;
    cell2.innerHTML = item.lastName;
    cell3.innerHTML = item.mail;

    console.log(index + item.firstName)
}
*/