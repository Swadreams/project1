'use strict';

angular.module('myApp.phoneDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones/:phoneId', {
    template: '<phone-detail></phone-detail>'
  });
}]);