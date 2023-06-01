const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')


const moviesName = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

router.get('/movies', function (req, res) {
    console.log(moviesName);
    res.send('Solution of Problem_1 is done')
});

router.get('/movies/:indexNumber', function (req, res) {
    const indexNo = parseInt(req.params.indexNumber);
    if (indexNo < 0 || indexNo >= moviesName.length) {
        console.log('use a valid index, it is not a valid index.')
    }else{
        console.log(moviesName[indexNo]);
    }
    res.send('Solution of Problem_2 and _3 is done')
});

const moviesArr = [ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   

router.get('/films', function (req, res) {
    console.log(moviesArr);
    res.send('Solution of Problem_4 is done')
});

router.get('/films/:filmId', function (req, res) {
    const filmindex = parseInt(req.params.filmId);
    const filmid = filmindex - 1
    if (filmindex < 1 || filmindex > moviesArr.length) {
        console.log('No movie exists with this id')
    }else{
        console.log(moviesArr[filmid]);
    }
    res.send('Solution of Problem_5 is done')
});


// router.get('/test-you', function (req, res) {
//     console.log('The exported module is: ',commonFile)
//     commonFile.doSomething()
//     console.log('This is the constant I created', commonFile.name)
//     res.send('Hello there, welcome to this application!')
// });

// router.get('/test-underscore', function(req, res){
//     let result = myUnderscore.first([11,12,23,44,15], 4)
//     console.log('the result is',result)
//     res.send('done')
// })

// router.get('/cohorts', function (request, response){
//     // logic to get the cohorts from database
//     // logic tp get only the active cohorts
//     // logic to get only the cohort with a size than 50
//     // logic to get only the backend cohorts
//     response.send(['technetium','nobelium'])
// })

// router.get('/students', function(req, res){
//     // receive or access the query params in the code
//     // write a logic on these query params
//     // city, score
//     console.log(req.query)
//     let requestedCity = req.query.city
//     let sortField = req.query.sort
//     // logic to get students
//     res.send(["Sabiha","Neha","Akash","Sonali"])
// })

// router.get('/students/:studentName', function(req, res) {
//     console.log(req.params.studentName)
//     /// go to database and search for studentName student
//     // store the data found in this variable - studentDetails
//     //res.send({data: studentDetails})
//     res.send('student data')
// })


module.exports = router;