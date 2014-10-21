'use strict';
var _ = require('lodash');
var fs = require('fs');
var csv = require('fast-csv');
var path = require('path');
var channel = require('postal').channel();

var users = [];
var allUsers = [];

var stream = fs.createReadStream(path.join(__dirname, "allusers.csv"));
var csvStream = csv({headers: true})
    .on("data", function(data){
         allUsers.push(data);
    });

stream.pipe(csvStream);

// randomly add users to the list
setInterval(function () {
  var user = _(allUsers).at(_.random(0, allUsers.length - 1)).first();
  users.push(user);
  channel.publish('user.add', user);
}, _.random(500, 2000));

// randomly remove users to the list
setInterval(function () {
  var user = _(users).at(_.random(0, users.length - 1)).first();
  _.remove(users, user);
  channel.publish('user.remove', user);
}, _.random(3000, 5000));

module.exports = {
    list: function () {
        return users;
    }
};
