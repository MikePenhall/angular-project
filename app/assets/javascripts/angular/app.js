var AngularForm = angular.module('AngularForm', ['templates'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/step_one', {templateUrl: 'form1.html'}).
        when('/step_two', {templateUrl: 'form2.html'}).
        otherwise({redirectTo: '/step_one'});
}]);