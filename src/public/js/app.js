angular.module('angularStateApp',
  [
    'ngResource',
    'btford.socket-io',
    'Services'
  ])
  .constant('_', window._)
  .factory('socket', function (socketFactory) {
    return socketFactory();
  })
  .controller('MainController', ['$scope', 'Users', function ($scope, Users) {
    $scope.users = Users;
  }]);
