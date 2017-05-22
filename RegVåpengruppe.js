/**
 * Created by sondrefr on 22.05.2017.
 */
window.onload = loadWeapon
function loadWeapon(){


    deleteTableWeapon();

    var weaponGroup = getWeaponGroups(callbackWeapon);



}

var weaponGroups
function callbackWeapon(json) {

    console.log("jojo")
    var jsWeaponGroups = JSON.parse(json);


    weaponGroups = jsWeaponGroups

    jsWeaponGroups.forEach(outputWeapon);

}

function outputWeapon(item, index) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableWeapon");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)


    // Add some text to the new cells:
    cell1.innerHTML = item.name;
    cell2.innerHTML = item.description;
    cell3.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell3.onclick = addWeapon


    /*
     row.onclick = function () {
     addWeapon()

     }
     */

}

function deleteTableWeapon() {
    var table1 = document.getElementById("myTableWeapon");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}
/**
 * Creates a new weapongroup
 */
var iWeapon = 0;
function newWeapongroup(){
    if(iWeapon<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br>Navn: <input type="text" id="newWeapongroup1" class="form-control input-md">  ' +
            '<br> Beskrivelse <input type="text" id="newWeaponDescription1" class="form-control input-md">'+
            '<input type="button" class="btn btn-primary" value="Legg til" onClick="addNewWeapongroup(this)"><br> ';

        document.getElementById('footerWeapon').appendChild(div);
        iWeapon++;
    }

}

var numWeapongroup = 0;
function addNewWeapongroup(div){
    var weaponGroup = {
        name: document.getElementById("newWeapongroup1").value,
        description: document.getElementById("newWeaponDescription1").value,
    }
    console.log(weaponGroup.name, weaponGroup.description)
    postWeaponGroup(weaponGroup)
    iWeapon--;
    document.getElementById('footerWeapon').removeChild(div.parentNode)



    loadWeapon()
}

function addWeapon(e){
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;
    var weaponName = children[0].innerHTML;
    var weaponDescription = children[1].innerHTML;

    console.log(weaponName, weaponDescription)

    var table = document.getElementById("myTableWeapon2")
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = weaponName
    cell2.innerHTML = weaponDescription
    cell3.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell3.onclick = removeWeapon


}

function removeWeapon(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableContactPerson")
    parent.remove(table)


}




function saveWeaponToStevne(){

    var table = document.getElementById("myTableWeapon2")

    console.log(table.rows.length)

    for(i = 1; i < table.rows.length; i++){
        classObject = {
            weaponName: table.rows[i].cells[0].innerHTML,
            competitionNumber: localStorage.getItem("competitionNumber")
        }
        console.log(classObject)
        addWeaponClass(classObject)
        sleep(100)
    }

}

function sleep(time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}