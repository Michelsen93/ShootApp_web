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

    //Gets competition by competitionNumber
    app.get("/competition/findByCompetitionNumber/:competitionNumber", function (req, res) {
        CompetitionModel.find({email: req.params.competitionNumber}, function(error, competition){
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
            res.send(weaponGroup);
        });
    });

    //Gets weaponClass
    app.get("/weaponClass", function (req, res) {
        WeaponGroupModel.find({}, function (error, weaponClass) {
            if(error){
                return res.status(400).send(error);
            }
            res.send(weaponClass);
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

    app.post("/standplass", function(req, res) {
        var standplass = new StandplassModel({
            name: req.body.name,
            number: req.body.number,
            maxHits: req.body.maxHits,
            numberOfFigures: req.body.numberOfFigures

        });
        standplass.save(function (error, result) {
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

    //Saves a weapongroup
    app.post("/weaponGroup", function (req, res) {
        var weaponGroup = new WeaponGroupModel({
            name: req.body.names,
            description: req.body.description
        });
        weaponGroup.save(function (error, result) {
            if(error){
                return res.status(400).send(error);
            }
            return result;
        });
    });

    //Saves a weaponclass
    app.post("/weaponClass", function (req, res) {
        var weaponClass = new WeapondClassModel({
            description: req.body.description,
            weaponName: req.body.weaponName
        });
        weaponClass.save(function (error, result) {
            if(error){
                return res.status(400).send(error);
            }
            return result;
        });
    });

    //Saves a team to the competition with matching competitionnumber
    app.post("/competition/team", function (req, res) {
        var team = new TeamModel({
            teamNumber: req.body.teamNumber,
            competitionNumber: req.body.competitionNumber,
            startTime: req.body.startTime
        });
        team.save(function(error, result){
            if(error){
                return res.status(400).send(error);
            }
            CompetitionModel.find({competitionNumber: req.params.competitionNumber}, function(error, competition){
                if(error){
                    return res.status(400).send(error);
                }
                competition[0].teams.push(team);
                competition[0].save(function(error, result){
                    if(error){
                        return res.status(400).send(error);
                    }
                    res.send(competition[0]);
                });
            });
        });

    });

    /**
     * adds a standplass to a competition
     * standplass identified by number in body, competition identified by competitionNumber
     */
    app.post("/competition/standplass", function (req, res) {


            CompetitionModel.find({competitionNumber: req.body.competitionNumber}, function(error, competition){
                if(error){
                    return res.status(400).send(error);
                }
                StandplassModel.find({number: req.body.number},  function(error, standplass){
                    if(error){
                        return res.status(400).send(error);
                    }

                    competition[0].standplasses.push(standplass[0]);
                    competition[0].save(function(error, result){
                        if(error){
                        return res.status(400).send(error);
                        }
                    res.send(competition[0]);
                });
            });
        });

    });


    //OBS! ikke save alt. bare save objektet referansen er i
    app.post("/competition/club", function (req, res) {
        var club = new ClubModel({
            mail: req.body.mail,
            name: req.body.name,
            address: req.body.address,

        });
        club.save(function(error, result){
            if(error){
                return res.status(400).send(error);
            }
            CompetitionModel.find({competitionNumber: req.params.competitionNumber}, function(error, competition){
                if(error){
                    return res.status(400).send(error);
                }
                competition.club.push(club);
                competition.save(function(error, result){
                    if(error){
                        return res.status(400).send(error);
                    }
                    res.send(competition);
                });
            });
        });

    });





};



module.exports = appRouter;