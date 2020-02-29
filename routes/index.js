var express = require('express');
var router = express.Router();

const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

/* GET home page. */
router.get('/', function(req, res, next) {
  let numbers = [{id:0, value:0}];
  res.render('index', { title: 'Express', numbers: numbers, answer: '0' });
});

router.post('/', function(req, res, next) {

  mapped_numbers = [];
  let index = 0;
  for (const property in req.body) {
    let num = Number(req.body[property])
    console.log(property + " = " + num);
    mapped_numbers.push({id:index, value:num});
    index++;
  }
  
  let numbers = [];
  numbers = mapped_numbers.map(a => a.value);
  //console.log(mapped_numbers);
  //console.log(numbers);
  var answer = addArrayNumbers(numbers);
  //console.log(numbers + " " + answer)
    
  res.render('index', { title: 'Express', numbers: mapped_numbers, answer: answer });
});

module.exports = router;
