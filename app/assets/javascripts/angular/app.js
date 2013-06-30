var AngularForm = angular.module('AngularForm', ['ngResource, templates'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/step_one', {templateUrl: 'form1.html', controller: SubmissionsCtrl}).
        when('/step_two', {templateUrl: 'form2.html', controller: SubmissionsCtrl}).
        otherwise({redirectTo: '/step_one'});
}]);