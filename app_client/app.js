angular.module('Renter', []);

function config ($routeProvider) {
  $routeProvider
    .when('/', { //add other .when sections to add other pages
      templateUrl: 'home/home.view.html'
    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('Renter')
  .config(['$routeProvider', config]);
