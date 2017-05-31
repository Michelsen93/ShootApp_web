/**
 * Created by ole-martin on 18.04.2017.
 */

function testsavePerson(){
    var John = new Object();

    John.firstName = "Ole";
    John.lastName = "Michelsen";
    John.phone = "69696969";
    John.mail = "95";
    John.shooterId = "Me";


    //postPerson(John, function(){
    //    console.log("okokok");
    //});
    postPerson(John, function () {
        console.log(John)
    });
}
function testGetByEmail(){
    var email = "me@you.us"
    getPersonByMail(email, function () {
        
    });
}


function testPostStandplass(){
    var standplass = new Object();
    standplass.name = "1";
    standplass.number = "2020";
    standplass.maxHits = 4;
    standplass.numberOfFigures = 3;

    postStandplass(standplass);
}

function testPostCompetition() {
    var competition = new Object();
    competition.date = new Date();
    competition.competitionNumber = 123;
    competition.competitionType = "standard";
    competition.program = "vanlig program";
    competition.discipline = "hard";
    competition.club="Åsane"
    competition.active = true;
    postCompetition(competition, function () {
        console.log(competition);
    })


}

function testAddStandplass() {
    var ids = new Object();
    ids.numbers = ["2020", "NM1701", "NM1702"];
    ids.competitionNumber = "123";

    addStandplass(ids, function(){
        console.log(ids);
    })
}


function testAddClub(){

    var club = new Object();
    club.name = "Åsane";
    club.address = "skytebane 1";
    club.mail = "åpk@gmail.com";

    postClub(club);
}
function testAddContactPerson(){
    var adder = new Object();
    adder.mail = "pokemaster@won.league";
    adder.name = "Åsane";
    addContactPersonToClub(adder);
}

function testPostWeaponClass(){
    var weaponClass = new Object();
    weaponClass.description = "For gode";
    weaponClass.weaponName = "A";
    postWeaponClass(weaponClass);
}

function testPostWeaponGroup(){
    var weaponGroup = new Object();
    weaponGroup.name = "Kniv";
    weaponGroup.description = "Skarp";
    postWeaponGroup(weaponGroup);

}

function testAddCompetitionToClub(){
    var saver = new Object();
    saver.name = "Åsane";
    saver.competitionNumber = "123";
    addCompetitionToClub(saver);
}

function testAddTeam() {
    var team = {
        competitionNumber: "123",
        startTime: "10:00",
        teamNumber: "33323"
    };
    console.log(team)
    addTeam(team);

}

function testAddMemberToTeam() {
    var team = {
        competitors: ["123", "pokemaster@won.league"],
        competitionNumber: "123",
        teamNumber: "33323"
    };
    addMembersToTeam(team);
}

function testDeletePerson(){
    var _id = "89a81f47-edd0-4249-9aca-3c859a466e92";
    deletePerson(_id)
}























