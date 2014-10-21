angular.module('Services', ['ngResource'])
  .factory('Data', ['$resource', function ($resource) {

    return $resource('/api/users', {}, {
      query: { method: 'GET', isArray: true }
    });

  }])
  .service('Users', ['Data', 'socket', '_', function (Data, socket, _) {

    var users = Data.query();

    socket.on('useradd', function (user) {
      users.push(user);
    });

    socket.on('userremove', function (user) {
      _.remove(users, user);
    });

    return users;

  }]);