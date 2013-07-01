AngularForm.controller('SubmissionsCtrl', ['$scope', '$location', '$rootScope', 'SubmissionsService', 
  function ($scope, $location, $rootScope, SubmissionsService) {
    $scope.submissions = [];
    $scope.submission = $rootScope.submission;

    // Get all submissions from SubmissionsService
    SubmissionsService.index(function (response){
      $scope.submissions.push(response);
    }, function (response) {
      $scope.err = "Error retrieving submissions"
    });

    $scope.updateSubmission = function(submission) {
      $scope.submission = submission;
    };

    $scope.go = function(path) {
      $rootScope.submission = $scope.submission;
      $location.path(path);
    };

    $scope.create = function(submission) {
      SubmissionsService.create(submission, function(response) {
        $scope.submissions.push(response);
      });
      $location.path('/index'); 
    };

}]);
