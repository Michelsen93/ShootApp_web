/**
 * Created by sondrefr on 22.03.2017.
 */

function stevne (stevneNummer, dato){
    this.stevneNummer = stevneNummer;
    this.dato = dato;
}

function lagreStevne(){
    n = document.getElementById("stevneNummer").value;
    o = document.getElementById("dato").value;


    k = JSON.parse(stevne1)
    alert(stevne1)
}

var antallStandplass = 0;
function addStandplass() {
    antallStandplass++;
    var div = document.createElement('div');
    div.innerHTML = '<br><b>Standplass '+antallStandplass+' </b><br> ' +
        'Max treff: <input type="text"  name="maxTreff_'+antallStandplass+'"><br>' +
        'Antall figurer: <input type="text" name="antFig_'+antallStandplass+'"><br>'+
        'Max innertreff: <input type="text"  name="maxinnertreff_'+antallStandplass+'"><br>'+
        'Tid (sekunder): <input type="text"  name="tid_'+antallStandplass+'"><br>'+
        '<input type="button" value="Fjern" onClick="removeStandplass(this)">';

    document.getElementById('standplass').appendChild(div);
}

function removeStandplass(div){
    document.getElementById('standplass').removeChild(div.parentNode);
    antallStandplass--;
}

var i = 0;
function nyVapengruppe(){
    if(i<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br><input type="text" id="nyVapengruppe">  ' +
            '<input type="button" value="Legg til" onClick="addVapengruppe(this)"><br> ';

        document.getElementById('footerVapen').appendChild(div);
        i++;
    }

}

var antVapengrupper = 0;
function addVapengruppe(div){
    var p = document.getElementById('nyVapengruppe').value;

    document.getElementById('footerVapen').removeChild(div.parentNode);
    i--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'' +
        '<button type="button" class="close" aria-label="Close" onClick="removeVapengruppe(this)"><span aria-hidden="true">&times;</span></button><br>';

    if (antVapengrupper%2==0){
        document.getElementById('vapengruppe1').appendChild(div)
    }else{
        document.getElementById('vapengruppe2').appendChild(div)
    }


    antVapengrupper++;
}

function removeVapengruppe(div) {
    document.getElementById('vapengruppe2').removeChild(div.parentNode);
    document.getElementById('vapengruppe1').removeChild(div.parentNode);

    antVapengrupper--;
}

var checkedVapen = "";
function fillVapenBox(){

    for (i = 0; i < document.getElementById('vapengr1_form').length; i++){

        if(document.getElementById('vapengr1_form')[i].checked){
            checkedVapen = checkedVapen.concat(document.getElementById('vapengr1_form')[i].value + '\n');

        }
    }

    document.getElementById("vapentxt").value = checkedVapen;
}

var j = 0;
function nyKlasse(){
    if(j<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br><input type="text" id="nyKlasse">  ' +
            '<input type="button" value="Legg til" onClick="addKlasse(this)"><br> ';

        document.getElementById('footerKlasse').appendChild(div)
        i++;
    }

}

var antKlasser = 0;
function addKlasse(div){
    var p = document.getElementById('nyKlasse').value;

    document.getElementById('footerKlasse').removeChild(div.parentNode);
    i--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'' +
        '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><br>';

    if (antKlasser%2==0){
        document.getElementById('klasse1').appendChild(div)
    }else{
        document.getElementById('klasse2').appendChild(div)
    }


    antKlasser++;
}

var checkedKlasse = "";
function fillKlasseBox(){

    for (i = 0; i < document.getElementById('klasse1_form').length; i++){

        if(document.getElementById('klasse1_form')[i].checked){
            checkedKlasse = checkedKlasse.concat(document.getElementById('klasse1_form')[i].value + '\n');

        }
    }

    document.getElementById("klassetxt").value = checkedKlasse;
}