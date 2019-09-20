var express = require('express');
var router = express.Router();
var tokenService = require('../services/tokenService');

router.get('/token', function (req, res) {
    tokenService.viewToken(req,res);
})

router.post('/posttoken', function (req, res) {
    tokenService.postToken(req,res);
})

module.exports = router;