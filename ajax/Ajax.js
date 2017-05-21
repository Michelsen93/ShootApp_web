/**
 * Created by ole-martin on 15.04.2017.
 */


var baseURL = "http://158.37.225.110:3000/";



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
 * gets all scorecards
 * @param callback
 */
function getScorecards(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "scoreCard", true);
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
 * gets club by name
 * @param name string with complete name of club, OBS! case sensitive
 * @param callback
 */
function getClubByName(name, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "club/findByName/" + name, true);
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
 * gets all clubs
 * @param callback
 */
function getClubs(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "club", true);
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
 * @param callback function to handle the response the response is a json
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
 * gets a person by mail
 * @param mail of person
 * @param callback to handle the json
 */
function getPersonByMail(mail, callback){
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
 * Gets all competitions
 * @param callback function to handle the json response
 */
function getCompetitions(callback){
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
 * gets competition by compeitionNumber
 * @param competitionNumber
 * @param callback function to handle the json response
 */
function getCompetitionByCompetitionNumber(competitionNumber, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "competition/findByCompetitionNumber/" + competitionNumber, true);
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
 * gets competition by the (string) competitionNumber in param,
 * @param competitionNumber
 * @param callback, handle the response
 */
function getScorecardsByCompetitionNumber(competitionNumber, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "scorecard/getByCompetitionNumber/" + competitionNumber, true);
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
 * gets all weaponGroups
 * @param callback function to handle json response
 */
function getWeaponGroups(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "weaponGroup", true);
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
 * gets all weaponClasses
 * @param callback function to handle json response
 */
function getWeaponClasses(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", baseURL + "weaponClass", true);
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
 * Saves a person in jsonformat to server
 * @param json, must contain firstName, lastName, mail, shooterId, phone
 */
function postPerson(json){

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "person", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));

}

/**
 *
 * @param json, must contain competitionNumber, mail of person
 */
function postScorecard(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "scoreCard", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a standplass
 * @param json, must contain: name, number, maxHits, numberOfFigures
 */
function postStandplass(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a competition
 * @param json, must contain: competitionType, program, location, discipline, active,
 * competitionNumber, date
 */
function postCompetition(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * Saves a club
 * @param json, must contain: mail, name, address
 */
function postClub(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "club", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 * post a new weaponclass
 * @param json , must contain descriptio, weaponName
 */
function postWeaponClass(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "weaponClass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 *
 * @param json , must contain description, name
 */
function postWeaponGroup(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "weaponGroup", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    console.log(json);
    xhttp.send(JSON.stringify(json));
}


/**
 * Adds a standplass to competition
 * json must contain competitionNumber, and number of standplass
 * @param json
 */
function addStandplass(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/standplass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Got response
            //Run callback
            console.log(xhttp.responseText);


        };
    };
    xhttp.send(JSON.stringify(json));
}

/**
 * Adds a contact person to club
 * json must contain mail for person, name of club
 * @param json
 */
function addContactPersonToClub(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "club/contactPerson", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}


/**
 * Adds existing competition to club
 * @param json, must contain name of club, competitionNumber
 */
function addCompetitionToClub(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "club/competition", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}




/**
 * Sets the club for the competition
 * json must contain name of club, competitionNumber
 * @param json
 */
function addClub(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "club/contactPerson", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * adds a new team to competition
 * json must contain   teamNumber, startTime, competitionNumber
 * @param json
 */
function addTeam(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/team", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 *
 * @param json, competitors[mail1, mail2...], teamNumber
 */
function addMembersToTeam(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "team/competitors", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}

/**
 * adds a competitor to competition
 * json must contain mail for person, competitionNumber
 * @param json
 */
function addCompetitor(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/competitor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 * adds a referee to competition
 * json must contain mail for person, competitionNumber
 * @param json
 */
function addReferee(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/referee", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 * adds a leader to competition
 * json must contain mail for person, competitionNumber
 * @param json
 */
function addCompetitionLeader(json) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/competitionLeader", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}


/**
 * Adds a weaponClass to competition
 * json must contain name of weaponClass, competitionNumber
 * @param json
 */
function addWeaponClass(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/weaponClass", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}
/**
 * Adds a weapongroup to competition
 * json must contain weaponName of weapongroup, competitionNumber
 * @param json
 */
function addWeaponGroup(json){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL + "competition/weaponGroup", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}







/**
 *
 *
 **/