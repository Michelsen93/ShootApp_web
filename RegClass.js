/**
 * Created by sondrefr on 22.05.2017.
 */

/**
 * gets all the classes from the server
 */
window.onload = loadClass
function loadClass(){
    console.log("hei");

    deleteTableClass();

    var weaponClass = getWeaponClasses(callbackClass);



}

var classes
function callbackClass(json) {

    console.log("jojo")
    var jsClasses = JSON.parse(json);
    console.log(jsClasses)

    classes = jsClasses

    jsClasses.forEach(outputClass);

}

/**
 * puts all the classes into the webpage
 * @param item, each class object
 * @param index, index of the class object
 */
function outputClass(item, index) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableClass");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);



    // Add some text to the new cells:
    cell1.innerHTML = item.weaponName;
    cell2.innerHTML = item.description;
    cell3.innerHTML = '<button  class="btn btn-primary" >Legg til</button>';
    cell3.onclick = addClass


    /*
     row.onclick = function () {
     addWeapon()

     }
     */

}

/**
 * removes all the classes from the webpage
 */
function deleteTableClass() {
    var table1 = document.getElementById("myTableClass");
    while (1 < table1.rows.length) {
        table1.deleteRow(1)
    }
}
/**
 * Creates input for a new class
 */
var iClass = 0;
function newClass(){
    console.log("h")
    if(iClass<1) {
        var div = document.createElement('div');
        div.innerHTML = '<br>Navn: <input type="text" id="newClassName" class="form-control input-md">  ' +
            '<br> Beskrivelse <input type="text" id="newClassDescription" class="form-control input-md">'+
            '<input type="button" class="btn btn-primary" value="Legg til" onClick="addNewClass(this)"><br> ';

        document.getElementById('newClass').appendChild(div);
        iClass++;
    }

}

/**
 * saves new class to server
 */
var numClass = 0;
function addNewClass(div){
    var newClass = {
        weaponName: document.getElementById("newClassName").value,
        description: document.getElementById("newClassDescription").value,
    }

    postWeaponClass(newClass)

    document.getElementById('newClass').removeChild(div.parentNode)
    iClass--


    //loadClass()
}


/**
 * adds the class to the registerd class table
 */
function addClass(e){
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;
    var className = children[0].innerHTML;
    var classDescription = children[1].innerHTML;

    console.log(className, classDescription)

    var table = document.getElementById("myTableClass2")
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = className
    cell2.innerHTML = classDescription
    cell3.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell3.onclick = removeClass


}

/**
 * Remove class from registerd class table
 */
function removeClass(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableContactPerson")
    parent.remove(table)
    console.log(table.rows.length)

}

/**
 * saves the class to the server
*/
function saveClassToStevnet(){
    var table = document.getElementById("myTableClass2")


    console.log(table.rows.length)

    for(i = 1; i < table.rows.length; i++){
        classObject = {
            weaponName: table.rows[i].cells[0].innerHTML,
            competitionNumber: localStorage.getItem("competitionNumber")
        }
        addWeaponClass(classObject)
        console.log(classObject)
        sleep(100)
    }


}

/**
 * stops the program for å defined time
 * @param time, how long the program stops
 */
function sleep(time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}