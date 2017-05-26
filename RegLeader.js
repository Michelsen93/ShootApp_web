/**
 * Created by sondrefr on 23.05.2017.
 */

/**
 * gets all the persons from the server
 */
window.onload = loadPersons
function loadPersons(){

    var table2 = document.getElementById("myTableLeader2")
    while(table2.rows.length>1){
        table2.deleteRow(1)
    }

    var persons = getPersons(callbackPerson);



}

var persons
function callbackPerson(json) {

    console.log("jojo")
    var jsPersons = JSON.parse(json);


    persons = jsPersons

    jsPersons.forEach(outputPerson);

}

/**
 * puts all the persons into the webpage
 * @param item, each person object
 * @param index, index of the person object
 */
function outputPerson(item, index) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableLeader2");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    // Add some text to the new cells:
    cell1.innerHTML = item.firstName + " " + item.lastName
    cell2.innerHTML = item.mail
    cell3.innerHTML = item.shooterId
    cell4.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell4.onclick = addLeader

}

/**
 * adds the person to the registerd person table
 */
function addLeader(e){
    var parent = e.target.parentNode.parentNode;
    console.log(parent)
    var children = parent.childNodes;
    var name = children[0].innerHTML;
    var email = children[1].innerHTML;
    var shooterId = children[2].innerHTML;


    var table = document.getElementById("myTableLeader1")
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name
    cell2.innerHTML = email
    cell3.innerHTML = shooterId
    cell4.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell4.onclick = removePerson
}

/**
 * Remove class from registerd person table
 */
function removePerson(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("myTableLeader1")
    parent.remove(table)
    console.log(table.rows.length)

}

/**
 * saves the class to the server
 */
var competitionLeaderTable = []
function fillLeaderBox(){
    var table = document.getElementById("myTableLeader1")



    console.log(table.rows.length)

    for(i = 1; i < table.rows.length; i++){

        var leader = {
            mail: table.rows[i].cells[1].innerHTML,
            competitionNumber: localStorage.getItem("competitionNumber")
        }
        addCompetitionLeader(leader)
        console.log(leader)

        //competitionLeaderTable[i-1] = table.rows[i].cells[1].innerHTML
    }

}

/**
 * search through all the persons to find matches
 */
function searchPerson() {

    var table2 = document.getElementById("myTableLeader2")
    while(table2.rows.length>1){
        table2.deleteRow(1)
    }

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
    table.forEach(outputPerson)
}
