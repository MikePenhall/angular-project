AngularForm.controller('SubmissionsCtrl', ['$scope', '$location', 'SubmissionsService', function ($scope, $location, SubmissionsService) {
    $scope.submissions = []

    // Get all submissions from SubmissionsService
    SubmissionsService.index(function (response){
      $scope.submissions.push(response);
    }, function (response) {
      $scope.err = "Error retrieving submissions"
    });

    $scope.create = function(submission) {
      SubmissionsService.create(submission, function(response) {
        $scope.submissions.push(response);
      });
    };

    $scope.go = function(path) {
      $location.path(path);
    };

}]);
