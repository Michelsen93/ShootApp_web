/**
 * Created by sondrefr on 04.05.2017.
 */

/**
 * gets all the persons from the server
 */
window.onload = load;
function load(){

    deleteTable()
    var person = getPersons(callback);


    console.log(table)

}

var persons
function callback(json) {


    var jsPersonArray = JSON.parse(json);
    var jsPerson = jsPersonArray;

    persons = jsPerson

    jsPerson.forEach(output);


}

var person
function fillModal(item) {
    document.getElementById("myModalLabel").innerHTML = item.firstName + " " + item.lastName

    document.getElementById("tableName").innerHTML = item.firstName + " " + item.lastName

    document.getElementById("tableShooterId").innerHTML = item.shooterId

    document.getElementById("tableMail").innerHTML = item.mail

    document.getElementById("tablePhone").innerHTML = item.phone

    document.getElementById("tableClub").innerHTML = item.club

    person = item

}

/**
 * search through all the persons to find matches
 */
var num
function searchPerson() {

    deleteTable()

    num = 0
    persons.forEach(findPerson)


}


function findPerson(item, index) {
    var inputText = document.getElementById("searchText").value;
    var type = document.getElementById("selected").value
    var table = []



    if (type == "searchFirstName"){
        if (inputText == item.firstName){
            table[num] = item;
            num++
            console.log(item.firstName)
        }
    }else if(type == "searchLastName"){
        if (inputText == item.lastName){
            table[num] = item;
            num++
        }
    }else if(type == "searchShooterId"){
        if (inputText == item.shooterId){
            table[num] = item;
            num++
        }
    }




    table.forEach(output)
}

/**
 * puts all the persons into the webpage
 * @param item, each club object
 * @param index, index of the club object
 */
function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableButtons");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


// Add some text to the new cells:
    cell1.innerHTML = item.firstName;
    cell2.innerHTML = item.lastName;
    cell3.innerHTML = item.shooterId;
    cell4.innerHTML = item.mail;
    cell5.innerHTML = item.phone;

    var modal = document.getElementById("PopUpUtoverInfo");
    row.onclick=function () {
        modal.style.display = "block";
        fillModal(item);


    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    var deleteButton = document.getElementById("delete")
    deleteButton.onclick = function(){
        modal.style.display = "none"
        deletePersonFromServer()
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

/**
 * removes all the clubs from the webpage
 */
function deleteTable(){
    var table1 = document.getElementById("myTableButtons");
    while(1 < table1.rows.length){
        table1.deleteRow(1)
    }
}

function doChanges() {
    localStorage.setItem("email", person.mail)
    window.location.href = 'Nybruker.html'
}

function deletePersonFromServer(){
    deletePerson(person._id)
    load()
}

function newUser() {
    localStorage.clear()
    window.location.href = "NyBruker.html"
}