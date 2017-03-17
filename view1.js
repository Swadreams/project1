'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
   // var self = this;
          $http.get('phonesdata/phones.json').then(function(response){
           $scope.phones = response.data;
           console.log('Response : ' + $scope.phones[0].imageUrl);
        });


        $scope.myInterval = 3000;
});