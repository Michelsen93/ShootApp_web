/**
 * Created by sondrefr on 10.05.2017.
 */

window.onload = load;
function load(){
    var name = localStorage.getItem("name");
    //var div = document.createElement('div');

    var club = getClubByName(name, f);

}

function f(json){
    console.log(json);
    var jsClubArray = JSON.parse(json);
    var jsClub = jsClubArray[0];
    //console.log(jsPerson.firstName);

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


}