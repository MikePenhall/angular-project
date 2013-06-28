AngularForm.controller('SubmissionsCtrl', ['$scope', 'SubmissionsService', function ($scope, SubmissionsService) {
    $scope.submissions = SubmissionsService.index();

    $scope.create = function(submission) {
      console.log(submission);
      // SubmissionsService.update(submission);
    };
}]);
