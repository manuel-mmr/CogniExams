/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LoginCtrl', function () {
  var scope;

  beforeEach(module('login'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('LoginCtrl', {$scope: scope});
  }));

  it('should have ctrlName as LoginCtrl', function () {
    expect(scope.login.ctrlName).toEqual('LoginCtrl');
  });
});
