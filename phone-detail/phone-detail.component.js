angular.
  module('myApp.phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
         //this.phoneId = $routeParams.phoneId;
        var self = this;

        self.setImage = function setImage(imageUrl){
          self.mainImageUrl = imageUrl;
        };

        console.log('Path is : phonesdata/' + $routeParams.phoneId + '.json');
        $http.get('phonesdata/' + $routeParams.phoneId + '.json').then(function(response){
          self.phone = response.data;
          self.setImage(self.phone.images[0]);
        });
      }
    ]
  });