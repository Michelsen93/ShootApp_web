/**
 * Created by sondrefr on 17.04.2017.
 */

function saveBruker(){

    var bruker = {
        firstName: document.getElementById("fnavn").value,
        lastName: document.getElementById("enavn").value,
        mail: document.getElementById("email").value,
        shooterId: document.getElementById("skytterNr").value,
        phone: document.getElementById("tlfnr").value,

    };

    postPerson(bruker);
    console.log(bruker);

    var email = document.getElementById("email").value;
    localStorage.setItem("email", email)

    sleep(1000).then(() => {
        window.location.href='BrukerLagret.html'
    });
}



function load(){

    var club = getClubs(callback);

}

var clubs

function callback(json) {


    var jsClub = JSON.parse(json);


    clubs = jsClub

    jsClub.forEach(output);


}

function output(item, index) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTableClubs");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(index + 1);


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    // Add some text to the new cells:
    cell1.innerHTML = item.name;
    cell2.innerHTML = item.mail;
    cell3.innerHTML = item.address;


    var modal = document.getElementById("PopUpClubInfo");
    row.onclick = function () {
        modal.style.display = "block";
        fillModal(item);

    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function makeRadioButton(name, value, text) {

    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    label.appendChild(radio);

    label.appendChild(document.createTextNode(text));
    return label;
}



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}