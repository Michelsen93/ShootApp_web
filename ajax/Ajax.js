/**
 * Created by ole-martin on 15.04.2017.
 */


var baseURL = "http://localhost:3000/";


/**
 * Gets a competition
 *
 **/
function getCompetitionById(){
    
}

/**
 * Gets all competitions
 *
 **/
function getCompetitions(){
    
}

/**
 * Saves a competition
 *
 **/
function postCompetition() {
    
}

/**
 * Creates a new user
 *
 **/
function postUser() {
    
}


/**
 * Adds a team to a competition
 *
 **/
function postTeam(){
    
}

/**
 * Removes a team
 *
 **/
function deleteTeam() {
    
}


/**
 * Gets all persons
 *
 **/
function getPersonByMail(mail, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "person/findByEmail/" + mail, true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        }
    };
    xhttp.send();
}

/**
 * Gets a person
 * @param callback function to handle the response
 **/
function getPersons(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "person", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        }
    };
    xhttp.send();
}

/**
 * Gets all competitions
 * TODO handle exceptions
 */
function getCompetitions(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "competition", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        }
    };
    xhttp.send();
}

/**
 * Gets competition by identifier
 * TODO handle exceptions
 */
function getCompetitionById(id, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "competition/" + id, true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        }
    };
    xhttp.send();
}
/**
 * Saves a competition
 * @param competitionJSON
 * @param callback
 */
function postCompetition(competitionJSON, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a person in jsonformat to server
 * @param json
 * @param callback
 */
function postPerson(json, callback){

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "person", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));

}

function postStandplass(json, callback){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

function postCompetition(json, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "competition", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

function addStandplass(json, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "competition/standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}


/**
 * Gets all weapongroups
 *
 **/
function getWeaponGroups(){
    
}

/**
 * Gets all weapon classes
 *
 **/
function getWeaponClasses() {
    
}

/**
 *
 *
 **/