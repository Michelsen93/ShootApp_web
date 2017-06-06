/**
 * Created by sondrefr on 05.05.2017.
 */

window.onload = load;
function load(){

    deleteTable()
    var competition = getCompetitions(callback);
}

var competitions
function callback(json) {


    competitions = JSON.parse(json);

    competitions.forEach(output);
}

function output(item, index){
    console.log(item)
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableCompetition");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index+1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);


// Add some text to the new cells:
    cell1.innerHTML = item.competitionNumber;
    cell2.innerHTML = item.date;
    cell3.innerHTML = item.club;
    cell4.innerHTML = item.location;
    cell5.innerHTML = item.competitionType;



    if(item.active){
        cell6.innerHTML = '<span class="success glyphicon glyphicon-ok text-success"></span>';

    }else if(!item.active){
        cell6.innerHTML = '<span class="success glyphicon glyphicon-remove text-danger"></span>';
    }



    var modal = document.getElementById("PopUpCompetitionInfo");
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
        deleteCompetitionFromServer()
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


}
var btn = document.createElement("BUTTON");
var competition
function fillModal(item) {
    document.getElementById("myModalLabel").innerHTML = item.competitionNumber

    document.getElementById("competitionNumber").innerHTML = item.competitionNumber

    document.getElementById("date").innerHTML = item.date

    document.getElementById("club").innerHTML = item.club

    document.getElementById("place").innerHTML = item.location

    document.getElementById("competitionType").innerHTML = item.competitionType



    if(item.active) {
        btn.className = "btn btn-danger"
        btn.innerHTML = "Deaktiver";
    }else if(!item.active){
        btn.className = "btn btn-sucess"
        btn.innerHTML = "Aktiver    "
    }


    console.log("hei")
    document.getElementById("modalBody").appendChild(btn)

    competition = item

}

function deleteTable() {
    var table1 = document.getElementById("myTableCompetition");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}

var num
function searchCompetition() {

    deleteTable()

    num = 0
    competitions.forEach(findCompetition)


}


function findCompetition(item, index) {
    var inputText = document.getElementById("searchText").value;
    var type = document.getElementById("selected").value
    var table = []


    if (type == "searchCompetitionNumber") {
        if (inputText == item.competitionNumber) {
            table[num] = item;
            num++
            console.log(item.competitionNumber)
        }
    } else if (type == "searchClub") {
        if (inputText == item.club) {
            table[num] = item;
            console.log(item.club)
            num++
        }
    } else if (type == "competitionType") {
        if (inputText == item.competitionType) {
            table[num] = item;
            console.log(item.competitionType)
            num++
        }
    }


    table.forEach(output)
}

function regCompetitor() {
    localStorage.setItem("regDeltager", "regDeltager")
    window.location.href = "RegDeltagere.html"
}

function regTeam() {
    localStorage.setItem("regTeam", "regTeam")
    window.location.href = "RegTeam.html"
}

function seeInfo() {
    localStorage.setItem("competitionNumber", competition.competitionNumber)
    window.location.href = "StevneLagret.html"
}

function deleteCompetitionFromServer(){
    deleteCompetition(competition._id)
    load()
}

