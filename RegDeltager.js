/**
 * Created by sondrefr on 17.04.2017.
 */

function moveRow(id){
    var row = document.getElementById(id);
    //alert(row.innerHTML)

    var div = document.createElement('div');
    div.innerHTML = row.innerHTML

    document.getElementById("RegTable").appendChild(div);



}