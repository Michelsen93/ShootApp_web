/**
 * Created by sondrefr on 29.05.2017.
 */

window.onload = load;
function load(){
    console.log(localStorage.getItem("competitionNumber"))
    //deleteTable()
    getCompetitionByCompetitionNumber("HVL STAND"/*localStorage.getItem("competitionNumber")*/, callback)

}

var competition
function callback(json) {


    competition = JSON.parse(json);

    console.log(competition)
    //Stevneinfo
    var stevneInfo = document.getElementById("stevneInfo")
    stevneInfo.innerHTML =
        '<b>'+ "Stevnenummer: " +'</b>' + competition.competitionNumber + '<br>' +
        '<b>'+ "Dato: " +'</b>' + competition.date + '<br>'+
        '<b>'+ "Klubb: " +'</b>' + competition.club + '<br>'+
        '<b>'+ "Sted: " +'</b>' + competition.location + '<br>'+
        '<b>'+ "Stevnetype: " +'</b>' + competition.competitionType + '<br>'+
        '<b>'+ "Disiplin: " +'</b>' + competition.discipline + '<br>'+
        '<b>'+ "Program: " +'</b>' + competition.program + '<br>'

    //Weapongroups
    var weaponGroups = ""
    for (i = 0; i < competition.weaponGroups.length; i++){
        weaponGroups = weaponGroups + competition.weaponGroups[i].name + '<br>'
    }

    var weaponGroup = document.getElementById("weaponGroups")
    weaponGroup.innerHTML = weaponGroups

    //Classes

    var classes = ""
    for (i = 0; i < competition.weaponClasses.length; i++){
        console.log(competition.weaponClasses[i].weaponName)
        classes = classes + competition.weaponClasses[i].weaponName + '<br>'
    }

    var weaponClass = document.getElementById("weaponClasses")
    weaponClass.innerHTML = classes

    //Standplasser
    var standplassTable = document.getElementById("tableStandplass")
    for (i = 0; i < competition.standplasses.length; i++){
        var row = standplassTable.insertRow(i+1)

        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        console.log(competition.standplasses[i].number)
        cell1.innerHTML = competition.standplasses[i].number
        cell2.innerHTML = competition.standplasses[i].name
        cell3.innerHTML = competition.standplasses[i].maxHits
        cell4.innerHTML = competition.standplasses[i].numberOfFigures
        cell5.innerHTML = competition.standplasses[i].description
    }

    //Skyttere
    competition.competitors.forEach(outputCompetitors)

    //Stevneleder og dommere
    var competitionLeader = ""
    for (i = 0; i < competition.competitionLeaders.length; i++){
        competitionLeader = competitionLeader + competition.competitionLeaders[i].firstName + " " + competition.competitionLeaders[i].lastName + '<br>'
    }

    var referees = ""
    for (i = 0; i < competition.referees.length; i++){
        referees = referees + competition.referees[i].firstName + " " + competition.referees[i].lastName + '<br>'
    }

    var refAndLeader = document.getElementById("refAndLeader")
    refAndLeader.innerHTML = '<dl>'+
        '<dt>' + '<b>' + "Stevneleder:" + '</b>' + '</dt>'+
            '<dd>' + competitionLeader + '</dd>'+
        '</dl>'+

        '<dl>'+
        '<dt>' + '<b>' + "Dommere:" + '</b>' + '</dt>'+
            '<dd>' + referees + '</dd>'+
        '</dl>';

    //Lagene
    var teamTable = document.getElementById("tableTeam")

    for (i = 0; i < competition.teams.length; i++){
        var row = teamTable.insertRow(i+1)

        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        var name = ""
        var mail = ""
        console.log(competition)
        console.log(competition.teams[0].competitors[0].firstName)
        for(j = 0; j < competition.teams[i].competitors.length; j++){
            name = name + competition.teams[i].competitors[j].firstName + " " + competition.teams[i].competitors[j].lastName + '<br>'
            mail = mail + competition.teams[i].competitors[j].mail + '<br>'
        }

        cell1.innerHTML = competition.teams[i].teamNumber
        cell2.innerHTML = name
        cell3.innerHTML = mail
        cell4.innerHTML = competition.teams[i].startTime

    }
}

function outputCompetitors(item, index) {

    var competitorsTable = document.getElementById("tableCompetitors")

        var row = competitorsTable.insertRow(index+1)

        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        console.log(item)
        cell1.innerHTML = item.firstName + " " + item.lastName
        cell2.innerHTML = item.shooterId
        cell3.innerHTML = item.mail
        cell4.innerHTML = item.phone

}

var num
function searchPerson() {

    deleteTable()

    num = 0
    competition.competitors.forEach(findPerson)


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
    table.forEach(outputCompetitors)
}

function deleteTable(){
    var table1 = document.getElementById("tableCompetitors");
    while(1 < table1.rows.length){
        table1.deleteRow(1)
    }
}

function clear() {
    localStorage.clear()
}