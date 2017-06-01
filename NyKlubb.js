/**
 * Created by sondrefr on 09.05.2017.
 */


window.onload = loadClub()
function loadClub(){

    if(localStorage.getItem("clubName")!== null){
        console.log(localStorage.getItem("clubName"))
        getClubByName(localStorage.getItem("clubName"), callbackClub)
    }
}

var contactPerson
var jsClub
function callbackClub(json){
    jsClub = JSON.parse(json)

    document.getElementById("email").value = jsClub.mail
    document.getElementById("name").value = jsClub.name
    document.getElementById("address").value = jsClub.address

    contactPerson = jsClub.contactPersons



}

/**
 * saves the club to the server, and send you to next page
 */

function saveClub() {
    if(localStorage.getItem("clubName")!== null) {
        var id = jsClub._id;
        deleteClub(id);
    }

    localStorage.clear()



    var club = {
        mail: document.getElementById("email").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,

    };
    localStorage.setItem("clubName", club.name)
    console.log(club)
    postClub(club);



    newContactPerson()
}

var iContactPerson = 0;
function newContactPerson(){
    if(iContactPerson<1) {
        div = document.createElement('div');
        div.innerHTML =

            '<h4>Kontaktpersoner</h4>' +
            '<table class="table table-hover text-center" id="contactPersonTable">' +
            '<tr>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Skytternr.</th>' +
            '<th class="text-center">Email</th>' +
            '<th class="text-center">Telefonnr.</th>' +
            '<th class="text-center">Fjern</th>' +
            '</tr>' +
            '</table>' +


            '<br><br>' +

            '<div class="col-xs-2">' +
            '<select id="selected" class="form-control">' +
            '<option value="searchFirstName">Fornavn</option>' +
            '<option value="searchLastName">Etternavn</option>' +
            '<option value="searchShooterId">Skytternr.</option>' +
            '</select>' +
            '</div>' +

            '<div class="col-xs-4">' +
            '<input type="text" id="searchText" class="form-control input-sm">' +
            '</div>' +

            '<div class="col-xs-1">' +
            '<button onclick="searchPerson()" class="btn btn-primary">Søk</button>' +
            '</div>' +
            '<div class="col-xs-1">' +
            '<button onclick="reset()" class="btn btn-secondary">Tilbakestill</button>' +
            '</div>' +

            '<br><br><br>' +

            '<div class="scrollable table-responsive">'+
            '<table class="table table-hover text-center" id="personTable">' +
            '<tr>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Skytternr.</th>' +
            '<th class="text-center">Email</th>' +
            '<th class="text-center">Telefonnr.</th>' +
            '<th class="text-center">Legg til</th>' +
            '</tr>' +
            '</table>'+
            '</div>'+

            '<button onclick="saveContactPerson()" class="btn btn-success">Lagre</button>';

        document.getElementById("contactPersonsDiv").appendChild(div);
    }
    iContactPerson++;

    console.log(contactPerson)
    if (contactPerson !== undefined){

        for(i = 0; i < contactPerson.length; i++){
            var tableContactPerson = document.getElementById("contactPersonTable")

            var row = tableContactPerson.insertRow(tableContactPerson.rows.length)

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);


            // Add some text to the new cells:
            cell1.innerHTML = contactPerson[i].firstName + " " + contactPerson[i].lastName;
            cell2.innerHTML = contactPerson[i].shooterId;
            cell3.innerHTML = contactPerson[i].mail;
            cell4.innerHTML = contactPerson[i].phone;
            cell5.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
            cell5.onclick = removeFromContactPerson
        }
    }


    getPersons(callback);
}

var persons
function callback(json) {
    var jsPerson = JSON.parse(json);
    persons = jsPerson

    persons.forEach(output);


}

/**
 * puts all the persons into the webpage
 * @param item, each club object
 * @param index, index of the club object
 */
function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("personTable");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


// Add some text to the new cells:
    cell1.innerHTML = item.firstName + " " + item.lastName;;
    cell2.innerHTML = item.shooterId;
    cell3.innerHTML = item.mail;
    cell4.innerHTML = item.phone;
    cell5.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell5.onclick = addToContactPerson

}

function addToContactPerson(e) {
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;


    var tableContactPerson = document.getElementById("contactPersonTable")

    var row = tableContactPerson.insertRow(tableContactPerson.rows.length)

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


// Add some text to the new cells:
    cell1.innerHTML = children[0].innerHTML;
    cell2.innerHTML = children[1].innerHTML;
    cell3.innerHTML = children[2].innerHTML;
    cell4.innerHTML = children[3].innerHTML;
    cell5.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell5.onclick = removeFromContactPerson
}

function removeFromContactPerson(e) {
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("contactPersonTable")
    parent.remove(table)
}

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

function reset() {
    deleteTable()
    persons.forEach(output)
}

function deleteTable(){
    var table1 = document.getElementById("personTable");
    while(1 < table1.rows.length){
        table1.deleteRow(1)
    }
}

function saveContactPerson(){
    iContactPerson--;

    var table = document.getElementById("contactPersonTable")

    for (i = 1; i < table.rows.length; i++) {
        contactPerson = {
            mail: table.rows[i].cells[2].innerHTML,
            name: localStorage.getItem("clubName")
        }
        addContactPersonToClub(contactPerson)
        console.log(contactPerson)
    }

    window.location.href="KlubbLagret.html"
}