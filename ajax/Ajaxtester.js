/**
 * Created by ole-martin on 18.04.2017.
 */

function testsavePerson(){
    var John = new Object();

    John.firstName = "John";
    John.lastName = "Doe";
    John.phone = "123";
    John.email = "me@you.us";
    John.shooterId = "xDragonSlayer69x";


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
    standplass.name = "test";
    standplass.number = 1;
    standplass.maxHits = 4;
    standplass.numberOfFigures = 3;

    postStandplass(standplass, function () {
        console.log(standplass);
    });
}

function testPostCompetition() {
    var competition = new Object();
    competition.date = new Date();
    competition.competitionNumber = 1;
    competition.competitionType = "standard";
    competition.program = "vanlig program";
    competition.discipline = "hard";
    competition.active = true;
    postCompetition(competition, function () {
        console.log(competition);
    })


}

function testAddStandplass() {
    var ids = new Object();
    ids.number = 1;
    ids.competitionNumber = 1;
    console.log(ids);
    addStandplass(ids, function(){
        console.log(ids);
    })
}

function testAddClub(){

}





















