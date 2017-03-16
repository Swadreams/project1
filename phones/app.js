'use strict';

angular.module('myApp.phones', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones', {
    templateUrl: 'phones/index.html',
    //controller: 'PhoneListController'
  });
}])

// .controller('View1Ctrl', [function() {

// }])

// .controller('PhoneListController', function PhoneListController($scope) {
//   $scope.phones = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     }, {
//       name: 'MOTOROLA XOOM™',
//       snippet: 'The Next, Next Generation tablet.'
//     }
//   ];
// });