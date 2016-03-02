(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl'
      }
      .state('login'. {
          url: '/login',
          templateUrl: 'login/login.tpl.html',
          controller: 'LoginCtrl'
      }));
  }
}());
