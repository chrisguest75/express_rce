var express = require('express');
var router = express.Router();

const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

/* GET home page. */
router.get('/', function(req, res, next) {
  let numbers = [{id:0, value:0}];
  res.render('index', { title: 'Express', numbers: numbers, answer: '0' });
});

router.post('/exploit', function(req, res, next) {

  let numbers = [];

  for (const property in req.body) {
    numbers.push(Number(req.body[property]));
  }



  mapped_numbers = [{id:0, value:967}, 
    {id:1, value:78}, 
    {id:2, value:192}, 
    {id:3, value:168}, 
    {id:4, value:43}, 
    {id:5, value:90},
    {id:6, value:8888}];

  numbers = mapped_numbers.map(a => a.value);
  var answer = addArrayNumbers(numbers);
  console.log(numbers + " " + answer)
    
  res.render('index', { title: 'Express', numbers: mapped_numbers, answer: answer });
});

module.exports = router;
