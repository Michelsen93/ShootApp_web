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




    console.log(scorecards)
    for(var i = 0; i < scorecards.length; i++){
        treff = 0;
        innertreff = 0;
        figurer = 0;
        sum = 0;
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

        //plassering index + 1
        var positionNode = document.createElement("td");
        var posistion = document.createTextNode(i+1);
        positionNode.appendChild(posistion);

        var name = document.createTextNode(scorecards[i].competitor.firstName + " " +scorecards[i].competitor.lastName);
        nameNode.appendChild(name);

        //endre til våpenklasse
        var weaponNode = document.createElement("td");
        var weapon = document.createTextNode(scorecards[i].shootingGroup.name);
        weaponNode.appendChild(weapon);

        var hitNode = document.createElement("td");
        var hit = document.createTextNode(treff);
        hitNode.appendChild(hit);

        var numberFiguresNode = document.createElement("td");
        var numberFigures = document.createTextNode(figurer);
        numberFiguresNode.appendChild(numberFigures);

        var bullsEyeNode = document.createElement("td");
        var bullsEye = document.createTextNode(innertreff);
        bullsEyeNode.appendChild(bullsEye);

        var sumNode = document.createElement("td");
        var sumN = document.createTextNode(sum);
        sumNode.appendChild(sumN);

        newRow.appendChild(positionNode)
        newRow.appendChild(nameNode);
        newRow.appendChild(weaponNode);
        newRow.appendChild(hitNode);
        newRow.appendChild(numberFiguresNode);
        newRow.appendChild(bullsEyeNode);
        newRow.appendChild(sumNode);

        table.childNodes[1].appendChild(newRow);

    }
}
