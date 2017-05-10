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
    div.innerHTML = '<form class="form-inline">' +
        '<br><h4>Standplass '+antallStandplass+' </h4><br> ' +
        '<label class="col-md-3 control-label">Max treff:</label> ' +
        '<input  id="maxHits" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Antall figurer:</label> ' +
        '<input  id="numFig" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Max innertreff:</label> ' +
        '<input  id="maxInnerHits" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<label class="col-md-3 control-label">Tid (sekunder):</label> ' +
        '<input  id="time" type="number" placeholder="00" class="form-control input-md" required><br>'+

        '<input type="button" value="Fjern" onclick="removeStandplass(this)">'+
        '</form>';

    document.getElementById('standplass').appendChild(div);
}
/**
 * Removes a standplass from the competition
 */
function removeStandplass(div){

    document.getElementById('standplass').removeChild(div.parentNode)

    antallStandplass--;
}

/**
 * Creates a new weapongroup
 */
var i = 0;
function newWeapongroup(){
    if(i<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br>Navn: <input type="text" id="newWeapongroup" class="form-control input-md">  ' +
            '<br> Beskrivelse <input type="text" id="newWeaponDescription" class="form-control input-md">'+
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
        '<button type="button" class="close" aria-label="Close" onClick="removeWeapongroup(this)"><span aria-hidden="true">&times;</span></button><br><br>';

    if (numWeapongroup%2==0){
        document.getElementById('weapongroup1').appendChild(div)
    }else{
        document.getElementById('weapongroup2').appendChild(div)
    }


    numWeapongroup++;
}

function removeWeapongroup(div) {
        document.getElementById('weapongroup2').removeChild(div.parentNode);
        document.getElementById('weapongroup1').removeChild(div.parentNode);

    numWeapongroup--;
}


function fillWeaponBox(){
    var checkedWeapon = "";

    for (l = 0; l < document.getElementById('weapongr1_form').length; l++){

        if(document.getElementById('weapongr1_form')[l].checked){
            checkedWeapon = checkedWeapon.concat(document.getElementById('weapongr1_form')[l].value + '\n');

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
        j++;
    }

}

var numClass = 0;
function addClass(div){
    var p = document.getElementById('newClass').value;

    document.getElementById('footerClass').removeChild(div.parentNode);
    j--;

    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox" id="'+p+'" value="'+p+'"> '+p+'' +
        '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><br><br>';

    if (numClass%2==0){
        document.getElementById('class1').appendChild(div)
    }else{
        document.getElementById('class2').appendChild(div)
    }


    numClass++;
}


function fillClassBox(){
    var checkedClass = "";

    for (j = 0; j < document.getElementById('class1_form').length; j++){

        if(document.getElementById('class1_form')[j].checked){
            checkedClass = checkedClass.concat(document.getElementById('class1_form')[i].value + '\n');

        }
    }

    document.getElementById("classtxt").value = checkedClass;
}