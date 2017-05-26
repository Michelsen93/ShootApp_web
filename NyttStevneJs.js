/**
 * Created by sondrefr on 22.03.2017.
 */


/**
 * Saves a new stevne to the server
 */
function lagreStevne(){
    var competition = {
        date: document.getElementById("date").value,
        competitionNumber: document.getElementById("competitionNumber").value,
        club: document.getElementById("club").value,
        competitionType: document.getElementById("competitionType").value,
        program: document.getElementById("program").value,
        location: document.getElementById("location").value,
        discipline: document.getElementById("discipline").value,
    };
    console.log(competition)
    postCompetition(competition)
    var competitionNumber = document.getElementById("competitionNumber").value;
    localStorage.setItem("competitionNumber", competitionNumber)
    window.location.href='NyttStevne2.html';


}
/**
 * Adds a new standplass to the competition
 */
var antallStandplass = 0;
function addStandplass() {
    antallStandplass++;
    var div = document.createElement('div');
    div.innerHTML = '<form class="form-inline">' +
        '<br><h4>Standplass '+antallStandplass+' </h4><br> ' +
        '<label class="col-md-3 control-label">Max treff:</label> ' +
        '<input  id="maxHits" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Antall figurer:</label> ' +
        '<input  id="numFig" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Max innertreff:</label> ' +
        '<input  id="maxInnerHits" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Tid (sekunder):</label> ' +
        '<input  id="time" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<input type="button" value="Fjern" onclick="removeStandplass(this)">'+
        '</form>';

    document.getElementById('standplass').appendChild(div);
}

/**
 * Removes a standplass from the competition
 */
function removeStandplass(div){

    document.getElementById('standplass').removeChild(div.parentNode)

    antallStandplass--;
}

/**
 * gets all the clubs from the server
 */
function loadClubs(){

    deleteTableClubs();
    var club = getClubs(callbackClubs);

}

var clubs
function callbackClubs(json) {


    var jsClub = JSON.parse(json);


    clubs = jsClub

    jsClub.forEach(outputClubs);


}

/**
 * puts all the clubs into the webpage
 * @param item, each club object
 * @param index, index of the club object
 */
function outputClubs(item, index) {
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


/**
 * search through all the clubs to find matches
 */
var num
function searchClubs() {

    deleteTableClubs()

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
 * Shows the club in the webpage
 */
function addClub() {
    document.getElementById("club").value = document.getElementById("clubNameInput").value

}

/**
 * removes all the clubs from the webpage
 */
function deleteTableClubs() {
    var table1 = document.getElementById("myTableClubs");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}

