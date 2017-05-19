/**
 * Created by ole-martin on 18.04.2017.
 */

function testsavePerson(){
    var John = new Object();

    John.firstName = "Ash";
    John.lastName = "Ketshum";
    John.phone = "545454";
    John.mail = "garrysux@pikapika.gym";
    John.shooterId = "the very best";


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
    standplass.name = "test3";
    standplass.number = 3;
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
    ids.number = 3;
    ids.competitionNumber = 123;
    console.log(ids);
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
    adder.mail = "me@you.us";
    adder.name = "Åsane";
    addContactPersonToClub(adder);
}

function testPostWeaponClass(){
    var weaponClass = new Object();
    weaponClass.description = "Sier pang";
    weaponClass.weaponName = "Bazooka";
    postWeaponClass(weaponClass);
}

function testPostWeaponGroup(){
    var weaponGroup = new Object();
    weaponGroup.name = "Liten";
    weaponGroup.description = "for rike";
    postWeaponGroup(weaponGroup);

}

function testAddCompetitionToClub(){
    var saver = new Object();
    saver.name = "zzz";
    saver.competitionNumber = 123;
    addCompetitionToClub(saver);
}


testAddStandplass()






















