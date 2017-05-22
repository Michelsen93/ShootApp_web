/**
 * Created by sondrefr on 17.04.2017.
 */

function saveBruker(){

    var bruker = {
        firstName: document.getElementById("fnavn").value,
        lastName: document.getElementById("enavn").value,
        mail: document.getElementById("email").value,
        shooterId: document.getElementById("skytterNr").value,
        phone: document.getElementById("tlfnr").value,

    };

    postPerson(bruker);
    console.log(bruker);
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email)
    sleep(500)



    sleep(1000)
}



function load(){
    deleteTable();
    var club = getClubs(callback);

}

var clubs

function callback(json) {


    var jsClub = JSON.parse(json);


    clubs = jsClub

    jsClub.forEach(output);


}

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



    row.onclick = function () {
        document.getElementById("clubNameInput").value = item.name

    }


}



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

function addClub() {
    document.getElementById("klubb").value = document.getElementById("clubNameInput").value
}

function deleteTable() {
    var table1 = document.getElementById("myTableClubs");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}

function sleep (time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}