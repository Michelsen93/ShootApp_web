/**
 * Created by Sindre on 19.05.2017.
 */

window.onload = load;

function load(){
    getCompetitions(callback);

}

var stevner

function callback(json) {
    var jsStevne = JSON.parse(json);
    stevner = jsStevne;
    fillSelecter(stevner)


}
var activeCompetitions = [];

function fillSelecter(jsStevne){
    var selecter = document.getElementById("selected");

    for(var i = 0; i<jsStevne.length; i++){
        if(jsStevne[i].active == true){
            //add name to list
            var tag = document.createElement("option");
            tag.innerHTML = jsStevne[i].competitionNumber;
            selecter.appendChild(tag);
            activeCompetitions.push(jsStevne[i]);
        }
    }
}

function findSelectedCompetition(){
    var table = document.getElementById("myTable");

    var selectedCompetitionNumber = document.getElementById("selected").value;
    /*
    for(var i = 0; i < activeCompetitions.length; i++){
        if(selectedCompetitionNumber == activeCompetitions[i].competitionNumber){
            var competition = stevner[i];
        }
    }
    */
    getScorecardsByCompetitionNumber(selectedCompetitionNumber, updateView)

    function updateView(response){
        var scorecards = JSON.parse(response);

        for(var i = 0; i < scorecards.length; i++){
            console.log(scorecards[i].competitor);
            console.log(scorecards[i].competitor.lastName);
            var newRow = document.createElement("tr");
            var nameNode = document.createElement("td");
            var name = document.createTextNode(scorecards[i].competitor.lastName);
            nameNode.appendChild(name);

            var clubNode = document.createElement("td");
            var club = document.createTextNode(scorecards[i].competitor.club);
            clubNode.appendChild(club);

            newRow.appendChild(nameNode);
            newRow.appendChild(clubNode);
            table.appendChild(newRow);

        }
    }
}

