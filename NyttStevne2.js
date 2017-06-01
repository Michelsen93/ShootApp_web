/**
 * Created by sondrefr on 16.05.2017.
 */
window.onload = load
function load(){
    console.log(localStorage.getItem("competitionNumber"))
    var save = document.getElementById("saveStevne")
    save.onclick = saveStevne

    getCompetitionByCompetitionNumber(localStorage.getItem("competitionNumber"), callback)

}

function saveStevne() {

    console.log(localStorage.getItem("standplassObjects"))
    var table = localStorage.getItem("standplassString").split(" ")
    table = table.splice(0, table.length-1)
    console.log(table)

    standplassObject3 = {
        numbers: table,
        competitionNumber: localStorage.getItem("competitionNumber")
    };
    console.log(standplassObject3)
    addStandplass(standplassObject3 )

    window.location.href = "StevneLagret.html"
}


var competition
function callback(json) {

    competition = JSON.parse(json);
    console.log(competition)

    fillInfo()
}

function fillInfo(){

    //weaponGroups
    if (competition.weaponGroups.length > 0) {
        divWeaponGroups = document.createElement('div');
        divWeaponGroups.innerHTML =
            '<table class="table table-hover" id="tableWeaponGroups">'+

            '</table>';

        document.getElementById("weaponGroups").appendChild(divWeaponGroups);

        var weaponGroupsTable = document.getElementById("tableWeaponGroups")
        for (i = 0; i < competition.weaponGroups.length; i++) {
            var weaponGroupsRow = weaponGroupsTable.insertRow(i)

            var weaponGroupsCell = weaponGroupsRow.insertCell(0)
            weaponGroupsCell.innerHTML = competition.weaponGroups[i].name
        }
    }

    //Classes
    if (competition.weaponClasses.length > 0) {
        divClasses = document.createElement('div');
        divClasses.innerHTML =
            '<table class="table table-hover" id="tableClasses">' +

            '</table>';

        document.getElementById("classes").appendChild(divClasses);

        var classesTable = document.getElementById("tableClasses")
        for (i = 0; i < competition.weaponClasses.length; i++) {
            var classesRow = classesTable.insertRow(i)

            var classesCell = classesRow.insertCell(0)
            classesCell.innerHTML = competition.weaponClasses[i].weaponName
        }
    }
    //Standplasser
    if(competition.standplasses.length > 0) {
        divStandplasser = document.createElement('div');
        divStandplasser.innerHTML =
            '<div class="scrollable table-responsive">' +
            '<table class="table table-hover text-center" id="tableStandplass">' +
            '<thead>' +
            '<tr>' +
            '<th class="text-center">ID</th>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Antall skudd</th>' +
            '<th class="text-center">Antall figurer</th>' +

            '</tr>' +
            '</thead>' +
            '</table>' +
            '</div>';

        document.getElementById("standplasser").appendChild(divStandplasser);

        var standplassTable = document.getElementById("tableStandplass")
        for (i = 0; i < competition.standplasses.length; i++) {
            var row = standplassTable.insertRow(i + 1)

            var cell1 = row.insertCell(0)
            var cell2 = row.insertCell(1)
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3)

            cell1.innerHTML = competition.standplasses[i].number
            cell2.innerHTML = competition.standplasses[i].name
            cell3.innerHTML = competition.standplasses[i].maxHits
            cell4.innerHTML = competition.standplasses[i].numberOfFigures
        }
    }
    //Competitors
    divCompetitors = document.createElement('div');
    divCompetitors.innerHTML =
        '<div class="scrollable table-responsive">'+
        '<table class="table table-hover text-center" id="tableCompetitors">'+
        '<thead>'+
            '<tr>'+
                '<th class="text-center">Navn</th>'+
                '<th class="text-center">Skytternr.</th>'+
                '<th class="text-center">Email</th>'+
        '</thead>'+
        '</tbody>'+
        '</table>'+
        '</div>';

    document.getElementById("competitors").appendChild(divCompetitors);

    var competitorsTable = document.getElementById("tableCompetitors")
    for (i = 0; i < competition.competitors.length; i++){
        var competitorsRow = competitorsTable.insertRow(i+1)

        var competitorsCell1 = competitorsRow.insertCell(0)
        var competitorsCell2 = competitorsRow.insertCell(1)
        var competitorsCell3 = competitorsRow.insertCell(2)

        competitorsCell1.innerHTML = competition.competitors[i].firstName + " " + competition.competitors[i].lastName
        competitorsCell2.innerHTML = competition.competitors[i].shooterId
        competitorsCell3.innerHTML = competition.competitors[i].mail
    }

    //CompetitionLeader
    if(competition.competitionLeaders.length > 0) {
        divLeaders = document.createElement('div');
        divLeaders.innerHTML =
            '<table class="table table-hover" id="tableLeader">' +
            '<thead>' +
            '<tr>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Email</th>' +
            '<th class="text-center">Skytternummer</th>' +
            '</tr>' +
            '</thead>' +
            '</table>';

        document.getElementById("leaders").appendChild(divLeaders);

        var leaderTable = document.getElementById("tableLeader")
        for (i = 0; i < competition.competitionLeaders.length; i++) {
            var leaderRow = leaderTable.insertRow(i + 1)

            var leaderCell1 = leaderRow.insertCell(0)
            var leaderCell2 = leaderRow.insertCell(1)
            var leaderCell3 = leaderRow.insertCell(2)

            leaderCell1.innerHTML = competition.competitionLeaders[i].firstName + " " + competition.competitionLeaders[i].lastName
            leaderCell2.innerHTML = competition.competitionLeaders[i].mail
            leaderCell3.innerHTML = competition.competitionLeaders[i].shooterId
        }
    }

    //Referee
    if(competition.referees.length > 0) {
        divReferee = document.createElement('div');
        divReferee.innerHTML =
            '<table class="table table-hover" id="tableReferee">' +
            '<thead>' +
            '<tr>' +
            '<th class="text-center">Navn</th>' +
            '<th class="text-center">Email</th>' +
            '<th class="text-center">Skytternummer</th>' +
            '</tr>' +
            '</thead>' +
            '</table>';

        document.getElementById("leaders").appendChild(divLeaders);

        var refereeTable = document.getElementById("tableReferee")

        for (i = 0; i < competition.referees.length; i++) {
            var refereeRow = refereeTable.insertRow(i + 1)

            var refereeCell1 = refereeRow.insertCell(0)
            var refereeCell2 = refereeRow.insertCell(1)
            var refereeCell3 = refereeRow.insertCell(2)

            refereeCell1.innerHTML = competition.referees[i].firstName + " " + competition.referees[i].lastName
            refereeCell2.innerHTML = competition.referees[i].mail
            refereeCell3.innerHTML = competition.referees[i].shooterId
        }
    }

    //Teams
    if (competition.teams.length > 0)
    divTeam = document.createElement('div');
    divTeam.innerHTML =
        '<div class="scrollable table-responsive">'+
        '<table class="table table-hover text-center" id="tableTeam">'+
        '<thead>'+
        '<tr>'+
            '<th class="text-center">Lag nr</th>'+
            '<th class="text-center">Medlemmer</th>'+
            '<th class="text-center">Starttid</th>'+

        '</tr>'+
        '</thead>'+
        '</table>'+
        '</div>';

    document.getElementById("teams").appendChild(divTeam);

    var teamTable = document.getElementById("tableTeam")
    for (i = 0; i < competition.teams.length; i++){
        var teamRow = teamTable.insertRow(i+1)

        var teamCell1 = teamRow.insertCell(0)
        var teamCell2 = teamRow.insertCell(1)
        var teamCell3 = teamRow.insertCell(2)

        var name = ""
        var mail = ""
        console.log(competition.teams[0].competitors[0].firstName)
        for(j = 0; j < competition.teams[i].competitors.length; j++){
            name = name + competition.teams[i].competitors[j].firstName + " " + competition.teams[i].competitors[j].lastName + '<br>'
        }

        teamCell1.innerHTML = competition.teams[i].teamNumber
        teamCell2.innerHTML = name
        teamCell3.innerHTML = competition.teams[i].startTime

    }

}


