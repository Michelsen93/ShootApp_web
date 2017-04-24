/**
 * Created by ole-martin on 15.04.2017.
 */


var baseURL = "http://localhost:3000/";



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

        };
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


/**
 * Saves a standplass
 * @param json
 * @param callback
 */
function postStandplass(json, callback){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a competition
 * @param json
 * @param callback
 */
function postCompetition(json, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", baseURL + "competition", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a club
 * @param json
 * @param callback
 */
function postClub(json, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "club", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        };
    };
    xhttp.send(JSON.stringify(json));
}


/**
 * Adds a standplass to competition
 * json must contain competitionNumber, and number of standplass
 * @param json
 * @param callback
 */
function addStandplass(json, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        };
    };
    xhttp.send(JSON.stringify(json));
}

/**
 * Adds a contact person to cometition
 * json must contain mail for person, competitionNumber
 * @param json
 * @param callback
 */
function addContactPerson(json, callback){

}
/**
 * Sets the club for the competition
 * json must contain name of club, competitionNumber
 * @param json
 * @param callback
 */
function addClub(json, callback){

}

/**
 * adds a new team to competition
 * json must contain a complete team json(see TeamModel in models.js), competitionNumber
 * @param json
 * @param callback
 */
function addTeam(json, callback){

}

/**
 * adds a competitor to competition
 * json must contain mail for person, competitionNumber
 * @param json
 * @param callback
 */
function addCompetitor(json, callback) {

}
/**
 * adds a referee to competition
 * json must contain mail for person, competitionNumber
 * @param json
 * @param callback
 */
function addReferee(json, callback) {

}
/**
 * adds a leader to competition
 * json must contain mail for person, competitionNumber
 * @param json
 * @param callback
 */
function addCompetitionLeader(json, callback) {

}


/**
 * Adds a weaponClass to competition
 * json must contain name of weaponClass, competitionNumber
 * @param json
 * @param callback
 */
function addWeaponClass(json, callback){

}
/**
 * Adds a weapongroup to competition
 * json must contain weaponName of weapongroup, competitionNumber
 * @param json
 * @param callback
 */
function addWeaponGroup(json, callback){

}



/**
 * Gets all weapongroups
 *
 **/
function getWeaponGroups(json, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "weaponGroup", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        };
    };
    xhttp.send(JSON.stringify(json));
}

/**
 * Gets all weapon classes
 *
 **/
function getWeaponClasses(json, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "weaponClass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);
            callback(xhttp.responseText);

        };
    };
    xhttp.send(JSON.stringify(json));
}

/**
 *
 *
 **/