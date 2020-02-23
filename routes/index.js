var express = require('express');
var router = express.Router();

const addTwoNumbers = require('@chrisguest75/array_add_rce');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', number1: 0, number2: 0, answer: '0' });
});

router.post('/exploit', function(req, res, next) {
  const number1 = Number(req.body.number1)
  const number2 = Number(req.body.number2)

  var answer = addTwoNumbers(number1, number2);
  console.log(number1 + " + " + number2 + " = " + answer)
    
  res.render('index', { title: 'Express', number1: number1, number2: number2, answer: answer });
});

module.exports = router;
