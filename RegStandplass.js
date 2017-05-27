/**
 * Created by sondrefr on 22.05.2017.
 */

/**
 * Gives input when creating a new standplass
 */
var iStandplass = 0
function addStandplasser(){
    if(iStandplass<1) {
        var div = document.createElement('div');
        var div = document.createElement('div');
        div.innerHTML = '<form class="form-inline">' +

            '<label class="col-md-5 control-label">ID:</label> <br>' +
            '<input  id="number" type="text" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Navn:</label> <br>' +
            '<input  id="name" type="text" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Antall skudd:</label> <br>' +
            '<input  id="maxHits" type="number" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Antall figurer:</label> <br>' +
            '<input  id="numFig" type="number" class="form-control input-md" required><br>' +

            '<label class="col-md-8 control-label">Beskrivelse:</label> <br>' +
            '<textarea  id="description"  class="form-control input-md" required></textarea><br><br>' +

            '<button  class="btn btn-primary col-md-3" onclick="addStandplassToTable(this)">Legg til standplass</button>' +
            '</form>';
        document.getElementById("newStandplass").appendChild(div);
        iStandplass++
    }
}

/**
 * Adds the stanplass to the registered standplassr table
 * @param div, the div with the input
 */
function addStandplassToTable(div){
    var table = document.getElementById("tableStandplass")
    var row = table.insertRow(table.rows.length)


    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)


    cell1.innerHTML = document.getElementById("number").value
    cell2.innerHTML = document.getElementById("name").value
    cell3.innerHTML = document.getElementById("maxHits").value
    cell4.innerHTML = document.getElementById("numFig").value
    cell5.innerHTML = document.getElementById("description").value
    cell6.innerHTML = '<button  class="btn btn-primary">Fjern</button>';
    cell6.onclick = removeStandplass
/*
    var standplassObject = {
        name: cell2.innerHTML,
        number: cell1.innerHTML,
        maxHits: cell3.innerHTML,
        numberOfFigures: cell4.innerHTML,
        description: cell5.innerHTML,
    }
    postStandplass(standplassObject)
    */
    document.getElementById('newStandplass').removeChild(div.parentNode.parentNode);
    iStandplass--
}

/**
 * Removes the standplass from the registerd table
 */
function removeStandplass(e){
    var parent = e.target.parentNode.parentNode
    var table = document.getElementById("tableStandplass")
    parent.remove(table)


}

/**
 * Creats an array of all the standplasser
 */
function addStandplasserToStevne() {
    table1 = document.getElementById("tableStandplass")
    var standplassTable = []

    for (i=1; i<table1.rows.length; i++) {


        var standplassObject = {
            name: table1.rows[i].cells[1].innerHTML,
            number: table1.rows[i].cells[0].innerHTML,
            maxHits: table1.rows[i].cells[2].innerHTML,
            numberOfFigures: table1.rows[i].cells[3].innerHTML,
            description: table1.rows[i].cells[4].innerHTML,
        }
        standplassTable[i-1] = standplassObject

    }


    if(standplassTable.length > 0){
        for(i = 0; i < standplassTable.length; i++){
            console.log(standplassTable[i])
            postStandplass(standplassTable[i])
        }
    }

    /*
    if(standplassTable.length > 0){
        for(i = 0; i < standplassTable.length; i++){
            var standplassObject2 = {
                number: standplassTable[i].number,
                competitionNumber: localStorage.getItem("competitionNumber")

            }
            console.log(standplassObject2)
            addStandplass(standplassObject2)
        }

    }
    */
    console.log(standplassTable[0].number)
    var standplassString = ""
    for (i = 0; i < standplassTable.length; i++){
        standplassString = standplassString + standplassTable[i].number + " "
    }
    console.log(standplassString)
    localStorage.setItem("standplassString", standplassString)
}

/**
 * stops the program for å defined time
 * @param time, how long the program stops
 */
function sleep(time) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + time) { /* do nothing */
    }
}