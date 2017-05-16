/**
 * Created by sondrefr on 10.05.2017.
 */

window.onload = loadClub;
function loadClub(){
    var name = localStorage.getItem("name");
    //var div = document.createElement('div');
    console.log(name)
    var club = getClubByName(name, f);

}

function f(json){
    console.log(json);
    var jsClubArray = JSON.parse(json);
    var jsClub = jsClubArray[0];

    //Firstname
    var email  = document.getElementById("email");
    email.innerHTML = jsClub.mail;

    //Lastname
    var name  = document.getElementById("name");
    name.innerHTML = jsClub.name;

    //Email
    var address  = document.getElementById("address");
    address.innerHTML = jsClub.address;

    console.log(jsClub.contactPersons.length)
    for(i = 0; i < jsClub.contactPersons.length; i++){
        console.log(jsClub.contactPersons[i].firstName)
        var ls = document.createElement("ls")
        ls.className = "list-group-item list-group-item-success"
        ls.innerHTML = jsClub.contactPersons[i].firstName
        var div = document.getElementById("contactPersons")
        div.appendChild(ls)
    /*var n = jsClub.contactPersons[1].firstName

        var div = document.createElement('div');
        div.innerHTML = '<ls class="list-group-item list-group-item-success">'n'</ls>' ;
     */

    }

    

    /*
     //Club
     var club  = document.getElementById("club");
     club.innerHTML = jsPerson.club;
     */

    loadPersons()
}

function loadPersons(){

    deleteTable()
    var person = getPersons(callback);

}

var persons

function callback(json) {


    var jsPersons = JSON.parse(json);

    persons = jsPersons

    jsPersons.forEach(output);

    console.log(persons)
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
    var cell5 = row.insertCell(4);



// Add some text to the new cells:
    cell1.innerHTML = item.firstName;
    cell2.innerHTML = item.lastName;
    cell3.innerHTML = item.shooterId;
    cell4.innerHTML = item.mail
    cell5.innerHTML = '<button  class="btn btn-primary">Legg til</button>';
    cell5.onclick = addContactPerson;





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
    var lname = children[1].innerHTML;
    var email = children[3].innerHTML;
    console.log(fname, lname)

    var table = document.getElementById("tableContactPerson")
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = fname + " " +lname
    cell2.innerHTML = email
    cell3.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell3.onclick = removeContactPerson


}

function removeContactPerson(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableContactPerson")
    parent.remove(table)
    console.log(table.rows.length)

}

function saveContactPerson()
{
    //console.log(i)
    var table = document.getElementById("tableContactPerson");
    //console.log(table.rows[i].cells[1].innerHTML)
    //console.log(club.mail )
    num = table.rows.length;

    for (var i=1; i < num; i++) {

        var contactPerson = {
            mail: table.rows[i].cells[1].innerHTML,
            name: document.getElementById("email").innerHTML, // document.getElementById("name").value,
        }

        addContactPersonToClub(contactPerson);
        console.log(i);
        console.log(contactPerson);

        sleep(500);
        window.location.href = 'Klubber.html'

    }





    //window.location.href='KlubbLagret.html'


}

function sleep (time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}