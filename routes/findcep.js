var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req , res) => {
    res.status(404).send("BAD ROUTE!");
});


router.get('/:cep', (req , res) => {
    let cep = req.params['cep'];
    
    // verificar o cep, tem que ser composto por 8 números
    // [0-9]{8}
    const regex_str = /^[0-9]{8}$/;
    const regex = new RegExp(regex_str);
    
    
    if (!regex.test(cep)) {
        res.status(404).send("BAD REQUEST");
    }
    
    const url = `https://viacep.com.br/ws/${cep}/json`;
    
    fetch(url)
    .then(res => res.json())
    .then ( function(json) {
        if ( json.hasOwnProperty('erro')) {
            res.status(404).send("CEP INEXISTENTE");
        }
        else{
            res.send(json)
        }
    }); 
    

});

module.exports = router;