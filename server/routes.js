var PersonModel = require("./models").PersonModel;
var CommentModel = require("./models").ScorecardModel;
var CompetitionModel = require("./models").CompetitionModel;
var StandplassModel = require("./models").StandplassModel;
var WeapondClassModel = require("./models").WeaponClassModel;
var ClubModel = require("./models").ClubModel;
var TeamModel = require("./models").TeamModel;
var WeaponGroupModel = require("./models").WeaponGroupModel;


var appRouter = function(app) {

    //GET

    //Returns sall people
    app.get("/person", function (req, res) {
        PersonModel.find({}, function(error, people){
            if(error){
                return res.status(400).send(error);
            }
            res.send(people);
        });
    });

    //returns a person with the id provided
    app.get("/person/:id", function (req, res) {
        PersonModel.getById(req.params.id, function(error, person){
            if(error){
                return res.status(400).send(error);
            }
            res.send(person);
        });
    });

    //Returns a person by email.
    app.get("/person/findByEmail/:email", function (req, res) {
        PersonModel.find({email: req.params.email}, {load: ["comments"]},  function(error, person){
            if(error){
                return res.status(400).send(error);
            }
            res.send(person);
        });
    });

    //Gets all competitions
    app.get("/competition", function (req, res){
        //Should maybe load stuff
        CompetitionModel.find({}, function(error, competitions){
            if(error){
                return res.status(400).send(error);
            }
            res.send(competitions);
        });
    });

    //Gets competition by id
    app.get("/competition/:id", function (req, res) {
        CompetitionModel.getById(req.params.id, function(error, competition){
            if(error){
                return res.status(400).send(error);
            }
            res.send(competition);
        });
    });

    //Gets weapongroups
    app.get("/weaponGroup", function (req, res) {
        WeaponGroupModel.find({}, function (error, weaponGroup) {
            if(error){
                return res.status(400).send(error);
            }
            re.send(weaponGroup);
        });
    });

    //Gets weaponClass
    app.get("/weaponClass", function (req, res) {
        WeaponGroupModel.find({}, function (error, weaponClass) {
            if(error){
                return res.status(400).send(error);
            }
            re.send(weaponClass);
        });
    });


    //POST

    //Adds a person
    app.post("/person", function(req, res) {
        var person = new PersonModel({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            shooterId: req.body.shooterId,
            phone: req.body.phone
        });
        person.save(function (error, result) {
            if(error){
                return res.status(400).send(error);
            }
            return result;
        });
    });

    //Saves a reference object
    //expects a person id in the json
    app.post("/comment", function (req, res) {
        var comment = new CommentModel({
            message: req.body.message
        });
        comment.save(function(error, result){
           if(error){
               return res.status(400).send(error);
           }
           PersonModel.getById(req.body.id, function(error, person){
               if(error){
                   return res.status(400).send(error);
               }
               person.comments.push(comment);
               person.save(function(error, result){
                   if(error){
                       return res.status(400).send(error);
                   }
                   res.send(person);
               });
           });
        });

    });
    //Saves competition without any references yet
    //References will be saved afterwards
    app.post("/competition", function (req, res) {
        var competition = new CompetitionModel({
            competitionType: req.body.competitionType,
            program: req.body.program,
            location: req.body.location,
            discipline: req.body.discipline,
            active: req.body.active,
            competitionNumber: req.body.competitionNumber,
            date: req.body.date
        });
        competition.save(function (error, result) {
            if(error){
                return res.status(400).send(error);
            }
            return result;
        });

    });
};

module.exports = appRouter;