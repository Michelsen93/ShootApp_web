var PersonModel = require("./models").PersonModel;
var CommentModel = require("./models").CommentModel;


var appRouter = function(app) {
    app.get("/person", function (req, res) {
        PersonModel.find({}, function(error, people){
            if(error){
                return res.status(400).send(error);
            }
            res.send(people);
        });
    });

    app.get("/person:id", function (req, res) {

    });

    app.post("/person", function(req, res) {
        var person = new PersonModel({
            name: {
                first: req.body.name.first,
                last: req.body.name.last
            },
            email: req.body.email
        });
        person.save(function (error, result) {
            if(error){
                return res.status(400).send(error);
            }
            return result;
        });
    });

    app.post("/comment", function (req, res) {

    });
};

module.exports = appRouter;