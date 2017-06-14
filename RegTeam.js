/**
 * Created by sondrefr on 26.05.2017.
 */

iTeam = 0
var divTeam
function newTeam() {
    if (iTeam < 1) {
        divTeam = document.createElement('div');
        divTeam.innerHTML =
            '<br><br>' +
            '<div class="col-xs-2">' +
            '<h5> Søk: </h5>' +
            '</div>' +


            '<div class="col-xs-3">' +
            '<select id="selected3" class="form-control">' +
            '<option value="searchFirstName">Fornavn</option>' +
            '<option value="searchLastName">Etternavn</option>' +
            '<option value="searchShooterId">Skytternr.</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-xs-3">' +

            '<input type="text" id="searchText3" class="form-control input-sm">' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<button id="search" class="btn btn-primary">Søk</button>' +
            '<button  id="load" class="btn btn-secondary">Tilbakestill</button>' +
            '</div>' +
            '<br><br><br><br>' +
            '<table class="table table-hover text-center" id="tableUsers">' +
            '<thead>' +
            '<tr>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Email</th>' +
            '<th class="text-center">Skytternr</th>' +
            '<th class="text-center">Legg til</th>' +

            '</tr>' +
            '</thead>' +
            '</table>' +
            '<form class="form-inline">' +
            '<br><br>' +
            '<button  id="addTeamToTable" class="btn btn-primary col-md-3" >Legg til lag</button>' +

            '<label class="col-md-5 control-label">Lag nr:</label> ' +
            '<input  id="teamNumber" type="number" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Start tid</label> ' +
            '<input  id="startTime" type="text" placeholder="00.00" class="form-control input-md" required><br>' +

            '</form>' +
            '<br>' +
            '<table class="table table-hover text-center" id="tableTeamMemeber">' +
            '<thead>' +

            '</thead>' +
            '</table>' +
            '<br><br>';

        document.getElementById("footerTeam").appendChild(divTeam);

        var search = document.getElementById("search")
        search.onclick = searchPerson3

        var load = document.getElementById("load")
        load.onclick = loadUsers

        var addTeam = document.getElementById("addTeamToTable")
        addTeam.onclick = addTeamToTable

        loadUsers()
        iTeam++
    }
}

function loadUsers() {
    document.getElementById("fillTeam").onclick = fillTeamBox

    var table2 = document.getElementById("tableUsers")
    while (table2.rows.length > 1) {
        table2.deleteRow(1)
    }

    var competition = getCompetitionByCompetitionNumber(localStorage.getItem("competitionNumber"), callbackCompetition)


}

var users

function callbackCompetition(json) {


    var competition = JSON.parse(json);

    console.log("hade")
    users = competition.competitors

    //jsPersons.forEach(outputPerson2);
    users.forEach(outputUsers)
}

function outputUsers(item, index) {

    // Find a <table> element with id="myTable":
    var table = document.getElementById("tableUsers");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


        // Add some text to the new cells:
        console.log(localStorage.getItem("competitionNumber"))
        cell1.innerHTML = item.firstName + " " + item.lastName
        cell2.innerHTML = item.mail
        cell3.innerHTML = item.shooterId
        cell4.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
        cell4.onclick = addToTeam

}

function addToTeam(e) {
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;
    var name = children[0].innerHTML;
    var email = children[1].innerHTML;
    var shooterId = children[2].innerHTML;

    var tableTeamMember = document.getElementById("tableTeamMemeber")

    var row = tableTeamMember.insertRow(tableTeamMember.rows.length)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)

    cell1.innerHTML = name
    cell2.innerHTML = email
    cell3.innerHTML = shooterId
    cell4.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell4.onclick = removeFromTeam
}

function removeFromTeam(e) {
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableTeamMemeber")
    parent.remove(table)

}

function addTeamToTable() {

    var teamTable = document.getElementById("tableRegTeam")

    var number = document.getElementById("teamNumber").value
    var time = document.getElementById("startTime").value

    var teamMembers = document.getElementById("tableTeamMemeber")

    var teamMember = ""

    for (i = 0; i < teamMembers.rows.length; i++) {
        teamMember = teamMembers.rows[i].cells[0].innerHTML + '<br>' + teamMember
    }



    var teamMemberMail = ""

    for (i = 0; i < teamMembers.rows.length; i++) {
        teamMemberMail = teamMembers.rows[i].cells[1].innerHTML + '<br>' + teamMemberMail
    }

    var row = teamTable.insertRow(teamTable.rows.length)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)

    cell1.innerHTML = number
    cell2.innerHTML = teamMember
    cell3.innerHTML = teamMemberMail
    cell4.innerHTML = time
    cell5.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell5.onclick = removeTeam
    console.log(divTeam.parentNode)
    document.getElementById('footerTeam').removeChild(divTeam);
    iTeam--

    teamObject = {
        teamNumber:  number,
        startTime: time,
        competitionNumber: localStorage.getItem("competitionNumber")
    }
    addTeam(teamObject)
    console.log(teamObject)
}

function removeTeam(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableRegTeam")
    parent.remove(table)
}
var teamTable = []
function fillTeamBox() {
    var table = document.getElementById("tableRegTeam")

    var row
    var cell1
    var cell2
    var cell3


    for (i = 1; i < table.rows.length; i++) {


        team = {
            number: table.rows[i].cells[0].innerHTML,
            startTime: table.rows[i].cells[3].innerHTML,
            members: table.rows[i].cells[2].innerHTML
        }
        teamTable[i-1] = team
    }
    sleep(500)

    if(teamTable.length > 0){
        for(i = 0; i < teamTable.length; i++){
            var teamMembers = teamTable[i].members.split('<br>')

            teamMembers = teamMembers.splice(0,teamMembers.length-1)
            console.log(teamMembers)

            teamMembersObject = {
                teamNumber: teamTable[i].number,
                competitionNumber: localStorage.getItem("competitionNumber"),
                competitors: teamMembers
            }

            addMembersToTeam(teamMembersObject)
            console.log(teamMembersObject)
            sleep(100)
        }
    }

    if(localStorage.getItem("regTeam") == "regTeam"){
        localStorage.removeItem("regTeam")
        window.location.href = "StevneLagret.html";


    }else{
        window.location.href = "NyttStevne2.html";
    }

}

function searchPerson3() {
    var table2 = document.getElementById("tableUsers")
    while (table2.rows.length > 1) {
        table2.deleteRow(1)
    }

    num = 0
    users.forEach(findPerson3)


}

function findPerson3(item, index) {
    var inputText = document.getElementById("searchText3").value;
    var type = document.getElementById("selected3").value
    var table = []


    if (type == "searchFirstName") {
        if (inputText == item.firstName) {
            table[num] = item;
            num++
            console.log(item.firstName)
        }
    } else if (type == "searchLastName") {
        if (inputText == item.lastName) {
            table[num] = item;
            num++
        }
    } else if (type == "searchShooterId") {
        if (inputText == item.shooterId) {
            table[num] = item;
            num++
        }
    }

    table.forEach(outputUsers)
}

function sleep(time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}