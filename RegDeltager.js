/**
 * Created by sondrefr on 17.04.2017.
 */

/**
 * gets all the persons from the server
 */
window.onload = load;
function load(){

    console.log(localStorage.getItem("competitionNumber"))
    var person = getPersons(callback);

}

var persons

function callback(json) {


    var jsPersonArray = JSON.parse(json);
    var jsPerson = jsPersonArray;

    persons = jsPerson

    jsPerson.forEach(output);


}

/**
* puts all the persons into the webpage
* @param item, each person object
* @param index, index of the person object
*/
function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("tableUsers");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5)


// Add some text to the new cells:
    cell1.innerHTML = item.firstName;
    cell2.innerHTML = item.lastName;
    cell3.innerHTML = item.shooterId;
    cell4.innerHTML = item.mail;
    cell5.innerHTML = item.phone;
    cell6.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell6.onclick = addParticipant



}

/**
 * adds the person to the registerd person table
 */
function addParticipant(e) {

    var tableRegUser = document.getElementById("tableRegUsers");

    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;


    var row = tableRegUser.insertRow(tableRegUser.rows.length)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)

    cell1.innerHTML = children[0].innerHTML
    cell2.innerHTML = children[1].innerHTML
    cell3.innerHTML = children[2].innerHTML
    cell4.innerHTML = children[3].innerHTML
    cell5.innerHTML = children[4].innerHTML
    cell6.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell6.onclick = removeParticipant
}

/**
 * Remove class from registerd person table
 */
function removeParticipant(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableRegUsers")
    parent.remove(table)


}

/**
 * search through all the persons to find matches
 */
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
 * makes the person table empty
 */
function deleteTable(){
    var table1 = document.getElementById("tableUsers");
    while(1 < table1.rows.length){
        table1.deleteRow(1)
    }
}

/**
 * saves the class to the server
 */
function saveCompetitors() {
    var competitionNumber = "HVL STAND"/*localStorage.getItem("competitionNumber")*/;

    var table = document.getElementById("tableRegUsers")
    var row
    var competitors = []

    for(i = 1; i < table.rows.length; i++){
        row = table.rows[i]
        competitors[i-1] =  table.rows[i].cells[3].innerHTML
        console.log(competitors[i-1])
    }

    competitor = {
        competitionNumber: competitionNumber,
        competitors: competitors
    }

    addCompetitor(competitor)

    if(localStorage.getItem("regDeltager") == "regDeltager"){
        window.location.href = "StevneLagret.html";

        localStorage.removeItem("regDeltager")
    }else{
        window.location.href = "NyttStevne2.html";
    }

}