/**
 * Created by sondrefr on 04.05.2017.
 */

window.onload = load;
function load(){
    var mail = localStorage.getItem("email");
    //var div = document.createElement('div');

    var person = getPersonByMail(mail, f);

}

function f(json){
    console.log(json);
    var jsPersonArray = JSON.parse(json);
    var jsPerson = jsPersonArray[0];
    //console.log(jsPerson.firstName);

    //Firstname
    var fname  = document.getElementById("fname");
    fname.innerHTML = jsPerson.firstName;

    //Lastname
    var lname  = document.getElementById("lname");
    lname.innerHTML = jsPerson.lastName;

    //Email
    var mail  = document.getElementById("mail");
    mail.innerHTML = jsPerson.mail;

    //ShooterId
    var shooterId  = document.getElementById("shooterId");
    shooterId.innerHTML = jsPerson.shooterId;


    /*
    //Club
    var club  = document.getElementById("club");
    club.innerHTML = jsPerson.club;
    */


}