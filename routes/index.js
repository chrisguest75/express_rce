var express = require('express');
var router = express.Router();

const [addTwoNumbers, addArrayNumbers] = require('@chrisguest75/array_add_rce');

/* GET home page. */
router.get('/', function(req, res, next) {
  let numbers = [0];
  res.render('index', { title: 'Express', numbers: numbers, answer: '0' });
});

router.post('/exploit', function(req, res, next) {

  let numbers = [];

  for (const property in req.body) {
    numbers.push(Number(req.body[property]));
  }

  numbers = [967, 78, 10, 12, 200, 37, 8888];
  var answer = addArrayNumbers(numbers);
  console.log(numbers + " " + answer)
    
  res.render('index', { title: 'Express', numbers: numbers, answer: answer });
});

module.exports = router;
