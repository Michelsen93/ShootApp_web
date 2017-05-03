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
/**
 * Adds a new standplass to the competition
 *
 * <div class="form-group">
 <label class="col-md-4 control-label">Stevnenummer</label>
 <div class="col-md-4">
 <input  id="competitionNumber" type="text" placeholder="00000000" class="form-control input-md" required>
 </div>
 </div>
 */
var antallStandplass = 0;
function addStandplass() {
    antallStandplass++;
    var div = document.createElement('div');
    div.innerHTML = '<br><b>Standplass '+antallStandplass+' </b><br> ' +
        '<label class="col-md-2 control-label">Max treff:</label> '+
        '<input  id="competitionNumber" type="number" placeholder="00" class="form-control input-md-4" required>'+
        'Max treff: <input type="text"  class="form-control input-md" name="maxTreff_'+antallStandplass+'"><br>' +
        'Antall figurer: <input type="text" name="antFig_'+antallStandplass+'"><br>'+
        'Max innertreff: <input type="text"  name="maxinnertreff_'+antallStandplass+'"><br>'+
        'Tid (sekunder): <input type="text"  name="tid_'+antallStandplass+'"><br>'+
        '<input type="button" value="Fjern" onClick="removeStandplass(this)">';

    document.getElementById('standplass').appendChild(div);
}
/**
 * Removes a standplass to the competition
 */
function removeStandplass(div){
    document.getElementById('standplass').removeChild(div.parentNode);
    antallStandplass--;
}

/**
 * Creates a new weapongroup
 */
var i = 0;
function newWeapongroup(){
    if(i<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br><input type="text" id="newWeapongroup">  ' +
            '<input type="button" value="Legg til" onClick="addWeapongroup(this)"><br> ';

        document.getElementById('footerWeapon').appendChild(div);
        i++;
    }

}

var numWeapongroup = 0;
function addWeapongroup(div){
    var p = document.getElementById('newWeapongroup').value;

    document.getElementById('footerWeapon').removeChild(div.parentNode);
    i--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'' +
        '<button type="button" class="close" aria-label="Close" onClick="removeWeapongroup(this)"><span aria-hidden="true">&times;</span></button><br>';

    if (numWeapongroup%2==0){
        document.getElementById('weapongroup1').appendChild(div)
    }else{
        document.getElementById('weapongroup2').appendChild(div)
    }


    numWeapongroup++;
}

function removeweapongroup(div) {
    document.getElementById('weapongroup2').removeChild(div.parentNode);
    document.getElementById('weapongroup1').removeChild(div.parentNode);

    numWeapongroup--;
}

var checkedWeapon = "";
function fillWeaponBox(){

    for (i = 0; i < document.getElementById('Weapongr1_form').length; i++){

        if(document.getElementById('Weapongr1_form')[i].checked){
            checkedWeapon = checkedWeapon.concat(document.getElementById('Weapongr1_form')[i].value + '\n');

        }
    }

    document.getElementById("weapontxt").value = checkedWeapon;
}

var j = 0;
function newClass(){
    if(j<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br><input type="text" id="newClass">  ' +
            '<input type="button" value="Legg til" onClick="addClass(this)"><br> ';

        document.getElementById('footerClass').appendChild(div)
        i++;
    }

}

var numClass = 0;
function addClass(div){
    var p = document.getElementById('nyClass').value;

    document.getElementById('footerClass').removeChild(div.parentNode);
    i--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'' +
        '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><br>';

    if (numClass%2==0){
        document.getElementById('class1').appendChild(div)
    }else{
        document.getElementById('class2').appendChild(div)
    }


    numClass++;
}

var checkedClass = "";
function fillClassBox(){

    for (i = 0; i < document.getElementById('class1_form').length; i++){

        if(document.getElementById('class1_form')[i].checked){
            checkedClass = checkedClass.concat(document.getElementById('class1_form')[i].value + '\n');

        }
    }

    document.getElementById("classtxt").value = checkedClass;
}