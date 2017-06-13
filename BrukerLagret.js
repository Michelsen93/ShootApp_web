/**
 * Created by sondrefr on 04.05.2017.
 */

/**
 * gets all the clubs from the server
 */
window.onload = load;
function load(){
    var mail = localStorage.getItem("email");
    //var div = document.createElement('div');
    console.log(mail)
    getPersonByMail(mail, callback);

}
var jsPerson
function callback(json){

    jsPerson = JSON.parse(json);

    //Firstname
    var fname = document.getElementById("fname")
    fname.innerHTML = jsPerson.firstName;


    //Lastname
    var lname  = document.getElementById("lname");
    lname.innerHTML = jsPerson.lastName;

    //Email
    var mail  = document.getElementById("mail");
    mail.innerHTML = jsPerson.mail;

    //Phone
    var phone = document.getElementById("phone");
    phone.innerHTML = jsPerson.phone;

    //ShooterId
    var shooterId  = document.getElementById("shooterId");
    shooterId.innerHTML = jsPerson.shooterId;

    //Club
    var club  = document.getElementById("club");
    club.innerHTML = jsPerson.club;
}

function clearStorage() {
    localStorage.clear()
}