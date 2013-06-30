var AngularForm = angular.module('AngularForm', ['templates'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/index', {templateUrl: 'submissions.html', controller: 'SubmissionsCtrl'}).
        when('/step_one', {templateUrl: 'form1.html', controller: 'SubmissionsCtrl'}).
        when('/step_two', {templateUrl: 'form2.html', controller: 'SubmissionsCtrl'}).
        otherwise({redirectTo: '/index'});
}]);