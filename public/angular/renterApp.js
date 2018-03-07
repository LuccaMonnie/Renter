angular.module('renterApp', []);

//pg 253 locationsListCtrl
//put data into the scope so that the view can use it

var locationListCtrl = function ($scope) {
  $scope.data = {
    //data here
  };
};






//this goes at the bottom
angular
  .module('renterApp')
  .controller('locationListCtrl', locationListCtrl);
