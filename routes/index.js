var express = require('express');
var router = express.Router();

const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

/* GET home page. */
router.get('/', function(req, res, next) {
  let numbers = [{id:1, value:0}];
  numbers_length = numbers.length
  res.render('index', { title: 'Express', numbers: numbers, numbers_length: numbers_length, answer: '0' });
});

router.post('/', function(req, res, next) {

  mapped_numbers = [];
  let index = 1;
  for (const property in req.body) {
    if(property != "totalInputs") {
      let num = Number(req.body[property])
      console.log(property + " = " + num);
      mapped_numbers.push({id:index, value:num});
      index++;  
    }
  }
  
  let numbers = [];
  numbers = mapped_numbers.map(a => a.value);
  //console.log(mapped_numbers);
  //console.log(numbers);
  var answer = addArrayNumbers(numbers);
  //console.log(numbers + " " + answer)
  numbers_length = numbers.length
  res.render('index', { title: 'Express', numbers: mapped_numbers, numbers_length: numbers_length, answer: answer });
});

module.exports = router;
