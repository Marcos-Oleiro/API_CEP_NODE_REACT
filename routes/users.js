var express = require('express');
var router = express.Router();

let users = [
  {id: 1, nome : 'marcos', cidade: "Rio Grande"},
  {id: 2, nome : 'vanessa', cidade: "Porto Alegre"},
  {id: 3, nome : 'pessoa3', cidade: "cidade3"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json( users );
});

router.get('/:id', (req, res) => {
   let id = req.params['id'];
   let user = users[id]
  res.json(user);
});

module.exports = router;
