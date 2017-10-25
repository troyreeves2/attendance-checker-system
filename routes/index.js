var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://tjreeves2:Manunited06!@ds227865.mlab.com:27865/testdata";
mongoose.connect('connectionstring', { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffId: String,
    firstName: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);


router.get('/add-random-student', function(req, res, next){
   
    var rand = new Student({
        
            buffId: '0123456',
            firstName: 'Random',
            lastName: 'Student'
});
    rand.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('The student is save in the db');
        }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send("Hello, I greet you");
});

router.get('/greeting2', function(req, res, next){
    res.send("Hello, I greet you again");
});


module.exports = router;
