var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', answer: '0' });
});

router.post('/exploit', function(req, res, next) {
  console.log(req)

  const number1 = Number(req.body.number1)
  const number2 = Number(req.body.number2)

    
  res.render('index', { title: 'Express', answer: number1 + number2  });
});

module.exports = router;
