/**
 * Created by ole-martin on 15.04.2017.
 */


var baseURL = "http://158.37.224.27:3000/";


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
function getAllPersons() {
    
}

/**
 * Gets a person
 * @param callback function to handle the response
 **/
function getPerson(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "person", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
        }
    };

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