/**
 * Created by sondrefr on 09.05.2017.
 */

/**
 * saves the club to the server, and send you to next page
 */
function saveClub() {
    var club = {
        mail: document.getElementById("email").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,

    };
    console.log(club)
    postClub(club);

    window.location.href="KlubbLagret.html"
}


