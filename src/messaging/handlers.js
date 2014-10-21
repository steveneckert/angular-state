'use strict';

var postal = require('postal');

var channel = postal.channel();

module.exports = function (io) {

  io.on('connection', function (socket) {

    var subscriptions = [];

    subscriptions.push(channel.subscribe('user.add', function (user) {
      socket.emit('useradd', user);
    }));

    subscriptions.push(channel.subscribe('user.remove', function (user) {
      socket.emit('userremove', user);
    }));

    socket.on('disconnect', function () {
      subscriptions.forEach(function (sub) { sub.unsubscribe(); });
    });

  });

};