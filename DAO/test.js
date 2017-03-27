/**
 * Created by ole-martin on 26.03.2017.
 */

//Trenger couchbase module

//opprette db:

var couchbase = require("couchbase");

var url = "127.0.0.1:8091";
var bucketName = "sync_gateway";
var password = "bucketPassword"

//evt passord



var cluster = new couchbase.Cluster(url);

var bucket = cluster.openBucket(bucketName, password, function(err){
    if(err){
        console.log("Error opening cluster with url: " + url);
    }
});

var dockId = "temp::123";

bucket.get(dockId, function (err, result) {
    if(err){
   console.log("Error opening bucket with id: " + dockId);
    } else{
        var jsonDocument = result;
        var jsonObject = result.value;
        var attr = jsonDocument.attr;
    }

});

