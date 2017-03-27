var express = require("express");
var couchbase = require("couchbase");
var bodyParser = require("body-parser");
var ottoman = require("ottoman");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var cluster = new couchbase.Cluster("localhost:8091")
var bucket = cluster.openBucket("example");
