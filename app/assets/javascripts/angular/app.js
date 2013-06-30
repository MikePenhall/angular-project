var AngularForm = angular.module('AngularForm', ['templates'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/index', {templateUrl: 'submissions-list.html'}).
        when('/step_one', {templateUrl: 'form1.html'}).
        when('/step_two', {templateUrl: 'form2.html'}).
        otherwise({redirectTo: '/index'});
}]);