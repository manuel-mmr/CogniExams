(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $state) {
    $scope.home = {};
    $scope.home.ctrlName = 'HomeCtrl';
    
  }
}());
