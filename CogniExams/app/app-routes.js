(function () {
  'use strict';

  angular
    .module('cogniExams')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
