// Register `phoneList` component, along with its associated controller and template
angular.
  module('myApp.phones').
  component('phoneList', {
    // template:
    //     '<ul>' +
    //       '<li ng-repeat="phone in $ctrl.phones">' +
    //         '<span>{{phone.name}}</span>' +
    //         '<p>{{phone.snippet}}</p>' +
    //       '</li>' +
    //     '</ul>',
    templateUrl: 'phones/phone-list.template.html',
    controller: function PhoneListController($scope, $http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phonesdata/phones.json').then(function(response){
            self.phones = response.data;
        });
    }
  });