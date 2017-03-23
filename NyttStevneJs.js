/**
 * Created by sondrefr on 22.03.2017.
 */

var antallStandplass = 0
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

        document.getElementById('footerVapen').appendChild(div)
        i++;
    }

}

var antVapengrupper = 0;
function addVapengruppe(div){
    var p = document.getElementById('nyVapengruppe').value;

    document.getElementById('footerVapen').removeChild(div.parentNode);
    i--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'<br>';

    if (antVapengrupper%2==0){
        document.getElementById('vapengruppe1').appendChild(div)
    }else{
        document.getElementById('vapengruppe2').appendChild(div)
    }


    antVapengrupper++;
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