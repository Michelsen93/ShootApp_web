/**
* Created by sondrefr on 11.05.2017.
*/

/**
 * gets all the clubs from the server
 */
window.onload = load;
function load(){

    deleteTable()
    var club = getClubs(callback);

}

var clubs
function callback(json) {


    var jsClub = JSON.parse(json);


    clubs = jsClub

    jsClub.forEach(output);


}

var club
function fillModal(item) {
    document.getElementById("myModalLabel").innerHTML = item.name

    document.getElementById("clubName").innerHTML = item.name

    document.getElementById("email").innerHTML = item.mail

    document.getElementById("address").innerHTML = item.address

    var name = ""
    var email = ""
    for(i = 0; i < item.contactPersons.length; i++){
        console.log(item)
        name = name + " " + item.contactPersons[i].firstName + " " + item.contactPersons[i].lastName + '<br>'
        email = email + " " + item.contactPersons[i].mail + '<br>'
    }
    console.log(name)
    document.getElementById("contactName").innerHTML = name
    document.getElementById("contactEmail").innerHTML = email
    club = item
}

/**
 * search through all the clubs to find matches
 */
var num
function searchClubs() {

    deleteTable()

    num = 0
    clubs.forEach(findClubs)


}


function findClubs(item, index) {
    var inputText = document.getElementById("searchText").value;
    var type = document.getElementById("selected").value
    var table = []


    if (type == "searchClubName") {
        if (inputText == item.name) {
            table[num] = item;
            num++
            console.log(item.name)
        }
    } else if (type == "searchClubMail") {
        if (inputText == item.mail) {
            table[num] = item;
            console.log(item.mail)
            num++
        }
    }


        table.forEach(output)
}

/**
 * puts all the clubs into the webpage
 * @param item, each club object
 * @param index, index of the club object
 */
function output(item, index) {

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableClubs");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    // Add some text to the new cells:
    cell1.innerHTML = item.name;
    cell2.innerHTML = item.mail;
    cell3.innerHTML = item.address;


    var modal = document.getElementById("PopUpClubInfo");
    row.onclick = function () {
        modal.style.display = "block";
        fillModal(item);

    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    var deleteButton = document.getElementById("delete")
    deleteButton.onclick = function(){
        modal.style.display = "none"
        deleteClubFromServer()
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

/**
 * removes all the clubs from the webpage
 */
function deleteTable() {
    var table1 = document.getElementById("myTableClubs");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}

function doChanges() {
    localStorage.setItem("clubName", club.name)
    window.location.href = 'NyKlubb.html'
}

function deleteClubFromServer(){
    deleteClub(club._id)
    load()
}

function newClub(){
    localStorage.clear()
    window.location.href = 'NyKlubb.html'
}