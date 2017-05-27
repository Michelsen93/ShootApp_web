/**
 * Created by sondrefr on 16.05.2017.
 */
window.onload = load
function load(){
    console.log(localStorage.getItem("competitionNumber"))
    var save = document.getElementById("saveStevne")
    save.onclick = saveStevne

}


/**
 * Gives input when creating a new standplass
 */
var iStandplass = 0
function addStandplasser(){
    if(iStandplass<1) {
        var div = document.createElement('div');
        div.innerHTML = '<form class="form-inline">' +
            '<button  class="btn btn-primary col-md-3" onclick="addStandplassToTable(this)">Legg til standplass</button>' +
            '<label class="col-md-5 control-label">ID:</label> ' +
            '<input  id="number" type="text" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Navn:</label> ' +
            '<input  id="name" type="text" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Antall skudd:</label> ' +
            '<input  id="maxHits" type="number" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Antall figurer:</label> ' +
            '<input  id="numFig" type="number" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Beskrivelse:</label> ' +
            '<textarea  id="description"  class="form-control input-md" required></textarea><br>' +


            '</form>';

        document.getElementById("footerStandplass").appendChild(div);
        iStandplass++
    }
}

/**
 * Adds the stanplass to the registered standplassr table
 * @param div, the div with the input
 */
function addStandplassToTable(div){
    var table = document.getElementById("tableStandplass")
    var row = table.insertRow(table.rows.length)


    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)


    cell1.innerHTML = document.getElementById("number").value
    cell2.innerHTML = document.getElementById("name").value
    cell3.innerHTML = document.getElementById("maxHits").value
    cell4.innerHTML = document.getElementById("numFig").value
    cell5.innerHTML = document.getElementById("description").value
    cell6.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell6.onclick = removeStandplass


    document.getElementById('footerStandplass').removeChild(div.parentNode.parentNode);
    iStandplass--
}

/**
 * Removes the standplass from the registerd table
 */
function removeStandplass(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableStandplass")
    parent.remove(table)


}

/**
 * Creats an array of all the standplasser
 * @type {Array}, array of standplasser
 */
var standplassTable = []
function addStandplasserToStevne() {
    table1 = document.getElementById("tableStandplass")
    table2 = document.getElementById("tableStandplass2")

    while(table2.rows.length>1){
        table2.deleteRow(0)
    }
    var row
    var cell1
    var cell2
    var cell3
    var cell4


    for (i=1; i<table1.rows.length; i++) {
        row = table2.insertRow(i);

        cell1 = row.insertCell(0)
        cell2 = row.insertCell(1)
        cell3 = row.insertCell(2)
        cell4 = row.insertCell(3)


        cell1.innerHTML = table1.rows[i].cells[0].innerHTML
        cell2.innerHTML = table1.rows[i].cells[1].innerHTML
        cell3.innerHTML = table1.rows[i].cells[2].innerHTML
        cell4.innerHTML = table1.rows[i].cells[3].innerHTML

        var standplassObject = {
            name: table1.rows[i].cells[1].innerHTML,
            number: table1.rows[i].cells[0].innerHTML,
            maxHits: table1.rows[i].cells[2].innerHTML,
            numberOfFigures: table1.rows[i].cells[3].innerHTML,
            description: table1.rows[i].cells[4].innerHTML,
        }
        standplassTable[i-1] = standplassObject

    }

}

/**
 * gets all the persons from the server
 */
function loadPersons2(){

    var table2 = document.getElementById("myTableReferee2")
    while(table2.rows.length>1){
        table2.deleteRow(1)
    }

    var persons = getPersons(callbackPerson2);



}

var persons2
function callbackPerson2(json) {


    var jsPersons = JSON.parse(json);


    persons2 = jsPersons

    jsPersons.forEach(outputPerson2);

}

/**
 * puts all the persons into the webpage
 * @param item, each club object
 * @param index, index of the club object
 */
function outputPerson2(item, index) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableReferee2");


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
    cell4.onclick = addReferee

}

/*
function addReferee(e){
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;
    var name = children[0].innerHTML;
    var email = children[1].innerHTML;
    var shooterId = children[2].innerHTML;


    var table = document.getElementById("myTableReferee1")
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name
    cell2.innerHTML = email
    cell3.innerHTML = shooterId
    cell4.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell4.onclick = removePerson2
}
*/

function removePerson2(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("myTableReferee1")
    parent.remove(table)
    console.log(table.rows.length)

}

var refereeTable = []
function fillRefereeBox(){
    var table = document.getElementById("myTableReferee1")
    var table2 = document.getElementById("tableReferee")
    while(table2.rows.length>1){
        table2.deleteRow(1)
    }
    var row
    var cell1
    var cell2
    var cell3
    console.log(table.rows.length)

    for(i = 1; i < table.rows.length; i++){
        row = table2.insertRow(i);
        cell1 = row.insertCell(0)
        cell2 = row.insertCell(1)
        cell3 = row.insertCell(2)
        cell1.innerHTML = table.rows[i].cells[0].innerHTML
        cell2.innerHTML = table.rows[i].cells[1].innerHTML
        cell3.innerHTML = table.rows[i].cells[2].innerHTML
        refereeTable[i-1] = table.rows[i].cells[1].innerHTML
    }

}

function searchPerson2() {

    var table2 = document.getElementById("myTableReferee2")
    while(table2.rows.length>1){
        table2.deleteRow(1)
    }

    num = 0
    persons2.forEach(findPerson2)


}

function findPerson2(item, index) {
    var inputText = document.getElementById("searchText2").value;
    var type = document.getElementById("selected2").value
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
    table.forEach(outputPerson2)
}



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
    cn = "909090"
    var competition = getCompetitionByCompetitionNumber(cn, callbackCompetition)


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
    cell5.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell5.onclick = removeTeam
    console.log(divTeam.parentNode)
    document.getElementById('footerTeam').removeChild(divTeam);
    iTeam--
}

function removeTeam(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableRegTeam")
    parent.remove(table)
}
var teamTable = []
function fillTeamBox() {
    var table = document.getElementById("tableRegTeam")
    var table2 = document.getElementById("tableTeam")
    while (table2.rows.length > 1) {
        table2.deleteRow(1)
    }
    var row
    var cell1
    var cell2
    var cell3
    console.log(table.rows.length)

    for (i = 1; i < table.rows.length; i++) {
        row = table2.insertRow(i);
        cell1 = row.insertCell(0)
        cell2 = row.insertCell(1)
        cell3 = row.insertCell(2)
        cell1.innerHTML = table.rows[i].cells[0].innerHTML
        cell2.innerHTML = table.rows[i].cells[1].innerHTML
        cell3.innerHTML = table.rows[i].cells[3].innerHTML

        team = {
            number: table.rows[i].cells[0].innerHTML,
            startTime: table.rows[i].cells[3].innerHTML,
            members: table.rows[i].cells[1].innerHTML
        }
        teamTable[i-1] = team
    }

}

function searchPerson3() {
    console.log("hei")
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

function saveStevne() {
/*
    if(weaponGroupsTable.length > 0) {
        for (i = 0; i < weaponGroupsTable.length; i++) {
            weaponGroupObject = {
                name: weaponGroupsTable[i],
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            addWeaponGroup(weaponGroupObject)
            console.log(weaponGroupObject)
            sleep(100)

        }
    }
    console.log(localStorage.getItem("competitionNumber"))
    console.log(weaponGroupObject)

    if(classesTable.length > 0) {
        for (i = 0; i < classesTable.length; i++) {
            classObject = {
                weaponName: table.rows[i].cells[0].innerHTML,
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            addWeaponClass(classObject)
            console.log(classObject)
            sleep(100)
        }
    }

    if(standplassTable.length > 0){
        for(i = 0; i < standplassTable.length; i++){
            console.log(standplassTable[i])
            postStandplass(standplassTable[i])
        }
    }

    if(standplassTable.length > 0){
        for(i = 0; i < standplassTable.length; i++){
            standplassObject = {
                number: standplassTable[i].number,
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            console.log(standplassObject)
            addStandplass(standplassObject)
        }

    }

    if(competitionLeaderTable.length > 0){
        for(i = 0; i < competitionLeaderTable.length; i++){
            competitionLeaderObject = {
                mail: competitionLeaderTable[i],
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            console.log(competitionLeaderObject)
            addCompetitionLeader(competitionLeaderObject)
        }
    }

    if(refereeTable.length > 0){
        for(i = 0; i < refereeTable.length; i++){
            refereeObject = {
                mail: refereeTable[i],
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            console.log(refereeObject)
            addReferee(refereeObject)
        }
    }

    if(teamTable.length > 0){
        for(i = 0; i < teamTable.length; i++){
            teamObject = {
                teamNumber: teamTable[i].number,
                startTime: teamTable[i].startTime,
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            addTeam(teamObject)
        }
    }

    if(teamTable.length > 0) {
        var teamMembers = []
        for (i = 0; i < teamTable.length; i++) {
            teamMembers = teamTable[i].members.split('<br>')
            teamMembers.splice(teamMembers.length - 1)
            console.log(teamMembers)
            teamMembersObject = {
                competitors: teamMembers,
                teamNumber:teamTable[i].number,
                competitionNumber: localStorage.getItem("competitionNumber")
            }
            addMembersToTeam(teamMembersObject)
        }
    }

*/

console.log(localStorage.getItem("standplassObjects"))
    var table = localStorage.getItem("standplassString").split(" ")
    table = table.splice(0, table.length-1)
    console.log(table)
    /*
    for (i = 0; i < table.length; i++){
        standplassObject3 = {
            number: table[i],
            competitionNumber: localStorage.getItem("competitionNumber")
        };
        sleep(3000);
        console.log(standplassObject3);
        addStandplass(standplassObject3);

    }
    */
    standplassObject3 = {
        number: table,
        competitionNumber: localStorage.getItem("competitionNumber")
    };
    addStandplass(standplassObject3)
}

function sleep(time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}

