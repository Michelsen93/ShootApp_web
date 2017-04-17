/**
 * Created by sondrefr on 17.04.2017.
 */

function saveBruker(){

    var fnavn = document.getElementById("fnavn").value;
    var enavn = document.getElementById("enavn").value;
    var email = document.getElementById("email").value;
    var skytterNr = document.getElementById("skytterNr").value;
    var tlfnr = document.getElementById("tlfnr").value;
    var klubb = document.getElementById("klubb").value;
    var passord = document.getElementById("passord").value;

    var bruker = {
        fname: fnavn,
        ename: enavn,
        email: email,
        skytterNr: skytterNr,
        tlfnr: tlfnr,
        klubb: klubb,
        passord: passord
    }
    var jsonBruker = JSON.stringify(bruker);

    alert (jsonBruker);
}