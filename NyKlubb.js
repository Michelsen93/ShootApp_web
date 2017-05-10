/**
 * Created by sondrefr on 09.05.2017.
 */

window.onload = load;
function load(){

    deleteTable()
    var person = getPersons(callback);

}

var persons

function callback(json) {


    var jsPersonArray = JSON.parse(json);
    var jsPerson = jsPersonArray;

    persons = jsPerson

    jsPerson.forEach(output);


}


var num

function searchPerson() {

    deleteTable()

    num = 0
    persons.forEach(findPerson)


}


function findPerson(item, index) {
    var inputText = document.getElementById("searchText").value;
    var type = document.getElementById("selected").value
    var table = []



    if (type == "searchFirstName"){
        if (inputText == item.firstName){
            table[num] = item;
            num++
            console.log(item.firstName)
        }
    }else if(type == "searchLastName"){
        if (inputText == item.lastName){
            table[num] = item;
            num++
        }
    }else if(type == "searchShooterId"){
        if (inputText == item.shooterId){
            table[num] = item;
            num++
        }
    }




    table.forEach(output)
}

function output(item, index){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableButtons");


// Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index +1);


// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);



// Add some text to the new cells:
    cell1.innerHTML = item.firstName;
    cell2.innerHTML = item.lastName;
    cell3.innerHTML = item.shooterId;
    cell4.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    /*cell4=document.createElement("BUTTON");
    cell4.innerHTML ="t";*/
    cell4.onclick = addContactPerson;



    /*
    var modal = document.getElementById("PopUpUtoverInfo");
    row.onclick=function () {
        modal.style.display = "block";
        fillModal(item);


    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }*/

}

function deleteTable(){
    var table1 = document.getElementById("myTableButtons");
    while(1 < table1.rows.length){
        table1.deleteRow(1)
    }
}

function addContactPerson(e){
    var parent = e.target.parentNode.parentNode;
    var children = parent.childNodes;
    var fname = children[0].innerHTML;
    var lname = children[1].innerHTML
    console.log(fname, lname)
    console.log("hei")
    document.getElementById("contactPerson").value = fname + " " + lname
}