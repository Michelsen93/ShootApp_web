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


testGetByEmail();