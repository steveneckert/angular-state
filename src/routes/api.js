'use strict';

var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET home page. */
router.get('/users', function(req, res) {
    res.json(Users.list());
});

module.exports = router;
