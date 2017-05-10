/**
 * Created by sondrefr on 17.04.2017.
 */

function saveBruker(){
    /*
    var fnavn = document.getElementById("fnavn").value;
    var enavn = document.getElementById("enavn").value;
    var email = document.getElementById("email").value;
    var skytterNr = document.getElementById("skytterNr").value;
    var tlfnr = document.getElementById("tlfnr").value;
    var klubb = document.getElementById("klubb").value;
    var passord = document.getElementById("passord").value;
*/
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
}




function test(mail){

    getPersonByMail(mail, f);
}

function f(json){
    console.log(json)
}