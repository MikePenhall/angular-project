var AngularForm = angular.module('AngularForm', ['templates'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/index', {templateUrl: 'index.html'}).
        when('/step_one', {templateUrl: 'form1.html'}).
        when('/step_two', {templateUrl: 'form2.html'}).
        otherwise({redirectTo: '/index'});
}]);