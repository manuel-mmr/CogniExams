(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($scope) {
    $scope.login = {};
    $scope.login.ctrlName = 'LoginCtrl';
  }
}());
