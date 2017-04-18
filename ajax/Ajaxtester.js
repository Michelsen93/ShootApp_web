/**
 * Created by ole-martin on 18.04.2017.
 */

function saveJohn(){
    var John = new Object();
    var namestruct = new Object();
    name.first = "Jonh";
    name.last = "Doe";
    John.name = namestruct;
    John.phone = "123";
    John.mail = "me@you.us";
    John.shooterId = "xDragonSlayer69x";


    postPerson(John, function(){
        console.log("okokok");
    });
}

saveJohn();