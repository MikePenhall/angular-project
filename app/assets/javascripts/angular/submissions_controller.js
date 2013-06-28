AngularForm.controller('SubmissionsCtrl', ['$scope', 'SubmissionsService', function ($scope, SubmissionsService) {
    SubmissionsService.allSubmissions(function(data) {
      $scope.submissions = data;
    })
    console.log($scope.submissions);
}]);
