/**
 * Created by sondrefr on 10.05.2017.
 */

/**
 * gets all the clubs from the server
 */
window.onload = loadClub;
function loadClub(){

    var name = localStorage.getItem("clubName");
    console.log(name)
    getClubByName(name, callback);

}

var jsClub
function callback(json){

    jsClub = JSON.parse(json);


    //Firstname
    var email  = document.getElementById("email");
    email.innerHTML = jsClub.mail;

    //Lastname
    var name  = document.getElementById("name");
    name.innerHTML = jsClub.name;

    //Email
    var address  = document.getElementById("address");
    address.innerHTML = jsClub.address;

    //Contactperson
    var contactPerson=""
    for (i = 0; i < jsClub.contactPersons.length; i++) {
        contactPerson = contactPerson + jsClub.contactPersons[i].firstName + " " + jsClub.contactPersons[i].lastName + '<br>'
    }
    var club = document.getElementById("contactPersons");
    club.innerHTML = contactPerson
}

function clearStorage() {
    localStorage.clear()
}