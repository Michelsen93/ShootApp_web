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
    window.setInterval(getScorecardsByCompetitionNumber(selectedCompetitionNumber, updateView), 5000);



}

function sortNumber(a,b) {

    var sumA = 0;
    var sumB = 0;
    var bullA = 0;
    var bullB = 0;
    for(var i = 0; i<a.results.length; i++){

        sumA+= a.results[i].hits + a.results[i].figures;
        bullA += a.results[i].bullseyes;
    }
    for(var i = 0; i<b.results.length; i++){
        sumB+= b.results[i].hits + b.results[i].figures;
        bullB += b.results[i].bullseyes;
    }
    if(sumA == sumB){
        return bullB - bullA;
    }
    return sumB - sumA;
}

function updateView(response){
    console.log("hei")
    var scorecards = JSON.parse(response);

    scorecards = scorecards.sort(sortNumber);
    console.log(scorecards);

    var table = document.getElementById("myTable");

    while(1 < table.rows.length){
        table.deleteRow(1);
    }

    for(var i = 0; i < scorecards.length; i++){
        var treff = 0;
        var innertreff = 0;
        var figurer = 0;
        var sum = 0;
        for(var a = 0; a < scorecards[i].results.length; a++){
            treff += scorecards[i].results[a].hits;
            innertreff += scorecards[i].results[a].bullseyes;
            figurer += scorecards[i].results[a].figures;
        }
        sum = treff + figurer;

        console.log(scorecards[i]);
        console.log(scorecards[i].competitor.lastName);
        var newRow = document.createElement("tr");
        var nameNode = document.createElement("td");

        var name = document.createTextNode(scorecards[i].competitor.lastName);
        nameNode.appendChild(name);

        var clubNode = document.createElement("td");
        var club = document.createTextNode(scorecards[i].competitor.club);
        clubNode.appendChild(club);

        var hitNode = document.createElement("td");
        var hit = document.createTextNode(treff);
        hitNode.appendChild(hit);

        var bullsEyeNode = document.createElement("td");
        var bullsEye = document.createTextNode(innertreff);
        bullsEyeNode.appendChild(bullsEye);

        var numberFiguresNode = document.createElement("td");
        var numberFigures = document.createTextNode(figurer);
        numberFiguresNode.appendChild(numberFigures);

        var sumNode = document.createElement("td");
        var sumN = document.createTextNode(sum);
        sumNode.appendChild(sumN);

        newRow.appendChild(nameNode);
        newRow.appendChild(clubNode);
        newRow.appendChild(hitNode);
        newRow.appendChild(bullsEyeNode);
        newRow.appendChild(numberFiguresNode);
        newRow.appendChild(sumNode);

        table.childNodes[1].appendChild(newRow);

    }
}
